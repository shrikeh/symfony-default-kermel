.ONESHELL:
SHELL := /usr/bin/env sh
ROOT_DIR:="$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))"
.DEFAULT: help
.PHONY: help
ifndef VERBOSE
.SILENT:
endif

.ONESHELL:
SHELL := /usr/bin/env sh
.DEFAULT: help
.PHONY: help
ifndef VERBOSE
.SILENT:
endif

test: test-php

test-php: composer-validate phplint infection phpmetrics phpcs phpmd phpstan psalm

test-ci: phplint infection behat phpcs phpmd phpstan

lint-changed: lint-changed-php

lint-changed-php:
	echo "Linting changed PHP files..."
	 ${ROOT_DIR}/tools/bin/lint-changed-php.sh

composer:
	docker-compose -f docker-compose.yml -f ./tools/docker/compose/docker-compose-dev.yml run php-composer

validate: composer-validate lint

composer-validate:
	echo 'Validating composer...'
	composer validate

lint: phplint

phpunit:
	echo 'Running phpunit...'
	php ./vendor/bin/phpunit --prepend "./tests/unit/xdebug-filter.php"

infection: phpunit infection-phpunit

infection-phpunit:
	echo 'Running infection against PHPUnit...'
	php ${ROOT_DIR}/vendor/bin/infection --debug -j2 --coverage=$(ROOT_DIR)/build/coverage/phpunit/ --test-framework=phpunit

infection-phpspec:
	echo 'Running infection against phpspec...'
	phpdbg -qrr ${ROOT_DIR}/vendor/bin/infection --debug -j2 --filter=$(ROOT_DIR)/src --coverage=$(ROOT_DIR)/build/coverage/phpspec/ --test-framework=phpspec

behat:
	echo 'Running behat test suite...'
	php ${ROOT_DIR}/vendor/bin/behat

phplint:
	echo 'Running phplint...'
	php ${ROOT_DIR}/vendor/bin/phplint

phpstan:
	echo 'Running phpstan...'
	php -d memory-limit=128M ${ROOT_DIR}/vendor/bin/phpstan analyse

psalm:
	php ${ROOT_DIR}/vendor/bin/psalm --show-info=true

phan:
	php ${ROOT_DIR}/vendor/bin/phan --analyze-twice --allow-polyfill-parser --strict-type-checking --color --load-baseline=${ROOT_DIR}/.phan/baseline.php

phpcs:
	echo 'Running codesniffer...'
	php ${ROOT_DIR}/vendor/bin/phpcs --runtime-set ignore_warnings_on_exit true --cache -p application tests

phpcbf:
	php ${ROOT_DIR}/vendor/bin/phpcbf -p --runtime-set ignore_warnings_on_exit true

rector-safe:
	${ROOT_DIR}/vendor/bin/rector process ${ROOT_DIR}/src --config ${ROOT_DIR}/vendor/thecodingmachine/safe/rector-migrate-0.6.yml

phpmetrics:
	echo 'Creating phpmetrics...'
	php -d memory-limit=256M ${ROOT_DIR}/vendor/bin/phpmetrics --quiet --junit="${ROOT_DIR}/build/coverage/phpunit/junit.xml" --report-html="${ROOT_DIR}/docs/metrics" \
	  --exclude="build","dist","docs","tests","tools","public","translations","var","vendor" ${ROOT_DIR} &

browse-metrics:
	open file:///${ROOT_DIR}/docs/metrics/index.html

phpmd:
	echo 'Running PHP Mess Detector...'
	phpdbg -qrr ${ROOT_DIR}/vendor/bin/phpmd src text phpmd.xml.dist --verbose

codecept-integration:
	php ${ROOT_DIR}/vendor/bin/codecept run integration;

postman:
	node_modules/.bin/newman run tests/postman/collections/TopList.postman_collection.json --environment tests/postman/environments/Development.postman_environment.json
