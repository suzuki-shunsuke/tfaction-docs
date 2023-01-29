# release-module

[Create a GitHub Tag and Release for the versioning of Terraform Module](/feature/module).

![image](https://user-images.githubusercontent.com/13323303/156072006-12d48ac2-95ee-41ab-a90a-42b232f40140.png)

--

![image](https://user-images.githubusercontent.com/13323303/156072085-cabd76cd-e8a4-44af-b407-e862f4bf9946.png)

[Source code](https://github.com/suzuki-shunsuke/tfaction/tree/main/release-module)

## Requirements

* [gh](https://cli.github.com/)

## Example

[Workflow](https://github.com/suzuki-shunsuke/tfaction-example/blob/main/.github/workflows/scaffold-module.yaml)

## Environment variables

Nothing.

## Inputs

### Required Inputs

name | description
--- | ---
module_path | file path to Module
version | module version

### Optional Inputs

name | default | description
--- | --- | ---
github_token | `github.token` | GitHub Access Token

`github_token`'s required permisions

* `contents: write`: To create a tag and a release

## Outputs

Nothing.
