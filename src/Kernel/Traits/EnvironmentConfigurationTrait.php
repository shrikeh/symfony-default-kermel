<?php

declare(strict_types=1);

namespace Shrikeh\SymfonyKernel\Kernel\Traits;

use Shrikeh\SymfonyKernel\Kernel\EnvironmentConfigurableKernelInterface as Environment;
use Symfony\Component\HttpFoundation\ParameterBag;

trait EnvironmentConfigurationTrait
{
    /**
     * @var ParameterBag
     */
    private ParameterBag $serverBag;

    /**
     * {@inheritDoc}
     */
    public function getProjectDir(): string
    {
        return $this->getEnvVar(Environment::ENV_APP_PROJECT_DIR) ?? $this->getDefaultProjectDir();
    }

    /**
     * {@inheritdoc}
     */
    public function getLogDir(): string
    {
        return $this->getEnvVar(Environment::ENV_LOG_DIR_KEY) ?? $this->getDefaultLogDir();
    }

    /**
     * {@inheritdoc}
     */
    public function getCacheDir(): string
    {
        return $this->getEnvVar(Environment::ENV_CACHE_DIR_KEY) ?? $this->getDefaultCacheDir();
    }

    /**
     * @return string
     */
    public function getBundleFile(): string
    {
        return $this->getEnvVar(Environment::ENV_BUNDLE_FILE_KEY)
            ?? $this->getDefaultBundleFile();
    }

    /**
     * @return string
     */
    public function getConfigDir(): string
    {
        return $this->getEnvVar(Environment::ENV_CONFIG_DIR_KEY) ??
            $this->getDefaultConfigDir();
    }

    /**
     * @param string $key
     * @return string|null
     */
    private function getEnvVar(string $key): ?string
    {
        return $this->serverBag->get($key);
    }
}
