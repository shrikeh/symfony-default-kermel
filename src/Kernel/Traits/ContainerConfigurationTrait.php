<?php

declare(strict_types=1);

namespace Shrikeh\SymfonyKernel\Kernel\Traits;

use Exception;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\Config\Resource\FileResource;
use Symfony\Component\DependencyInjection\ContainerBuilder;

trait ContainerConfigurationTrait
{
    /**
     * @param ContainerBuilder $container
     * @param LoaderInterface $loader
     * @throws Exception
     * @codeCoverageIgnore
     */
    protected function configureContainer(ContainerBuilder $container, LoaderInterface $loader): void
    {
        $container->addResource(new FileResource($this->getBundleFile()));
        $container->setParameter(
            'container.dumper.inline_class_loader',
            \PHP_VERSION_ID < 70400 || $this->isDebug()
        );
        $container->setParameter('container.dumper.inline_factories', true);

        $environment = $this->getEnvironment();

        $this->configureContainerLoader(
            $loader,
            '%s/{packages}/*' . static::CONFIG_EXTS,
            '%s/{packages}/' . $environment . '/*' . static::CONFIG_EXTS,
            '%s/{services}' . static::CONFIG_EXTS,
            '%s/{services}_' . $environment . static::CONFIG_EXTS
        );
    }

    /**
     * @param LoaderInterface $loader
     * @param string ...$imports
     * @throws Exception
     */
    private function configureContainerLoader(LoaderInterface $loader, string ...$imports): void
    {
        $confDir = $this->getConfigDir();
        foreach ($imports as $import) {
            $loader->load(sprintf($import, $confDir), static::TYPE_GLOB);
        }
    }
}
