# terraform-apply

[Source code](https://github.com/suzuki-shunsuke/tfaction/tree/main/terraform-apply)

GitHub Actions to run terraform apply

## Requirements

* Terraform
* AWS CLI or gsutil
* [GitHub CLI](https://github.com/cli/cli)
* [tfcmt](https://github.com/suzuki-shunsuke/tfcmt)
* [github-comment](https://github.com/suzuki-shunsuke/github-comment)

## Example

```yaml
- uses: suzuki-shunsuke/tfaction/terraform-apply@main
  with:
    github_app_token: ${{ secrets.GITHUB_APP_TOKEN }}
```

## Inputs

### Required Inputs

name | description
--- | ---
github_app_token | GitHub Access Token. `github.token` can't be used because it can't invoke GitHub Actions Workflow

### Optional Inputs

name | environment variable | default | description
--- | --- | --- | ---
github_token | | `github.token` | GitHub Access Token

## Outputs

Nothing.
