<?php

declare(strict_types=1);

namespace Shrikeh\SymfonyKernel\BundleLoader\Exception;

use RuntimeException;
use Safe\Exceptions\StringsException;

use function Safe\sprintf;

final class BundleFileNotExists extends RuntimeException
{
    /**
     * @param string $path
     * @return static
     * @throws StringsException
     * @SuppressWarnings(PHPMD.StaticAccess) Named constructor pattern
     */
    public static function fromPath(string $path): self
    {
        return new self(sprintf(
            'The path "%s" is not a file',
            $path
        ));
    }
}
