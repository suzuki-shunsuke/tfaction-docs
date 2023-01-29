# create-follow-up-pr

[Source code](https://github.com/suzuki-shunsuke/tfaction/tree/main/create-follow-up-pr)

GitHub Actions to create a follow up pull request

## Requirements

* [GitHub CLI](https://github.com/cli/cli)
* [github-comment](https://github.com/suzuki-shunsuke/github-comment)

## Example

```yaml
- uses: suzuki-shunsuke/tfaction/create-follow-up-pr@main
  with:
    github_app_token: ${{ secrets.GITHUB_APP_TOKEN }}
```

## Inputs

### Required Inputs

name | description
--- | ---
github_app_token | GitHub Access Token. `github.token` can't be used because it can't invoke GitHub Actions Workflow

`github_app_token`'s required permissions

* `contents: write`: To create an empty commit
* `pull-requests: write`: To create a pull request

### Optional Inputs

name | environment variable | default | description
--- | --- | --- | ---
github_token | | `github.token` | GitHub Access Token

`github_token`'s required permissions

* `pull-requests: write`
  * To create Issue Labels
  * To post comments by github-comment

## Outputs

Nothing.
