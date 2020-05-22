<?php

declare(strict_types=1);

namespace Shrikeh\SymfonyKernel\Kernel;

interface EnvironmentConfigurableKernelInterface
{
    public const ENV_APP_DEBUG_KEY = 'APP_DEBUG';
    public const ENV_APP_ENVIRONMENT_KEY = 'APP_ENV';

    public const ENV_APP_PROJECT_DIR = 'SYMFONY_PROJECT_DIR';
    public const ENV_LOG_DIR_KEY = 'SYMFONY_LOG_DIR';
    public const ENV_CACHE_DIR_KEY = 'SYMFONY_CACHE_DIR';
    public const ENV_CONFIG_DIR_KEY = 'SYMFONY_CONFIG_DIR';
    public const ENV_BUNDLE_FILE_KEY = 'SYMFONY_BUNDLE_FILE';
}
