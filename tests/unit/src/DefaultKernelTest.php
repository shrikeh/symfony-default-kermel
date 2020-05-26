<?php

declare(strict_types=1);

namespace Tests\Unit;

use Prophecy\PhpUnit\ProphecyTrait;
use Shrikeh\SymfonyKernel\DefaultKernel;
use Shrikeh\SymfonyKernel\Kernel\BundleKernelInterface;
use Shrikeh\SymfonyKernel\Kernel\EnvironmentConfigurableKernelInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\ParameterBag;
use Tests\Constants;
use Tests\Traits\CreateDefaultKernelTrait;
use Tests\Traits\ResetableServerVarTrait;

final class DefaultKernelTest extends KernelTestCase
{
    use ProphecyTrait;
    use CreateDefaultKernelTrait;
    use ResetableServerVarTrait;


    /**
     * Test that the Kernel picks up the Debug mode from the $_SERVER['APP_DEBUG'] var
     */
    public function testItUsesTheDebugModeFromTheServerVar(): void
    {
        $server[EnvironmentConfigurableKernelInterface::ENV_APP_DEBUG_KEY] = false;

        $kernel = static::createKernel($server);
        $this->assertFalse($kernel->isDebug());

        $server[EnvironmentConfigurableKernelInterface::ENV_APP_DEBUG_KEY] = true;

        $kernel = static::createKernel($server);
        $this->assertTrue($kernel->isDebug());
    }

    public function testItAllowsExcplicitlySettingTheDebugMode(): void
    {
        $parameterBag = $this->prophesize(ParameterBag::class);
        $parameterBag->get(EnvironmentConfigurableKernelInterface::ENV_APP_ENVIRONMENT_KEY)
            ->willReturn($_SERVER[EnvironmentConfigurableKernelInterface::ENV_APP_ENVIRONMENT_KEY]);

        $debug = false;
        $kernel = new DefaultKernel($parameterBag->reveal(), $debug);
        $this->assertFalse($kernel->isDebug());

        $debug = true;
        $kernel = new DefaultKernel($parameterBag->reveal(), $debug);
        $this->assertTrue($kernel->isDebug());
    }

    public function testItReturnsTheProjectDir(): void
    {
        $kernel = DefaultKernel::fromArray($_SERVER);

        $this->assertSame(Constants::rootDir(), $kernel->getProjectDir());
    }

    public function testItUsesTheLogDirEnvVar(): void
    {
        $logDir = '/foo';
        $_SERVER[DefaultKernel::ENV_LOG_DIR_KEY] = $logDir;
        $kernel = static::createKernel();

        $this->assertSame($logDir, $kernel->getLogDir());
    }

    public function testItUsesTheCacheDirEnvVar(): void
    {
        $caheDir = '/bar';
        $_SERVER[DefaultKernel::ENV_CACHE_DIR_KEY] = $caheDir;
        $kernel = static::createKernel();

        $this->assertSame($caheDir, $kernel->getCacheDir());
    }

    /**
     * @covers \Shrikeh\SymfonyKernel\DefaultKernel::configureContainer()
     */
    public function testItConfiguresAContainer(): void
    {
        $_SERVER[EnvironmentConfigurableKernelInterface::ENV_APP_ENVIRONMENT_KEY] = 'foo';
        $kernel = static::createKernel($_SERVER);
        $kernel->boot();

        $this->assertInstanceOf(ContainerInterface::class, $kernel->getContainer());
    }

    public function testItUsesTheConfigDirEnvVar(): void
    {
        $bundlePath = Constants::fixturesDir() . '/config/GoodMixedBundles.php';
        $_SERVER[DefaultKernel::ENV_BUNDLE_FILE_KEY] = $bundlePath;

        $kernel = static::createKernel($_SERVER);
        $kernel->boot();
        $bundles = require $bundlePath;

        $bundlesRegistered = [];

        foreach ($bundles as $bundleClass => $envs) {
            if ($envs[$kernel->getEnvironment()] ?? $envs['all'] ?? false) {
                $bundlesRegistered[] = $bundleClass;
            }
        }
        $this->assertCount(count($bundlesRegistered), iterator_to_array($kernel->registerBundles()));
    }

    public function testItReturnsTheConfigDir(): void
    {
        $configDir = '/baz';
        $_SERVER[DefaultKernel::ENV_CONFIG_DIR_KEY] = $configDir;
        /** @var BundleKernelInterface $kernel */
        $kernel = static::createKernel();

        $this->assertSame($configDir, $kernel->getConfigDir());
    }
}
