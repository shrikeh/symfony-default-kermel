<?php

declare(strict_types=1);

namespace Shrikeh\SymfonyKernel\Kernel\Traits;

use SplFileInfo;

trait BaseDirRelativeDirectoriesTrait
{
    /**
     * @var string|null
     */
    private ?string $projectDir = null;

    /**
     * @return string
     */
    abstract public function getProjectDir();

    /**
     * @return string
     */
    private function getBaseDir(): string
    {
        return $this->getProjectDir();
    }

    /**
     * @return string
     */
    private function getVarDir(): string
    {
        return $this->getBaseDir() . '/var';
    }

    /**
     * @return string
     */
    private function getDefaultCacheDir(): string
    {
        return $this->getVarDir() . '/cache';
    }

    /**
     * @return string
     */
    private function getDefaultLogDir(): string
    {
        return $this->getVarDir() . '/logs';
    }
}
