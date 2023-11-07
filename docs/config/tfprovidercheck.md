---
sidebar_position: 600
---

# Validate Terraform Providers using tfprovidercheck

This is not a feature of tfaction, but we describe how to use [tfprovidercheck](https://github.com/suzuki-shunsuke/tfprovidercheck) with tfaction.

tfprovidercheck is a command line tool to execute Terraform security. It prevents malicious Terraform Providers from being executed. You can define the allow list of Terraform Providers and their versions, and check if disallowed providers aren't used.

To use tfprovidercheck with tfaction, you need to run `get-target-config` action and tfprovidercheck between `setup` action and `test` action.

e.g.

https://github.com/suzuki-shunsuke/tfaction-example/blob/9008d4c162d75624a27f0820337afdef50e8e609/.github/workflows/wc-test.yaml#L121-L145

```yaml
- uses: suzuki-shunsuke/tfaction/setup@26effa08b92b77b5cfe04e2a25c15845fd00b04f # v0.7.2
  with:
    github_app_token: ${{steps.token.outputs.token}}

- uses: suzuki-shunsuke/tfaction/get-target-config@26effa08b92b77b5cfe04e2a25c15845fd00b04f # v0.7.2
  id: target-config

- run: |
    set -euo pipefail
    tfprovidercheck -v
    github-comment exec -- terraform version -json | github-comment exec -- tfprovidercheck
  working-directory: ${{ steps.target-config.outputs.working_directory }}
  env:
    TFPROVIDERCHECK_CONFIG_BODY: |
      providers:
        - name: registry.terraform.io/hashicorp/google
        - name: registry.terraform.io/hashicorp/aws
        - name: registry.terraform.io/hashicorp/null
        - name: registry.terraform.io/integrations/github
    GITHUB_TOKEN: ${{steps.token.outputs.token}} # For github-comment

- uses: suzuki-shunsuke/tfaction/test@26effa08b92b77b5cfe04e2a25c15845fd00b04f # v0.7.2
  with:
    github_app_token: ${{steps.token.outputs.token}}
```
