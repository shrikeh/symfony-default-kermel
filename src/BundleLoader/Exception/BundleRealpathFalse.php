<?php

declare(strict_types=1);

namespace Shrikeh\SymfonyKernel\BundleLoader\Exception;

use Safe\Exceptions\StringsException;
use SplFileInfo;
use RuntimeException;

use function Safe\sprintf;

final class BundleRealpathFalse extends RuntimeException
{
    /**
     * @param SplFileInfo $bundlePath
     * @return static
     * @throws StringsException
     * @SuppressWarnings(PHPMD.StaticAccess) Named constructor pattern
     */
    public static function create(SplFileInfo $bundlePath): self
    {
        return new self(sprintf(
            'The realpath of the path "%s" returned false',
            $bundlePath->getPathname()
        ));
    }
}
