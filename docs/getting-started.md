---
sidebar_position: 150
---

# Getting Started

[Create a repository from this template repository](https://github.com/suzuki-shunsuke/tfaction-example/generate)

## Create required resources with Terraform

In the getting started, we use [Amazon S3 as Terraform Backend](https://developer.hashicorp.com/terraform/language/settings/backends/s3), so AWS Account is necessary.

Create the following resources.

- IAM OpenID Connect provider
- S3 Buckets
- IAM Roles

```sh
cd aws/terraform-ci
vi main.tf # Change local values
terraform init
terraform plan
terraform apply
```

After this getting started, you can clean up resources.

```sh
terraform destroy
```

## Create a GitHub App

Create a GitHub App and store the App id and private key to GitHub Actions Secrets.

Secrets

- APP_ID
- APP_PRIVATE_KEY

[Required permission](/tfaction/docs/config/github-token)

## Fix the template and tfaction-root.yaml and workflows

Please search with the word `CHANGEME` and fix these lines.

```console
$ git grep CHANGEME
.github/workflows/apply.yaml:    branches: [dummy] # Disabled. CHANGEME Replace dummy with main
.github/workflows/test.yaml:    if: 'false' # CHANGEME Please remove this.
templates/github/terraform.tf:    region = "us-east-1" # CHANGEME Fix the region if necessary
templates/github/terraform.tf:  owner = "suzuki-shunsuke" # CHANGEME Fix owner
tfaction-root.yaml:  aws_region: ap-northeast-1 # CHANGEME Fix the region if necessary
tfaction-root.yaml:  s3_bucket_name_plan_file: '<S3 Bucket Name for Terraform Plan File>' # CHANGEME
tfaction-root.yaml:  s3_bucket_name_tfmigrate_history: '<S3 Bucket Name for tfmigrate history files>' # CHANGEME
tfaction-root.yaml:    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_github_terraform_plan # CHANGEME
tfaction-root.yaml:    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_github_tfmigrate_plan # CHANGEME
tfaction-root.yaml:    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_github_terraform_apply # CHANGEME
tfaction-root.yaml:    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_github_tfmigrate_apply # CHANGEME
```

```sh
git add .
git checkout -b update-template
git commit -m "update template"
git push origin update-template
gh pr create -t "update template" -b "update template"
```

Please merge the pull request.

## Scaffold a working directory

Please run GitHub Actions Workflow `scaffold-working-directory`.

```console
$ gh workflow run scaffold-working-directory.yaml -f working_dir=github/services/yoo
```

Then a pull request would be created.

Please merge the pull request.

## Create a pull request

The working directory `github/foo` was created.
Let's add an issue request label with Terraform.

```console
$ git fetch origin main
$ git checkout -b add-issue-label origin/main
$ vi github/services/yoo/label.tf
```

label.tf

```tf
resource "github_issue_label" "bar" {
  repository  = "tfaction-example" # CHANGE
  name        = "bar"
  color       = "FF0000"
  description = "bar"
}
```

```console
$ git add github/services/yoo/label.tf
$ git commit -m "add an issue label"
$ git push origin add-issue-label
$ gh pr create -t "add an issue label" -b "add an issue label"
```

![image](https://user-images.githubusercontent.com/13323303/152704813-35418f4d-61de-44b0-8f21-a6e84519872b.png)

Please confirm the result of `terraform plan` and merge the pull request.
Then `terraform apply` would be run in the main branch.

![image](https://user-images.githubusercontent.com/13323303/152704907-3137a051-9e3a-43e5-8faa-f17e2e49f081.png)
