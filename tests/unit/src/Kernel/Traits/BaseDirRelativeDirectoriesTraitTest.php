<?php

declare(strict_types=1);

namespace Tests\Unit\Kernel\Traits;

use Shrikeh\SymfonyKernel\Kernel\Traits\BaseDirRelativeDirectoriesTrait;
use PHPUnit\Framework\TestCase;

final class BaseDirRelativeDirectoriesTraitTest extends TestCase
{
    public function testItReturnsTheCacheDir(): void
    {
        $trait = new class () {
            use BaseDirRelativeDirectoriesTrait {
                getDefaultCacheDir as public;
            }

            public function getProjectDir(): string
            {
                return 'foo/bar';
            }
        };

        $this->assertSame('foo/bar/var/cache', $trait->getDefaultCacheDir());
    }

    public function testItReturnsTheLogDir(): void
    {
        $trait = new class () {
            use BaseDirRelativeDirectoriesTrait {
                getDefaultLogDir as public;
            }

            public function getProjectDir(): string
            {
                return 'foo/bar';
            }
        };

        $this->assertSame('foo/bar/var/logs', $trait->getDefaultLogDir());
    }
}
