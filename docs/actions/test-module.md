# test-module

[Source code](https://github.com/suzuki-shunsuke/tfaction/tree/main/test-module)

Format, lint, and validate Terraform Module and generate document of Terraform Module.

* terraform fmt
* terraform validate
* tflint
* tfsec
* terraform-docs

## Requirements

* [ghcp](https://github.com/int128/ghcp)
* [github-comment](https://github.com/suzuki-shunsuke/github-comment)
* [tflint](https://github.com/terraform-linters/tflint)
* [tfsec](https://github.com/aquasecurity/tfsec)
* [terraform-docs](https://terraform-docs.io/)

## Dependent Actions

* [suzuki-shunsuke/github-action-terraform-fmt](https://github.com/suzuki-shunsuke/github-action-terraform-fmt)
* [suzuki-shunsuke/github-action-tfsec](https://github.com/suzuki-shunsuke/github-action-tfsec)
* [suzuki-shunsuke/github-action-tflint](https://github.com/suzuki-shunsuke/github-action-tflint)

## Example

```yaml
- uses: suzuki-shunsuke/tfaction/test-module@main
  with:
    github_app_token: ${{ secrets.GITHUB_APP_TOKEN }}
```

## Inputs

### Required Inputs

name | description
--- | ---
github_app_token | GitHub Access Token. `github.token` can't be used because it can't invoke GitHub Actions Workflow

### Optional Inputs

name | default | description
--- | --- | ---
github_token | `github.token` | GitHub Access Token

## Features

### Generate Document

The command `terraform-docs . > README.md` is run in the module directory.
If `README.md` is generated or updated in `pull_request` event, a commit is pushed to the feature branch `$GITHUB_HEAD_REF`.

![image](https://user-images.githubusercontent.com/13323303/156068791-96406162-e42c-4197-aa9c-40bd457af941.png)

--

![image](https://user-images.githubusercontent.com/13323303/156068986-5df71e03-c662-4735-aae8-5acf061d595b.png)
