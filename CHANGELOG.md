# Changelog


## 2020-05-05
- Simplify the main loop by extracting request handling into a dedicated function

## 2020-05-05
- Adjust the queue size to prevent drops under burst traffic

## 2020-05-05
- Handle the redirect response and follow it to get the final resource

## 2020-05-09
- Fix incorrect type hint that was causing mypy to fail in CI

## 2020-05-11
- Improve the error recovery when the database connection is lost

## 2020-05-12
- Adjust timeout and retry settings based on production observations

## 2020-05-13
- Support loading config from multiple files with later overriding earlier

## 2020-05-13
- Handle the redirect response and follow it to get the final resource

## 2020-05-14
- Correct the default value for the feature flag in production

## 2020-05-15
- Remove the unused parameter that was left from an old refactor

## 2020-05-20
- Bump the Docker base image to get the latest security patches

## 2020-05-20
- Improve the CLI help text so it's clear how to use each option

## 2020-05-20
- Simplify error messages so they are actionable for the end user

## 2020-05-21
- Correct the formula used for calculating the backoff delay

## 2020-05-25
- Bump the tool version and update the pre-commit hook config

## 2020-05-26
- Remove obsolete workaround now that the upstream bug is fixed

## 2020-05-26
- Simplify the validation flow by reusing the same schema

## 2020-05-27
- Fix the encoding issue when reading config files with non-ASCII

## 2020-05-28
- Remove hardcoded credentials and move to env-based configuration

## 2020-06-01
- Implement fallback to default value when config key is missing

## 2020-06-02
- Support loading config from multiple files with later overriding earlier

## 2020-06-02
- Improve performance by caching the result of the expensive lookup

## 2020-06-02
- Remove the feature flag now that the feature is fully rolled out

## 2020-06-03
- Improve error message when the required env var is not set

## 2020-06-03
- Add proper error handling for invalid config so the app doesn't crash on startup

## 2020-06-05
- Bump the dependency to fix the compatibility issue with Python 3.12

## 2020-06-09
- Improve the CLI help text so it's clear how to use each option

## 2020-06-11
- Simplify error messages so they are actionable for the end user

## 2020-06-11
- Improve test coverage for the helpers module to above 90%

## 2020-06-14
- Add a comment explaining why we disable the linter on this line

## 2020-06-15
- Support config reload without restart via SIGHUP or file watch

## 2020-06-15
- Fix the off-by-one error in the date range iterator

## 2020-06-18
- Fix the memory leak in the long-running worker process

## 2020-06-19
- Improve logging so we can trace requests through the pipeline in production

## 2020-06-19
- Update dependencies and resolve compatibility warning from pytest

## 2020-06-23
- Add a note in the README about the breaking change in 2.0

## 2020-06-23
- Improve the default config so it works out of the box for dev

## 2020-06-25
- Bump the Docker base image to get the latest security patches

## 2020-06-27
- Support loading config from multiple files with later overriding earlier

## 2020-07-01
- Update README with installation steps and environment variable documentation

## 2020-07-01
- Simplify the dependency injection so it's easier to mock in tests

## 2020-07-02
- Clean up the test fixtures and move shared data to a single file

## 2020-07-02
- Update the deployment docs with the new environment variables

## 2020-07-06
- Adjust the pool size to match the actual concurrency we need

## 2020-07-13
- Handle missing optional field in the response without raising

## 2020-07-16
- Correct the formula used for calculating the backoff delay

## 2020-07-17
- Refactor the parser to use a proper state machine instead of regex

## 2020-07-21
- Support loading config from multiple files with later overriding earlier

## 2020-07-22
- Refactor the helper to accept an optional callback for progress

## 2020-07-22
- Handle the case when the config file exists but is not readable

## 2020-07-23
- Fix the encoding issue when reading config files with non-ASCII

## 2020-07-23
- Refactor error handling to use a custom exception hierarchy

## 2020-07-24
- Handle missing optional field in the response without raising

## 2020-07-30
- Remove the feature flag now that the feature is fully rolled out
