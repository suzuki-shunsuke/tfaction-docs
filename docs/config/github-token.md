---
sidebar_position: 250
---

# GitHub Access Token

tfaction requires GitHub Access Token.

Due to the restriction of the repository's GITHUB_TOKEN, tfaction requires other GitHub Access Token too.

https://docs.github.com/en/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow

> When you use the repository's GITHUB_TOKEN to perform tasks, events triggered by the GITHUB_TOKEN will not create a new workflow run.

We recommend using GitHub App's Token instead of Personal Access Token.

There are some GitHub Actions to create GitHub App's Access Token.

* https://github.com/tibdex/github-app-token
* https://github.com/cybozu/octoken-action

### Required permissions of Repository's GITHUB_TOKEN

https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#permissions

name | permission | description
--- | --- | ---
id-token | write | For [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)
contents | read | Checkout
issues | read | `gh pr list`'s `-l` option requires the read permission
pull-requests | write | pull request labels

### Required permissions of GitHub App

name | permission | description
--- | --- | ---
Contents | write | create commits and branches
Pull Requests | write | open pull requests

### Create GitHub App

Please see the official document. https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app
