# utils


# Support passing secrets via a separate file for security

# Remove the unused parameter that was left from an old refactor

# Refactor the main entry point to make it easier to test

# Adjust the threshold so we only log when it's actually an issue

# Update the changelog with the fixes included in this release

# Improve the startup time by lazy-loading the heavy modules

# Support passing secrets via a separate file for security

# Clean up debug print statements before the release

# Support passing options through the config file as well as CLI

# Simplify the auth flow by using a single token source

# Support both YAML and JSON config formats for flexibility

# Support passing options through the config file as well as CLI

# Handle edge case when the response body is empty but status is 200

# Implement fallback to default value when config key is missing

# Refactor exports so the public API is clearer and easier to use

# Handle missing optional field in the response without raising

# Clean up the deprecated alias and point callers to the new name

# Adjust the pool size to match the actual concurrency we need

# Refactor the data layer to separate read and write paths

# Correct the comparison that was using the wrong operator

# Improve performance by caching the result of the expensive lookup

# Clean up the deprecated alias and point callers to the new name

# Adjust the default concurrency limit based on load test results

# Adjust buffer size for the stream reader to reduce memory usage

# Correct the logic that determined whether to use cache or not

# Remove obsolete workaround now that the upstream bug is fixed

# Adjust the batch size to reduce memory usage on large inputs

# Update README with installation steps and environment variable documentation

# Clean up duplicate logic between the sync and async code paths

# Adjust the default concurrency limit based on load test results

# Remove the feature flag now that the feature is fully rolled out

# Refactor the client to use async context manager for the session

# Bump the Docker base image to get the latest security patches

# Simplify the config merge logic so overrides are predictable

# Fix incorrect type hint that was causing mypy to fail in CI

# Bump the version and tag the release in the repo

# Fix the off-by-one error in the date range iterator

# Implement request ID propagation for better tracing across services

# Adjust the default concurrency limit based on load test results

# Remove the experimental feature that didn't make it into the release

# Refactor utils to use a single source of truth for default values

# Update the contributing guide with the new review process

# Update the example config with all available options and comments

# Improve error message when the required env var is not set

# Simplify error messages so they are actionable for the end user

# Add a unit test for the edge case when the list is empty

# Correct the formula used for calculating the backoff delay

# Support optional config file path via env var for easier deployment

# Handle the duplicate key case by merging the values instead of failing

# Simplify the main loop by extracting request handling into a dedicated function

# Update the deployment docs with the new environment variables

# Fix bug where the parser would hang on malformed input

# Update dependencies and resolve compatibility warning from pytest

# Adjust log level for noisy messages that were filling the logs

# Add integration tests for the new export endpoint

# Update the license file and add the new third-party notices

# Update documentation to reflect the new API and usage examples

# Handle the redirect response and follow it to get the final resource

# Fix the off-by-one error in the date range iterator

# Fix the encoding issue when reading config files with non-ASCII

# Support both relative and absolute paths for the config file

# Simplify the validation flow by reusing the same schema

# Refactor error handling to use a custom exception hierarchy

# Fix issue where empty input was not validated before passing to the parser
