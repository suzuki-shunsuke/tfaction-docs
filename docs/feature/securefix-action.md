---
sidebar_position: 1240
description: Securefix Action
---

# Securefix Action

`tfaction >= v1.18.0`

You can fix and generate code and create pull requests by [Securefix Action](https://github.com/csm-actions/securefix-action).
By default, tfaction fixes and generates code and create pull requests using a GitHub access token passed by the input `github_token`, so the token requires `contents:write` permission.

Securefix Action can fix and generate code and create pull requests more securely.
For more details, please see the document of Securefix Action.

## Requirements

Securefix Action v0.2.0 is required.
[Please set up Securefix Action according to the document.](https://github.com/csm-actions/securefix-action)

## How to use

1. Enable this feature by tfaction-root.yaml

```yaml
securefix:
  server_repository: securefix
  pull_request:
    base_branch: main
```

2. Pass Securefix Action Client App id and private key to actions

```yaml
- uses: suzuki-shunsuke/tfaction/setup@latest
  id: setup
  with:
    github_token: ${{steps.token.outputs.token}}
    github_app_id_for_securefix_action: ${{vars.SECUREFIX_ACTION_CLIENT_APP_ID}}
    github_app_private_key_for_securefix_action: ${{secrets.SECUREFIX_ACTION_CLIENT_APP_PRIVATE_KEY}}
- uses: suzuki-shunsuke/tfaction/test@latest
  with:
    github_token: ${{steps.token.outputs.token}}
    github_app_id_for_securefix_action: ${{vars.SECUREFIX_ACTION_CLIENT_APP_ID}}
    github_app_private_key_for_securefix_action: ${{secrets.SECUREFIX_ACTION_CLIENT_APP_PRIVATE_KEY}}
- uses: suzuki-shunsuke/tfaction/plan@latest
  with:
    github_token: ${{steps.token.outputs.token}}
    github_app_id_for_securefix_action: ${{vars.SECUREFIX_ACTION_CLIENT_APP_ID}}
    github_app_private_key_for_securefix_action: ${{secrets.SECUREFIX_ACTION_CLIENT_APP_PRIVATE_KEY}}
```

```yaml
- uses: suzuki-shunsuke/tfaction/create-scaffold-pr@latest
  with:
    github_token: ${{steps.token.outputs.token}}
    github_app_id_for_securefix_action: ${{vars.SECUREFIX_ACTION_CLIENT_APP_ID}}
    github_app_private_key_for_securefix_action: ${{secrets.SECUREFIX_ACTION_CLIENT_APP_PRIVATE_KEY}}
```

```yaml
- uses: suzuki-shunsuke/tfaction/scaffold-tfmigrate@latest
  with:
    github_token: ${{steps.token.outputs.token}}
    migration_name: ${{inputs.migration_name}}
    github_app_id_for_securefix_action: ${{vars.SECUREFIX_ACTION_CLIENT_APP_ID}}
    github_app_private_key_for_securefix_action: ${{secrets.SECUREFIX_ACTION_CLIENT_APP_PRIVATE_KEY}}
```

```yaml
- uses: suzuki-shunsuke/tfaction/create-scaffold-module-pr@latest
  with:
    github_token: ${{steps.token.outputs.token}}
    github_app_id_for_securefix_action: ${{vars.SECUREFIX_ACTION_CLIENT_APP_ID}}
    github_app_private_key_for_securefix_action: ${{secrets.SECUREFIX_ACTION_CLIENT_APP_PRIVATE_KEY}}
```

```yaml
- uses: suzuki-shunsuke/tfaction/generate-config-out@latest
  env:
    GITHUB_TOKEN: ${{steps.token.outputs.token}}
  with:
    github_token: ${{steps.token.outputs.token}}
    branch: ${{inputs.branch}}
    file: ${{inputs.file}}
    github_app_id_for_securefix_action: ${{vars.SECUREFIX_ACTION_CLIENT_APP_ID}}
    github_app_private_key_for_securefix_action: ${{secrets.SECUREFIX_ACTION_CLIENT_APP_PRIVATE_KEY}}
```

3. Configuration of Securefix Action Server

```yaml
entries:
  - client:
      repositories:
        - suzuki-shunsuke/tfaction-example
      branches:
        - main
    push:
      repositories:
        - suzuki-shunsuke/tfaction-example
      branches:
        - "**"
    pull_request:
      base_branches:
        - main
```
