<?php

declare(strict_types=1);

namespace Tests;

final class Constants
{
    /**
     * @return string
     */
    public static function rootDir(): string
    {
        return dirname(self::testsDir());
    }

    /**
     * @return string
     */
    public static function vendorDir(): string
    {
        return self::rootDir() . '/vendor';
    }

    /**
     * @return string
     */
    public static function appDir(): string
    {
        return self::rootDir() . '/application';
    }

    /**
     * @return string
     */
    public static function testsDir(): string
    {
        return dirname(__DIR__);
    }

    /**
     * @return string
     */
    public static function fixturesDir(): string
    {
        return self::testsDir() . '/fixtures';
    }

    /**
     * @return string
     */
    public static function appConfigDir(): string
    {
        return self::appDir() . '/config';
    }
}
