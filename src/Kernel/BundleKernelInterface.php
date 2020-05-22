<?php

declare(strict_types=1);

namespace Shrikeh\SymfonyKernel\Kernel;

interface BundleKernelInterface
{
    /**
     * @return string
     */
    public function getBundleFile(): string;

    /**
     * @return string
     */
    public function getConfigDir(): string;
}
