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

## Blog, Slide

* English
  * [2022-02-12 tfaction - Build Terraform Workflow with GitHub Actions](https://speakerdeck.com/szksh/tfaction-build-terraform-workflow-with-github-actions)
* Japanese
  * [2022-03-03 tfaction v0.5.0 の update](https://zenn.dev/shunsuke_suzuki/articles/tfaction-v050)
  * [2022-02-06 tfaction の導入ガイド](https://zenn.dev/shunsuke_suzuki/articles/tfaction-setup)
  * [2022-02-04 Terraform の CI を AWS CodeBuild から GitHub Actions + tfaction に移行しました](https://blog.studysapuri.jp/entry/2022/02/04/080000)
  * [2022-01-24 tfaction - GitHub Actions で良い感じの Terraform Workflow を構築](https://zenn.dev/shunsuke_suzuki/articles/tfaction-introduction)

## Getting Started

https://github.com/suzuki-shunsuke/tfaction-getting-started

## Release Notes

https://github.com/suzuki-shunsuke/tfaction/releases

## Versioning Policy

[suzuki-shunsuke/versioning-policy v0.1.0](https://github.com/suzuki-shunsuke/versioning-policy/blob/v0.1.0/POLICY.md), which is compatible with [Semantic Versioning 2.0.0](https://semver.org/).

## LICENSE

[MIT](https://github.com/suzuki-shunsuke/tfaction/blob/main/LICENSE)
