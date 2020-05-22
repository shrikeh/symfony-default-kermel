<?php

declare(strict_types=1);

namespace Tests\Unit\Shrikeh\SymfonyKernel\Kernel\BundleLoader\BundleIterator;

use Shrikeh\SymfonyKernel\BundleLoader\BundleIterator\BundleIterator;
use Shrikeh\SymfonyKernel\BundleLoader\BundleIterator\Exception\BundleEnvironmentsNotIterable;
use Shrikeh\SymfonyKernel\BundleLoader\BundleIterator\Exception\InvalidBundleEnvironment;
use PHPUnit\Framework\TestCase;
use Tests\Mock\Bundle\BundleStub;

final class BundleIteratorTest extends TestCase
{
    public function testItThrowsAnExceptionIfTheBundleFileContainsInvalidBundlesEnvs(): void
    {
        $expectedInvalidBundles = [
            BundleStub::class => false,
        ];

        $this->expectExceptionObject(BundleEnvironmentsNotIterable::fromBundle(BundleStub::class));

        BundleIterator::create($expectedInvalidBundles);
    }

    public function testItThrowsAnExceptionIfTheBundleEnvIsNotAString(): void
    {
        $badEnvs = ['no'];
        $expectedInvalidBundles = [
            BundleStub::class => $badEnvs,
        ];

        $this->expectExceptionObject(InvalidBundleEnvironment::fromBundleEnv(BundleStub::class, $badEnvs));

        BundleIterator::create($expectedInvalidBundles);
    }

    public function testItThrowsAnExceptionIfTheBundleEnvIsNotABoolean(): void
    {
        $badEnvs = ['foo' => 'bar'];
        $expectedInvalidBundles = [
            BundleStub::class => $badEnvs,
        ];

        $this->expectExceptionObject(InvalidBundleEnvironment::fromBundleEnv(BundleStub::class, $badEnvs));

        BundleIterator::create($expectedInvalidBundles);
    }
}
