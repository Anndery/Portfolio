# Project


- Simplify the validation flow by reusing the same schema

- Adjust the default concurrency limit based on load test results

- Refactor the helper to accept an optional callback for progress

- Clean up the deprecated alias and point callers to the new name

- Fix issue where empty input was not validated before passing to the parser

- Support optional config file path via env var for easier deployment

- Handle missing optional field in the response without raising

- Handle the partial write case and retry the remaining bytes

- Bump the version and tag the release in the repo

- Bump the CI image to use the latest stable runner version

- Implement basic rate limiting to avoid overwhelming the downstream service

- Clean up the commented-out code that was left from debugging

- Clean up the commented-out code that was left from debugging

- Update the changelog with the fixes included in this release

- Adjust default timeout value to prevent premature connection drops

- Add a note in the README about the breaking change in 2.0

- Update the changelog with the fixes included in this release

- Update the deployment docs with the new environment variables

- Handle the redirect response and follow it to get the final resource

- Add a unit test for the edge case when the list is empty

- Fix incorrect type hint that was causing mypy to fail in CI

- Correct the timestamp format to use ISO 8601 for consistency

- Adjust timeout and retry settings based on production observations

- Simplify the validation flow by reusing the same schema

- Refactor the main entry point to make it easier to test

- Correct the default so it matches what the documentation says

- Update the example config with all available options and comments

- Refactor the parser to use a proper state machine instead of regex

- Handle the redirect response and follow it to get the final resource

- Simplify the dependency injection so it's easier to mock in tests

- Support both YAML and JSON config formats for flexibility

- Correct the formula used for calculating the backoff delay

- Adjust timeout and retry settings based on production observations

- Fix the off-by-one error in the date range iterator

- Adjust default timeout value to prevent premature connection drops

- Clean up the deprecated alias and point callers to the new name

- Refactor the client to use async context manager for the session

- Correct the comparison that was using the wrong operator

- Update documentation to reflect the new API and usage examples

- Refactor the helper to accept an optional callback for progress

- Simplify the auth flow by using a single token source

- Handle the duplicate key case by merging the values instead of failing

- Clean up the test fixtures and move shared data to a single file

- Bump the version and tag the release in the repo

- Add integration tests for the new export endpoint

- Improve the default config so it works out of the box for dev

- Implement a small in-memory cache for the config to avoid re-reading

- Improve the setup script to check for required tools before running

- Add a smoke test that runs in CI to catch obvious regressions

- Adjust the pool size to match the actual concurrency we need

- Adjust the queue size to prevent drops under burst traffic

- Implement proper cleanup of resources when the process receives SIGTERM

- Correct typo in the error message shown when validation fails

- Fix bug where the parser would hang on malformed input

- Clean up the test fixtures and move shared data to a single file
