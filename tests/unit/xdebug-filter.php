<?php

declare(strict_types=1);

use Tests\Constants;

if (!function_exists('xdebug_set_filter')) {
    return;
}

require_once dirname(__DIR__) . '/lib/Constants.php';

xdebug_set_filter(
    XDEBUG_FILTER_CODE_COVERAGE,
    XDEBUG_PATH_WHITELIST,
    [
        Constants::rootDir() . '/src',
    ]
);
