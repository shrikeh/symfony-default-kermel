<?php

declare(strict_types=1);

namespace Shrikeh\SymfonyKernel\BundleLoader\BundleIterator\Exception;

use InvalidArgumentException;
use Safe\Exceptions\StringsException;

use function Safe\sprintf;

final class InvalidBundleEnvironment extends InvalidArgumentException implements BundleIteratorExceptionInterface
{
    /**
     * @param string $bundle
     * @param mixed $environment
     * @return static
     * @throws StringsException
     * @SuppressWarnings(PHPMD.StaticAccess) Named constructor pattern
     */
    public static function fromBundleEnv(string $bundle, $environment): self
    {
        return new self(sprintf(
            'The bundle "%s" included the invalid environment %s',
            $bundle,
            serialize($environment)
        ));
    }
}
