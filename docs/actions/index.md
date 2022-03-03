---
sidebar_position: 200
---

# Actions

## Main Actions

* [list-targets](list-targets)
* [setup](setup)
* [export-secrets](export-secrets)
* pull request workflow
  * [test](test)
  * [tfmigrate-plan](tfmigrate-plan)
  * [terraform-plan](terraform-plan)
  * [test-module](test-module)
* apply workflow
  * [tfmigrate-apply](tfmigrate-apply)
  * [terraform-apply](terraform-apply)
  * [create-follow-up-pr](create-follow-up-pr)
* scaffold working directory
  * [create-scaffold-pr](create-scaffold-pr)
  * [scaffold-working-dir](scaffold-working-dir)
* [scaffold-tfmigrate](scaffold-tfmigrate)
* [scaffold-module](scaffold-module)
* [release-module](release-module)

## Low level Actions

These Actions are used in Main Actions internally.

* [get-target-config](get-target-config)
* [get-global-config](get-global-config)
* list-targets
  * [list-targets-with-changed-files](list-targets-with-changed-files)
  * [list-working-dirs](list-working-dirs)
* setup
  * [deploy-ssh-key](deploy-ssh-key)
  * [export-aws-secrets-manager](export-aws-secrets-manager)
* [check-terraform-skip](check-terraform-skip)

## Dependent Actions

* [suzuki-shunsuke/github-action-tflint](https://github.com/suzuki-shunsuke/github-action-tflint)
* [suzuki-shunsuke/github-action-tfsec](https://github.com/suzuki-shunsuke/github-action-tfsec)
* [suzuki-shunsuke/github-action-terraform-fmt](https://github.com/suzuki-shunsuke/github-action-terraform-fmt)
* [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)
* [google-github-actions/auth](https://github.com/google-github-actions/auth)
