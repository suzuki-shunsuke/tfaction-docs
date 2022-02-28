---
sidebar_position: 450
---

# Scaffold, test, and release Terraform Modules

_tfaction's required version: `>= v0.5.0` [#221](https://github.com/suzuki-shunsuke/tfaction/issues/221)_

tfaction supports scaffolding, testing, and releasing Terraform Modules.

## Test Module

[test-module](/actions/test-module)

## Scaffold Module

[scaffold-module](/actions/scaffold-module)

:bulb: If you don't want to create pull requests by GitHub App, please see [Support skipping creating pull requests](skip-creating-pr).

## Release Module

[release-module](/actions/release-module)

Instead of [Local paths](https://www.terraform.io/language/modules/sources#local-paths) Source, we recommend to create a tag and fix the version by [GitHub](https://www.terraform.io/language/modules/sources#github) Source.
