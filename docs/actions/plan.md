# plan

[Source code](https://github.com/suzuki-shunsuke/tfaction/tree/main/plan)

tfaction >= v0.7.4 [#1275](https://github.com/suzuki-shunsuke/tfaction/pull/1275)

GitHub Actions to execute tfmigrate plan or terraform plan

## Requirements

- [tfmigrate](https://github.com/minamijoyo/tfmigrate)
- [ghcp](https://github.com/int128/ghcp)
- [github-comment](https://github.com/suzuki-shunsuke/github-comment)

## Example

```yaml
- uses: suzuki-shunsuke/tfaction/plan@main
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
--- | --- | ---
github_token | | `github.token` | GitHub Access Token

`github_token`'s required permissions

* `pull-requests: write`: For github-comment

## Outputs

Nothing.
