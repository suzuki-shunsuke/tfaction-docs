# test

[Source code](https://github.com/suzuki-shunsuke/tfaction/tree/main/test)

Format, lint, and validate Terraform Configuration.

* terraform fmt
* terraform validate
* tflint (You can disable)
* tfsec (You can disable)
* trivy (By default, Trivy is disabled)

## Requirements

* [tfmigrate](https://github.com/minamijoyo/tfmigrate)
* [ghcp](https://github.com/int128/ghcp)
* [github-comment](https://github.com/suzuki-shunsuke/github-comment)
* [ci-info](https://github.com/suzuki-shunsuke/ci-info)
* [tflint](https://github.com/terraform-linters/tflint)
* [tfsec](https://github.com/aquasecurity/tfsec)
* [trivy](https://github.com/aquasecurity/trivy)

## Dependent Actions

* [suzuki-shunsuke/github-action-terraform-fmt](https://github.com/suzuki-shunsuke/github-action-terraform-fmt)
* [suzuki-shunsuke/github-action-tfsec](https://github.com/suzuki-shunsuke/github-action-tfsec)
* [suzuki-shunsuke/github-action-tflint](https://github.com/suzuki-shunsuke/github-action-tflint)
* [suzuki-shunsuke/trivy-config-action](https://github.com/suzuki-shunsuke/trivy-config-action)

## Example

```yaml
- uses: suzuki-shunsuke/tfaction/test@main
  with:
    github_app_token: ${{ secrets.GITHUB_APP_TOKEN }}
```

## Inputs

### Required Inputs

name | description
--- | ---
github_app_token | GitHub Access Token. `github.token` can't be used because it can't invoke GitHub Actions Workflow

`github_app_token`'s required permissions

* `contents: write`: To create a commit

### Optional Inputs

name | environment variable | default | description
--- | --- | --- | ---
github_token | | `github.token` | GitHub Access Token

`github_token`'s required permissions

* `pull-requests: write`: For github-comment and reviewdog
