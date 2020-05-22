<?php

declare(strict_types=1);

namespace Shrikeh\SymfonyKernel\BundleLoader\BundleIterator\Exception;

use InvalidArgumentException;
use Safe\Exceptions\StringsException;

use function Safe\sprintf;

final class BundleEnvironmentsNotIterable extends InvalidArgumentException implements BundleIteratorExceptionInterface
{
    /**
     * @param string $bundle
     * @return static
     * @throws StringsException
     * @SuppressWarnings(PHPMD.StaticAccess) Named constructor pattern
     */
    public static function fromBundle(string $bundle): self
    {
        return new self(sprintf(
            'The bundle "%s" did not include an iterable list of environments',
            $bundle
        ));
    }
}
