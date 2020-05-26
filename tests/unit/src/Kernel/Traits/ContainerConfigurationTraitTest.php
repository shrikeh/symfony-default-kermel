<?php

declare(strict_types=1);

namespace Tests\Unit\Kernel\Traits;

use Prophecy\PhpUnit\ProphecyTrait;
use Shrikeh\SymfonyKernel\Kernel\Traits\ContainerConfigurationTrait;
use PHPUnit\Framework\TestCase;
use Prophecy\Argument;
use Symfony\Component\Config\Resource\FileResource;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\Loader\LoaderInterface;
use Tests\Constants;
use Tests\Traits\ResetableServerVarTrait;

final class ContainerConfigurationTraitTest extends TestCase
{
    use ProphecyTrait;


    public function testItConfiguresAContainer(): void
    {
        $containerBuilder = $this->prophesize(ContainerBuilder::class);
        $loader = $this->prophesize(LoaderInterface::class);

        $containerBuilder->addResource(Argument::type(FileResource::class))->shouldBeCalledOnce();
        $containerBuilder->setParameter('container.dumper.inline_class_loader', true)->shouldBeCalledOnce();
        $containerBuilder->setParameter('container.dumper.inline_factories', true)->shouldBeCalledOnce();
        $loader->load('bar/{packages}/*.{php,xml,yaml,yml}', 'glob')->shouldBeCalledOnce();
        $loader->load('bar/{packages}/foo/*.{php,xml,yaml,yml}', 'glob')->shouldBeCalledOnce();
        $loader->load('bar/{services}.{php,xml,yaml,yml}', 'glob')->shouldBeCalledOnce();
        $loader->load('bar/{services}_foo.{php,xml,yaml,yml}', 'glob')->shouldBeCalledOnce();

        $trait = $this->createTraitInstance();

        $trait->configureContainer($containerBuilder->reveal(), $loader->reveal());
    }

    /**
     * @return object
     */
    private function createTraitInstance(): object
    {
        return new class () {
            use ContainerConfigurationTrait {
                configureContainer as public;
            }

            private const CONFIG_EXTS = '.{php,xml,yaml,yml}';
            private const TYPE_GLOB = 'glob';

            public function getBundleFile(): string
            {
                return Constants::fixturesDir() . '/config/GoodMixedBundles.php';
            }

            public function getEnvironment(): string
            {
                return 'foo';
            }

            public function getConfigDir(): string
            {
                return 'bar';
            }

            public function isDebug(): bool
            {
                return true;
            }
        };
    }
}
