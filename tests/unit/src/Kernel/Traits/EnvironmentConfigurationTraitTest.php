<?php
declare(strict_types=1);


namespace Tests\Unit\Kernel\Traits;


use Shrikeh\SymfonyKernel\Kernel\EnvironmentConfigurableKernelInterface;
use Shrikeh\SymfonyKernel\Kernel\Traits\EnvironmentConfigurationTrait;
use Symfony\Component\HttpFoundation\ServerBag;
use Tests\Traits\ResetableServerVarTrait;

final class EnvironmentConfigurationTraitTest
{
    use ResetableServerVarTrait;

    public function testItUsesTheProjectDir(): void
    {
        $projectDir = '/foo/bar/baz';
        $serverBag = new ServerBag([EnvironmentConfigurableKernelInterface::ENV_APP_PROJECT_DIR => $projectDir]);
        $trait = $this->createTraitInstance($serverBag);

        $this->assertSame($projectDir, $trait->getProjectDir());
    }

    public function testItUsesTheDefaultProjectDir(): void
    {
        $defaultProjectDir = '/some/other/dir';
        $serverBag = new ServerBag([]);
        $trait = $this->createTraitInstance($serverBag, $defaultProjectDir);

        $this->assertSame($defaultProjectDir, $trait->getDefaultProjectDir());
    }

    /**
     * @param ServerBag $serverBag
     * @return object
     */
    private function createTraitInstance(ServerBag $serverBag, string $defaultDir = ''): object
    {
        return new class($serverBag, $defaultDir) {
            use EnvironmentConfigurationTrait;

            private string $defaultDir;

            public function __construct(ServerBag $serverBag, string $defaultDir = '')
            {
                $this->serverBag = $serverBag;
                $this->defaultDir = $defaultDir;
            }

            public function getDefaultProjectDir(): string
            {
                return $this->defaultDir;
            }
        };
    }
}
