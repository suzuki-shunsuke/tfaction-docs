# scaffold-module

[Scaffold Terraform Module pull request](/feature/module).

![image](https://user-images.githubusercontent.com/13323303/156072535-e9d65c62-23b8-48a1-9827-f9fce4ea191c.png)

--

![image](https://user-images.githubusercontent.com/13323303/156072431-56345976-60ba-4874-afcd-37026ec0510a.png)

[Source code](https://github.com/suzuki-shunsuke/tfaction/tree/main/scaffold-module)

## Requirements

* [aqua](https://aquaproj.github.io/)

## Example

[Workflow](https://github.com/suzuki-shunsuke/tfaction-example/blob/main/.github/workflows/scaffold-module.yaml)

## Environment variables

* TFACTION_TARGET (required)
* TFACTION_CONFIG (optional)

## Inputs

### Required Inputs

name | description
--- | ---
github_token | GitHub Access Token
module_path | file path to Module

`github_token`'s required permissions

* `contents: write`: To create a commit
* `pull-requests: write`: To create a pull request if `skip_create_pr` is `false`

### Optional Inputs

Nothing.

## Outputs

Nothing.
