<?php

declare(strict_types=1);

namespace Tests\Traits;

trait ResetableServerVarTrait
{
    /**
     * @var array
     */
    private array $originalEnv;

    /**
     * {@inheritDoc}
     */
    protected function setUp(): void
    {
        parent::setUp();
        $this->originalEnv = $_SERVER;
    }

    /**
     * {@inheritDoc}
     */
    protected function tearDown(): void
    {
        parent::tearDown();
        $_SERVER = $this->originalEnv;
    }
}
