---
sidebar_position: 450
---

# Manage Terraform Modules

_tfaction's required version: `>= v0.5.0` [#221](https://github.com/suzuki-shunsuke/tfaction/issues/221)_

tfaction supports scaffolding, testing, and releasing Terraform Modules.

Please add a file `tfaction_module.yaml` in the Module directory.
tfaction detects Modules with this file.
Currently, tfaction doesn't read the content, so there is no problem even if the content is empty.

```yaml
{}
```

## Test Module

[test-module](/actions/test-module)

## Scaffold Module

[scaffold-module](/actions/scaffold-module)

:bulb: If you don't want to create pull requests by GitHub App, please see [Support skipping creating pull requests](skip-creating-pr).

## Release Module

[release-module](/actions/release-module)

Instead of [Local paths](https://www.terraform.io/language/modules/sources#local-paths) Source, we recommend to create a tag and fix the version by [GitHub](https://www.terraform.io/language/modules/sources#github) Source.

## :bulb: Trouble shooting about downloading Private Modules

If it failed to download Private Modules in `terraform init`, you may have to run [gh auth setup-git](https://cli.github.com/manual/gh_auth_setup-git) with GitHub Access Token.

Error of `terraform init`

```
Upgrading modules...
Downloading git::https://github.com/***/***.git?ref=*** for ***...
╷
│ Error: Failed to download module
│ 
│ Could not download module "***" (main.tf:1) source code
│ from
│ "git::https://github.com/***/***.git?ref=***":
│ error downloading
│ 'https://github.com/***/***.git?ref=***':
│ /usr/bin/git exited with 128: Cloning into
│ '.terraform/modules/***'...
│ fatal: could not read Username for 'https://github.com': No such device or
│ address
│ 
╵
```

GitHub Actions Workflow

```yaml
# This is required to download private modules in `terraform init`
- run: gh auth setup-git
  env:
    GITHUB_TOKEN: ${{ steps.generate_token.outputs.token }}

- uses: suzuki-shunsuke/tfaction/setup@v0.5.0
  with:
    github_app_token: ${{ steps.generate_token.outputs.token }}
```
