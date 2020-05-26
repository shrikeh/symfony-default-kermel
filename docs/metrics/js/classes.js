var classes = [
    {
        "name": "Shrikeh\\SymfonyKernel\\Kernel\\Traits\\BaseDirRelativeDirectoriesTrait",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "getProjectDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBaseDir",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getVarDir",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultCacheDir",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultLogDir",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 14,
        "vocabulary": 6,
        "volume": 36.19,
        "difficulty": 1.75,
        "effort": 63.33,
        "level": 0.57,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 20.68,
        "number_operators": 7,
        "number_operands": 7,
        "number_operators_unique": 2,
        "number_operands_unique": 4,
        "cloc": 18,
        "loc": 40,
        "lloc": 22,
        "mi": 102.77,
        "mIwoC": 59.67,
        "commentWeight": 43.1,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 10,
        "totalStructuralComplexity": 45,
        "totalDataComplexity": 5,
        "totalSystemComplexity": 50,
        "package": "Shrikeh\\SymfonyKernel\\Kernel\\Traits\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "numberOfUnitTests": 0,
        "violations": {}
    },
    {
        "name": "Shrikeh\\SymfonyKernel\\Kernel\\Traits\\ContainerConfigurationTrait",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "configureContainer",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configureContainerLoader",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Symfony\\Component\\DependencyInjection\\ContainerBuilder",
            "Symfony\\Component\\Config\\Loader\\LoaderInterface",
            "Symfony\\Component\\Config\\Resource\\FileResource",
            "Symfony\\Component\\Config\\Loader\\LoaderInterface"
        ],
        "parents": [],
        "lcom": 1,
        "length": 41,
        "vocabulary": 19,
        "volume": 174.17,
        "difficulty": 4,
        "effort": 696.66,
        "level": 0.25,
        "bugs": 0.06,
        "time": 39,
        "intelligentContent": 43.54,
        "number_operators": 11,
        "number_operands": 30,
        "number_operators_unique": 4,
        "number_operands_unique": 15,
        "cloc": 13,
        "loc": 30,
        "lloc": 18,
        "mi": 99.12,
        "mIwoC": 56.52,
        "commentWeight": 42.6,
        "kanDefect": 0.38,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 0.22,
        "relativeSystemComplexity": 64.22,
        "totalStructuralComplexity": 128,
        "totalDataComplexity": 0.44,
        "totalSystemComplexity": 128.44,
        "package": "Shrikeh\\SymfonyKernel\\Kernel\\Traits\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "numberOfUnitTests": 0,
        "violations": {}
    },
    {
        "name": "Shrikeh\\SymfonyKernel\\Kernel\\Traits\\RouteConfigurationTrait",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "configureRoutes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "importRoutes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Symfony\\Component\\Routing\\RouteCollectionBuilder",
            "Symfony\\Component\\Routing\\RouteCollectionBuilder"
        ],
        "parents": [],
        "lcom": 1,
        "length": 24,
        "vocabulary": 12,
        "volume": 86.04,
        "difficulty": 1.8,
        "effort": 154.87,
        "level": 0.56,
        "bugs": 0.03,
        "time": 9,
        "intelligentContent": 47.8,
        "number_operators": 6,
        "number_operands": 18,
        "number_operators_unique": 2,
        "number_operands_unique": 10,
        "cloc": 12,
        "loc": 25,
        "lloc": 14,
        "mi": 105.12,
        "mIwoC": 61.18,
        "commentWeight": 43.94,
        "kanDefect": 0.38,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.3,
        "relativeSystemComplexity": 16.3,
        "totalStructuralComplexity": 32,
        "totalDataComplexity": 0.6,
        "totalSystemComplexity": 32.6,
        "package": "Shrikeh\\SymfonyKernel\\Kernel\\Traits\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "numberOfUnitTests": 0,
        "violations": {}
    },
    {
        "name": "Shrikeh\\SymfonyKernel\\Kernel\\Traits\\EnvironmentConfigurationTrait",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "getProjectDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLogDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCacheDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBundleFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getConfigDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEnvVar",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 11,
        "ccn": 6,
        "ccnMethodMax": 2,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 24,
        "vocabulary": 4,
        "volume": 48,
        "difficulty": 6.5,
        "effort": 312,
        "level": 0.15,
        "bugs": 0.02,
        "time": 17,
        "intelligentContent": 7.38,
        "number_operators": 11,
        "number_operands": 13,
        "number_operators_unique": 2,
        "number_operands_unique": 2,
        "cloc": 22,
        "loc": 51,
        "lloc": 29,
        "mi": 98.06,
        "mIwoC": 55.52,
        "commentWeight": 42.54,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.77,
        "relativeSystemComplexity": 49.77,
        "totalStructuralComplexity": 294,
        "totalDataComplexity": 4.63,
        "totalSystemComplexity": 298.63,
        "package": "Shrikeh\\SymfonyKernel\\Kernel\\Traits\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "numberOfUnitTests": 0,
        "violations": {}
    },
    {
        "name": "Shrikeh\\SymfonyKernel\\DefaultKernel",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "fromArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registerBundles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultProjectDir",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultConfigDir",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultBundleFile",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Symfony\\Component\\HttpKernel\\Kernel",
            "Shrikeh\\SymfonyKernel\\Kernel\\EnvironmentConfigurableKernelInterface",
            "Shrikeh\\SymfonyKernel\\Kernel\\BundleKernelInterface",
            "Symfony\\Component\\HttpFoundation\\ParameterBag",
            "Symfony\\Component\\HttpFoundation\\ParameterBag",
            "SplFileInfo",
            "Shrikeh\\SymfonyKernel\\BundleLoader\\FileBundleLoader"
        ],
        "parents": [
            "Symfony\\Component\\HttpKernel\\Kernel"
        ],
        "lcom": 4,
        "length": 39,
        "vocabulary": 15,
        "volume": 152.37,
        "difficulty": 3.63,
        "effort": 552.34,
        "level": 0.28,
        "bugs": 0.05,
        "time": 31,
        "intelligentContent": 42.03,
        "number_operators": 10,
        "number_operands": 29,
        "number_operators_unique": 3,
        "number_operands_unique": 12,
        "cloc": 26,
        "loc": 67,
        "lloc": 41,
        "mi": 90.23,
        "mIwoC": 49.13,
        "commentWeight": 41.1,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.6,
        "relativeSystemComplexity": 49.6,
        "totalStructuralComplexity": 294,
        "totalDataComplexity": 3.63,
        "totalSystemComplexity": 297.63,
        "package": "Shrikeh\\SymfonyKernel\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "numberOfUnitTests": 3,
        "violations": {}
    },
    {
        "name": "Shrikeh\\SymfonyKernel\\BundleLoader\\Exception\\BundleFileNotExists",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "fromPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "RuntimeException"
        ],
        "parents": [
            "RuntimeException"
        ],
        "lcom": 1,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.75,
        "effort": 4.75,
        "level": 1.33,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 8.45,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 6,
        "loc": 14,
        "lloc": 8,
        "mi": 117,
        "mIwoC": 74.55,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 2,
        "package": "Shrikeh\\SymfonyKernel\\BundleLoader\\Exception\\",
        "pageRank": 0.04,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "numberOfUnitTests": 1,
        "violations": {}
    },
    {
        "name": "Shrikeh\\SymfonyKernel\\BundleLoader\\Exception\\BundlesNotLoadable",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "fromBundleIteratorException",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "RuntimeException",
            "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\Exception\\BundleIteratorExceptionInterface"
        ],
        "parents": [
            "RuntimeException"
        ],
        "lcom": 1,
        "length": 11,
        "vocabulary": 7,
        "volume": 30.88,
        "difficulty": 1.8,
        "effort": 55.59,
        "level": 0.56,
        "bugs": 0.01,
        "time": 3,
        "intelligentContent": 17.16,
        "number_operators": 2,
        "number_operands": 9,
        "number_operators_unique": 2,
        "number_operands_unique": 5,
        "cloc": 7,
        "loc": 16,
        "lloc": 9,
        "mi": 111.35,
        "mIwoC": 68.62,
        "commentWeight": 42.73,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 2.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 2.5,
        "package": "Shrikeh\\SymfonyKernel\\BundleLoader\\Exception\\",
        "pageRank": 0.04,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "numberOfUnitTests": 0,
        "violations": {}
    },
    {
        "name": "Shrikeh\\SymfonyKernel\\BundleLoader\\Exception\\BundleRealpathFalse",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "RuntimeException",
            "SplFileInfo"
        ],
        "parents": [
            "RuntimeException"
        ],
        "lcom": 1,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.75,
        "effort": 4.75,
        "level": 1.33,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 8.45,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 6,
        "loc": 14,
        "lloc": 8,
        "mi": 117,
        "mIwoC": 74.55,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "Shrikeh\\SymfonyKernel\\BundleLoader\\Exception\\",
        "pageRank": 0.04,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "numberOfUnitTests": 1,
        "violations": {}
    },
    {
        "name": "Shrikeh\\SymfonyKernel\\BundleLoader\\Exception\\BundleFileNotReadable",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "fromPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "RuntimeException"
        ],
        "parents": [
            "RuntimeException"
        ],
        "lcom": 1,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.75,
        "effort": 4.75,
        "level": 1.33,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 8.45,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 6,
        "loc": 14,
        "lloc": 8,
        "mi": 117,
        "mIwoC": 74.55,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 2,
        "package": "Shrikeh\\SymfonyKernel\\BundleLoader\\Exception\\",
        "pageRank": 0.04,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "numberOfUnitTests": 1,
        "violations": {}
    },
    {
        "name": "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\Exception\\BundlesNotIterable",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "RuntimeException",
            "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\Exception\\BundleIteratorExceptionInterface"
        ],
        "parents": [
            "RuntimeException"
        ],
        "lcom": 1,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.75,
        "effort": 4.75,
        "level": 1.33,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 8.45,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 6,
        "loc": 14,
        "lloc": 8,
        "mi": 117,
        "mIwoC": 74.55,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 2,
        "package": "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\Exception\\",
        "pageRank": 0.06,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "numberOfUnitTests": 0,
        "violations": {}
    },
    {
        "name": "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\Exception\\BundleEnvironmentsNotIterable",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "fromBundle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "InvalidArgumentException",
            "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\Exception\\BundleIteratorExceptionInterface"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "lcom": 1,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.75,
        "effort": 4.75,
        "level": 1.33,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 8.45,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 6,
        "loc": 14,
        "lloc": 8,
        "mi": 117,
        "mIwoC": 74.55,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 2,
        "package": "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\Exception\\",
        "pageRank": 0.06,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "numberOfUnitTests": 1,
        "violations": {}
    },
    {
        "name": "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\Exception\\InvalidBundleEnvironment",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "fromBundleEnv",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "InvalidArgumentException",
            "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\Exception\\BundleIteratorExceptionInterface"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "lcom": 1,
        "length": 6,
        "vocabulary": 4,
        "volume": 12,
        "difficulty": 0.83,
        "effort": 10,
        "level": 1.2,
        "bugs": 0,
        "time": 1,
        "intelligentContent": 14.4,
        "number_operators": 1,
        "number_operands": 5,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 7,
        "loc": 15,
        "lloc": 8,
        "mi": 116.19,
        "mIwoC": 72.61,
        "commentWeight": 43.58,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3,
        "relativeSystemComplexity": 3,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 3,
        "package": "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\Exception\\",
        "pageRank": 0.06,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "numberOfUnitTests": 2,
        "violations": {}
    },
    {
        "name": "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\BundleIterator",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__construct",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEnvBundles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadBundle",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isForEnv",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertValidBundles",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 18,
        "ccn": 13,
        "ccnMethodMax": 6,
        "externals": [
            "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\Exception\\BundlesNotIterable",
            "Generator",
            "bundleClass",
            "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\Exception\\BundleEnvironmentsNotIterable",
            "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\Exception\\InvalidBundleEnvironment"
        ],
        "parents": [],
        "lcom": 2,
        "length": 58,
        "vocabulary": 15,
        "volume": 226.6,
        "difficulty": 10.75,
        "effort": 2435.95,
        "level": 0.09,
        "bugs": 0.08,
        "time": 135,
        "intelligentContent": 21.08,
        "number_operators": 15,
        "number_operands": 43,
        "number_operators_unique": 5,
        "number_operands_unique": 10,
        "cloc": 34,
        "loc": 86,
        "lloc": 52,
        "mi": 85.69,
        "mIwoC": 44.33,
        "commentWeight": 41.36,
        "kanDefect": 1.26,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 0.74,
        "relativeSystemComplexity": 36.74,
        "totalStructuralComplexity": 216,
        "totalDataComplexity": 4.43,
        "totalSystemComplexity": 220.43,
        "package": "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\",
        "pageRank": 0.05,
        "afferentCoupling": 1,
        "efferentCoupling": 5,
        "instability": 0.83,
        "numberOfUnitTests": 3,
        "violations": {}
    },
    {
        "name": "Shrikeh\\SymfonyKernel\\BundleLoader\\FileBundleLoader",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBundles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBundlePath",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "requireBundles",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBundleIterator",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 12,
        "ccn": 7,
        "ccnMethodMax": 4,
        "externals": [
            "SplFileInfo",
            "SplFileInfo",
            "Shrikeh\\SymfonyKernel\\BundleLoader\\Exception\\BundleFileNotExists",
            "Shrikeh\\SymfonyKernel\\BundleLoader\\Exception\\BundleFileNotReadable",
            "Shrikeh\\SymfonyKernel\\BundleLoader\\Exception\\BundleRealpathFalse",
            "Shrikeh\\File\\File",
            "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\BundleIterator",
            "Shrikeh\\SymfonyKernel\\BundleLoader\\BundleIterator\\BundleIterator",
            "Shrikeh\\SymfonyKernel\\BundleLoader\\Exception\\BundlesNotLoadable"
        ],
        "parents": [],
        "lcom": 2,
        "length": 52,
        "vocabulary": 11,
        "volume": 179.89,
        "difficulty": 10,
        "effort": 1798.9,
        "level": 0.1,
        "bugs": 0.06,
        "time": 100,
        "intelligentContent": 17.99,
        "number_operators": 17,
        "number_operands": 35,
        "number_operators_unique": 4,
        "number_operands_unique": 7,
        "cloc": 50,
        "loc": 102,
        "lloc": 52,
        "mi": 90.04,
        "mIwoC": 45.84,
        "commentWeight": 44.21,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 225,
        "relativeDataComplexity": 0.35,
        "relativeSystemComplexity": 225.35,
        "totalStructuralComplexity": 1350,
        "totalDataComplexity": 2.13,
        "totalSystemComplexity": 1352.13,
        "package": "Shrikeh\\SymfonyKernel\\BundleLoader\\",
        "pageRank": 0.04,
        "afferentCoupling": 1,
        "efferentCoupling": 7,
        "instability": 0.88,
        "numberOfUnitTests": 6,
        "violations": {}
    }
]