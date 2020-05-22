<?php

declare(strict_types=1);

namespace Tests\Unit\Kernel\Traits;

use Prophecy\PhpUnit\ProphecyTrait;
use Shrikeh\SymfonyKernel\Kernel\Traits\RouteConfigurationTrait;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Routing\RouteCollectionBuilder;

final class RouteConfigurationTraitTest extends TestCase
{
    use ProphecyTrait;

    public function testItConfiguresRoutes(): void
    {
        $routes = $this->prophesize(RouteCollectionBuilder::class);
        $routes->import('bar/{routes}/foo/*.{php,xml,yaml,yml}', '/', 'glob')->shouldBeCalledOnce();
        $routes->import('bar/{routes}/*.{php,xml,yaml,yml}', '/', 'glob')->shouldBeCalledOnce();
        $routes->import('bar/{routes}.{php,xml,yaml,yml}', '/', 'glob')->shouldBeCalledOnce();

        $trait = $this->createTraitInstance();

        $trait->configureRoutes($routes->reveal());
    }

    private function createTraitInstance(): object
    {
        return new class () {
            use RouteConfigurationTrait {
                configureRoutes as public;
            }

            private const CONFIG_EXTS = '.{php,xml,yaml,yml}';
            private const TYPE_GLOB = 'glob';

            public function getEnvironment(): string
            {
                return 'foo';
            }

            public function getConfigDir(): string
            {
                return 'bar';
            }
        };
    }
}
