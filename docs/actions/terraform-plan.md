# terraform-plan

[Source code](https://github.com/suzuki-shunsuke/tfaction/tree/main/terraform-plan)

GitHub Actions to run terraform plan

## Requirements

* Terraform
* AWS CLI or gsutil
* [conftest](https://www.conftest.dev/)
* [tfcmt](https://github.com/suzuki-shunsuke/tfcmt)
* [github-comment](https://github.com/suzuki-shunsuke/github-comment)

## Example

```yaml
- uses: suzuki-shunsuke/tfaction/terraform-plan@main
```

## Inputs

### Required Inputs

Nothing.

### Optional Inputs

name | environment variable | default | description
--- | --- | --- | ---
github_token | | `github.token` | GitHub Access Token

`github_token`'s required permissions

* `pull-requests: write`: To post comments by tfcmt and github-comment

## Outputs

Nothing.
