<?php

declare(strict_types=1);

namespace Shrikeh\SymfonyKernel\BundleLoader\BundleIterator\Exception;

use RuntimeException;
use Safe\Exceptions\StringsException;

use function Safe\sprintf;

final class BundlesNotIterable extends RuntimeException implements BundleIteratorExceptionInterface
{
    /**
     * @param mixed $bundles
     * @return static
     * @throws StringsException
     * @SuppressWarnings(PHPMD.StaticAccess) Named constructor pattern
     */
    public static function create($bundles): self
    {
        return new self(sprintf(
            'The bundles were not iterable: received this: "%s"',
            serialize($bundles)
        ));
    }
}
