<?php
declare(strict_types=1);

namespace Shrikeh\SymfonyKernel;

use Safe\Exceptions\StringsException;
use Shrikeh\SymfonyKernel\BundleLoader\FileBundleLoader;
use Shrikeh\SymfonyKernel\Kernel\BundleKernelInterface;
use Shrikeh\SymfonyKernel\Kernel\EnvironmentConfigurableKernelInterface;
use Shrikeh\SymfonyKernel\Kernel\Traits\BaseDirRelativeDirectoriesTrait;
use Shrikeh\SymfonyKernel\Kernel\Traits\ContainerConfigurationTrait;
use Shrikeh\SymfonyKernel\Kernel\Traits\EnvironmentConfigurationTrait;
use Shrikeh\SymfonyKernel\Kernel\Traits\RouteConfigurationTrait;
use SplFileInfo;
use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\HttpFoundation\ParameterBag;
use Symfony\Component\HttpKernel\Kernel;

class DefaultKernel extends Kernel implements
    EnvironmentConfigurableKernelInterface,
    BundleKernelInterface
{
    use MicroKernelTrait;
    use ContainerConfigurationTrait;
    use EnvironmentConfigurationTrait;
    use RouteConfigurationTrait;
    use BaseDirRelativeDirectoriesTrait;

    public const DEFAULT_CONFIG_DIR_NAME = 'config';
    public const DEFAULT_BUNDLE_FILE = 'bundles.php';

    private const CONFIG_EXTS = '.{php,xml,yaml,yml}';
    private const TYPE_GLOB = 'glob';

    /**
     * @param array $server
     * @param string|null $projectDir
     * @return self
     */
    public static function fromArray(array $server, string $projectDir = null): self
    {
        return new self(
            new ParameterBag($server),
            null,
            $projectDir
        );
    }

    /**
     * DefaultKernel constructor.
     * @param ParameterBag $serverBag
     * @param bool|null $debug
     * @param string|null $projectDir
     */
    public function __construct(ParameterBag $serverBag, bool $debug = null, string $projectDir = null)
    {
        parent::__construct(
            $serverBag->get(self::ENV_APP_ENVIRONMENT_KEY),
            $debug ?? $serverBag->getBoolean(self::ENV_APP_DEBUG_KEY)
        );

        $this->serverBag = $serverBag;
        $this->projectDir = $projectDir;
    }

    /**
     * @return iterable
     * @throws StringsException
     */
    public function registerBundles(): iterable
    {
        $bundleConfig = new SplFileInfo($this->getBundleFile());
        $bundleLoader = new FileBundleLoader($bundleConfig, $this->environment);

        yield from $bundleLoader->getBundles();
    }

    /**
     * @return string
     */
    private function getDefaultProjectDir(): string
    {
        return ($this->projectDir ?? parent::getProjectDir());
    }

    /**
     * {@inheritDoc}
     * @psalm-suppress OverriddenMethodAccess
     */
    private function getDefaultConfigDir(): string
    {
        return sprintf('%s/%s', $this->getProjectDir(), self::DEFAULT_CONFIG_DIR_NAME);
    }

    /**
     * {@inheritDoc}
     * @psalm-suppress OverriddenMethodAccess
     */
    private function getDefaultBundleFile(): string
    {
        return sprintf('%s/%s', $this->getConfigDir(), self::DEFAULT_BUNDLE_FILE);
    }
}
