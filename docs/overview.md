---
sidebar_position: 100
slug: /
---

# tfaction

GitHub Actions collection for Opinionated Terraform Workflow

## Goal

Build good Terraform Workflow easily with GitHub Actions.

## Assumption

* GitHub Flow
  * run `terraform plan` or `tfmigrate plan` in pull request CI
  * When a pull request is merged, `terraform apply` or `tfmigrate apply` is run in CI
* Monorepo
  * There are multiple Terraform Working Directory in a repository
* GitHub Actions
* Store terraform plan files and tfmigrate history files at AWS S3
* Manage dependencies with [aqua](https://aquaproj.github.io/)
* Update dependencies with [Renovate](https://github.com/renovatebot/renovate)

## Getting Started

https://github.com/suzuki-shunsuke/tfaction-getting-started

## Versioning Policy

[suzuki-shunsuke/versioning-policy v0.1.0](https://github.com/suzuki-shunsuke/versioning-policy/blob/v0.1.0/POLICY.md), which is compatible with [Semantic Versioning 2.0.0](https://semver.org/).

## LICENSE

[MIT](https://github.com/suzuki-shunsuke/tfaction/blob/main/LICENSE)
