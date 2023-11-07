---
sidebar_position: 200
---

# Actions

## Main Actions

* [list-targets](list-targets.md)
* [setup](setup.md)
* [export-secrets](export-secrets.md)
* pull request workflow
  * [test](test.md)
  * [plan](plan.md)
  * [tfmigrate-plan](tfmigrate-plan.md)
  * [terraform-plan](terraform-plan.md)
  * [test-module](test-module.md)
* apply workflow
  * [apply](apply.md)
  * [tfmigrate-apply](tfmigrate-apply.md)
  * [terraform-apply](terraform-apply.md)
  * [create-follow-up-pr](create-follow-up-pr.md)
* scaffold working directory
  * [create-scaffold-pr](create-scaffold-pr.md)
  * [scaffold-working-dir](scaffold-working-dir.md)
* [scaffold-tfmigrate](scaffold-tfmigrate.md)
* [scaffold-module](scaffold-module.md)
* [release-module](release-module.md)

## Low level Actions

These Actions are used in Main Actions internally.

* [get-target-config](get-target-config.md)
* [get-global-config](get-global-config.md)
* list-targets
  * [list-targets-with-changed-files](list-targets-with-changed-files.md)
  * [list-working-dirs](list-working-dirs.md)
* setup
  * [deploy-ssh-key](deploy-ssh-key.md)
  * [export-aws-secrets-manager](export-aws-secrets-manager.md)
* [check-terraform-skip](check-terraform-skip.md)

## Dependent Actions

* [suzuki-shunsuke/github-action-tflint](https://github.com/suzuki-shunsuke/github-action-tflint)
* [suzuki-shunsuke/github-action-tfsec](https://github.com/suzuki-shunsuke/github-action-tfsec)
* [suzuki-shunsuke/trivy-config-action](https://github.com/suzuki-shunsuke/trivy-config-action)
* [suzuki-shunsuke/github-action-terraform-fmt](https://github.com/suzuki-shunsuke/github-action-terraform-fmt)
* [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)
* [google-github-actions/auth](https://github.com/google-github-actions/auth)
