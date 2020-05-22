<?php

declare(strict_types=1);

namespace Shrikeh\SymfonyKernel\BundleLoader\Exception;

use Shrikeh\SymfonyKernel\BundleLoader\BundleIterator\Exception\BundleIteratorExceptionInterface;
use RuntimeException;
use Safe\Exceptions\StringsException;

use function Safe\sprintf;

final class BundlesNotLoadable extends RuntimeException
{
    /**
     * @param BundleIteratorExceptionInterface $exception
     * @param string $path
     * @return static
     * @throws StringsException
     * @SuppressWarnings(PHPMD.StaticAccess) Named constructor pattern
     */
    public static function fromBundleIteratorException(
        BundleIteratorExceptionInterface $exception,
        string $path
    ): self {
        $msg = sprintf(
            'The file %s was not readable and produced the following exception: %s',
            $path,
            $exception->getMessage()
        );

        return new self($msg, 0, $exception);
    }
}
