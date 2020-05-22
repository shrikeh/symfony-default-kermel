<?php

declare(strict_types=1);

namespace Shrikeh\SymfonyKernel\Kernel\Traits;

use Symfony\Component\Config\Exception\LoaderLoadException;
use Symfony\Component\Routing\RouteCollectionBuilder;

trait RouteConfigurationTrait
{
    /**
     * {@inheritDoc}
     * @throws LoaderLoadException
     * @codeCoverageIgnore
     */
    protected function configureRoutes(RouteCollectionBuilder $routes): void
    {
        $this->importRoutes(
            $routes,
            '%s/{routes}/' . $this->getEnvironment() . '/*' . static::CONFIG_EXTS,
            '%s/{routes}/*' . static::CONFIG_EXTS,
            '%s/{routes}' . static::CONFIG_EXTS
        );
    }

    /**
     * @param RouteCollectionBuilder $routes
     * @param string ...$imports
     * @throws LoaderLoadException
     */
    private function importRoutes(RouteCollectionBuilder $routes, string ...$imports): void
    {
        $confDir = $this->getConfigDir();
        foreach ($imports as $import) {
            $routes->import(sprintf($import, $confDir), '/', static::TYPE_GLOB);
        }
    }
}
