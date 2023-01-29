# scaffold-tfmigrate

[Scaffold tfmigrate migration pull request](/feature/tfmigrate#scaffold-migration-pull-request).

* [Source code](https://github.com/suzuki-shunsuke/tfaction/tree/main/scaffold-tfmigrate)

## Requirements

* [aqua](https://aquaproj.github.io/)

## Example

[Workflow](https://github.com/suzuki-shunsuke/tfaction-example/blob/main/.github/workflows/scaffold-tfmigrate.yaml)

## Environment variables

* TFACTION_TARGET or TFACTION_WORKING_DIR (required)
* TFACTION_CONFIG (optional)

## Inputs

### Required Inputs

name | description
--- | ---
github_app_token | GitHub Access Token

`github_app_token`'s required permissions

* `contents: write`: To create a commit
* `pull-requests: write`: To create a pull request and set a label if `skip_create_pr` is `false`

### Optional Inputs

name | default | description
--- | --- | ---
migration_name | main | Migration name

## Outputs

name | type | description
--- | --- | ---
working_directory | file path | Working Directory
