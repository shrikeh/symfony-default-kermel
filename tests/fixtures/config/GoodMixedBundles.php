<?php

declare(strict_types=1);

return [
    Tests\Mock\Bundle\BundleStub::class => ['all' => true, 'bar' => false],
    Tests\Mock\Bundle\AnotherBundleStub::class => ['foo' => true],
    Tests\Mock\Bundle\YetAnotherBundleStub::class => ['bar' => false, 'foo' => true],
    Symfony\Bundle\FrameworkBundle\FrameworkBundle::class => ['all' => true],
];
