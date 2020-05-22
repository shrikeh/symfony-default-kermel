<?php

declare(strict_types=1);

namespace Tests\Traits;

use Shrikeh\SymfonyKernel\DefaultKernel;
use Tests\Constants;

trait CreateDefaultKernelTrait
{
    /**
     * @param array $data
     * @param string|null $projectDir
     * @return DefaultKernel
     */
    protected static function createKernel(array $data = [], string $projectDir = null): DefaultKernel
    {
        $projectDir = $projectDir ?? Constants::fixturesDir();
        return DefaultKernel::fromArray(array_merge($_SERVER, $data), $projectDir);
    }
}
