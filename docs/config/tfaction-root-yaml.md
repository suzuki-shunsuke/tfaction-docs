---
sidebar_position: 200
---

# tfaction-root.yaml

* [JSON Schema](https://github.com/suzuki-shunsuke/tfaction/blob/main/schema/tfaction-root.json)
* [Generated document from JSON Schema](https://suzuki-shunsuke.github.io/tfaction/config/tfaction-root.html)

## `plan_workflow_name`

From tfaction v0.7.0, this setting is required.

```yaml
plan_workflow_name: <GitHub Actions Workflow name running terraform-plan action>
```

e.g.

```yaml
plan_workflow_name: test
```

## `target` and `working_directory`

tfaction assumes that there are multiple working directories in the repository.
Working directory is a directory where terraform commands such as `terraform init`, `terraform plan`, and `terraform apply` are run.
tfaction treats directories where `tfaction.yaml` is located as working directories.
Working directory has an attribute `target`, which is an identifier of the working directory. `target` must be unique.
`target` is used in pull request comments and labels and the input of [scaffold working directory](/feature/scaffold-working-dir).
The attribute `working_directory` of the working directory is a relative file path to the working directory.

## `target_groups`

`target_groups` is a list of target group configuration.
tfaction searches the configuration of the working directory from `target_groups`.
Target Group Configuration has attributes `working_directory` and `target`.
If the Target Group's `working_directory` is the prefix of the working directory's `working_directory`,
or the Target Group's `target` is the prefix of the working directory's `target`,
the Target Group's configuration is used as the working directory's configuration and the search is stopped.

The order of `target_groups` is important.

```yaml
target_groups:
- working_directory: aws/
  target: aws/
  # ...
- working_directory: aws/foo/ # This configuration is never used.
  target: aws/foo/
  # ...
```

## Example

```yaml
---
plan_workflow_name: test

draft_pr: true # default is false. If `draft_pr` is true, tfaction creates pull requests as draft
base_working_directory: "" # default is empty, which means the current directory
working_directory_file: tfaction.yaml # default is "tfaction.yaml"
renovate_login: 'renovate[bot]' # default is "renovate[bot]"
label_prefixes:
  target: "target:" # default is "target:"
  tfmigrate: "tfmigrate:" # default is "tfmigrate:"
  skip: "skip:" # default is "skip:"

aqua:
  update_checksum:
    # Update aqua-checksums.json in `setup` action
    enabled: true # default is false
    skip_push: false # default is false
    prune: true # default is false

# https://github.com/suzuki-shunsuke/tfaction/pull/1106
# tfsec:
#   enabled: true
# tflint:
#   enabled: true
# trivy:
#   enabled: false

# We don't recommend disabling this feature.
# update_related_pull_requests:
#   enabled: false

# tfaction >= v0.5.25
# https://github.com/suzuki-shunsuke/tfaction/pull/910
# scaffold_working_directory:
#   skip_adding_aqua_packages: true

# tfaction >= v0.6.0
drift_detection:
  enabled: false
  issue_repo_owner: suzuki-shunsuke
  issue_repo_name: tfaction-example
  num_of_issues: 1
  minimum_detection_interval: 1

target_groups:
- working_directory: aws/
  target: aws/
  aws_region: ap-northeast-1
  s3_bucket_name_tfmigrate_history: '<S3 Bucket Name for tfmigrate history files>'
  template_dir: templates/aws # This is used by `scaffold-working-dir` action
  drift_detection:
    enabled: true
  terraform_plan_config:
    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_terraform_plan
  tfmigrate_plan_config:
    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_tfmigrate_plan
  terraform_apply_config:
    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_terraform_apply
  tfmigrate_apply_config:
    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_tfmigrate_apply

- working_directory: github/services/
  target: github/
  aws_region: ap-northeast-1
  s3_bucket_name_tfmigrate_history: '<S3 Bucket Name for tfmigrate history files>'
  template_dir: templates/github
  aws_secrets_manager:
  # export AWS Secrets Manager's secret as environment variable
  - secret_id: bar
    envs:
    - env_name: BAR
  terraform_plan_config:
    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_github_terraform_plan
  tfmigrate_plan_config:
    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_github_tfmigrate_plan
  terraform_apply_config:
    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_github_terraform_apply
    aws_secrets_manager:
    # export AWS Secrets Manager's secret as environment variable
    - secret_id: atlas_api_key
      envs:
      - env_name: ATLAS_API_PUBLIC_KEY
        secret_key: public_key
      - env_name: ATLAS_API_PRIVATE_KEY
        secret_key: private_key
  tfmigrate_apply_config:
    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_github_tfmigrate_apply

- working_directory: gcp/
  target: gcp/
  aws_region: ap-northeast-1
  template_dir: templates/github
  runs_on: ubuntu-latest # default is "ubuntu-latest". This is useful to use GitHub Actions Self Hosted Runner for the specific provider
  environment: # default is null
    # https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment
    name: production
    url: https://github.com
  secrets: # GitHub Secrets
  - env_name: FOO # Environment variable name
    secret_name: FOO_STAGING # Secret name

  gcs_bucket_name_tfmigrate_history: '<Google Cloud Storage Bucket Name for tfmigrate history files>'
  terraform_plan_config:
    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_gcp_terraform_plan
    gcp_service_account: terraform@my-project.iam.gserviceaccount.com
    gcp_workload_identity_provider: 'projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider'
  tfmigrate_plan_config:
    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_gcp_tfmigrate_plan
    gcp_service_account: terraform@my-project.iam.gserviceaccount.com
    gcp_workload_identity_provider: 'projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider'
  terraform_apply_config:
    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_gcp_terraform_apply
    gcp_service_account: terraform@my-project.iam.gserviceaccount.com
    gcp_workload_identity_provider: 'projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider'
  tfmigrate_apply_config:
    aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_gcp_tfmigrate_apply
    gcp_service_account: terraform@my-project.iam.gserviceaccount.com
    gcp_workload_identity_provider: 'projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider'
```
