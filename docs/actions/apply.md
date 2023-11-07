# apply

[Source code](https://github.com/suzuki-shunsuke/tfaction/tree/main/apply)

tfaction >= v0.7.3 [#1275](https://github.com/suzuki-shunsuke/tfaction/pull/1275)

GitHub Actions to run terraform apply or tfmigrate apply

## Requirements

- Terraform
- (Optional) [tfmigrate](https://github.com/minamijoyo/tfmigrate)
- [GitHub CLI](https://github.com/cli/cli)
- [tfcmt](https://github.com/suzuki-shunsuke/tfcmt)
- [github-comment](https://github.com/suzuki-shunsuke/github-comment)

## Example

```yaml
- uses: suzuki-shunsuke/tfaction/apply@main
  with:
    github_app_token: ${{ secrets.GITHUB_APP_TOKEN }}
```

## Inputs

### Required Inputs

name | description
--- | ---
github_app_token | GitHub Access Token. `github.token` can't be used because it can't invoke GitHub Actions Workflow

`github_app_token`'s required permissions

* `contents: write`: To update branches of related pull requests

### Optional Inputs

name | environment variable | default | description
--- | --- | --- | ---
github_token | | `github.token` | GitHub Access Token

`github_token`'s required permissions

* `pull-requests: write`: To post comments by github-comment and tfcmt

## Outputs

Nothing.
