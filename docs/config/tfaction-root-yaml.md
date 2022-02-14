---
sidebar_position: 200
---

# tfaction-root.yaml

* [JSON Schema](https://github.com/suzuki-shunsuke/tfaction/blob/main/schema/tfaction-root.json)
* [Generated document from JSON Schema](https://suzuki-shunsuke.github.io/tfaction/config/tfaction-root.html)

```yaml
---
draft_pr: true # default is false. If `draft_pr` is true, tfaction creates pull requests as draft
base_working_directory: "" # default is empty, which means the current directory
working_directory_file: tfaction.yaml # default is "tfaction.yaml"
renovate_login: 'renovate[bot]' # default is "renovate[bot]"
label_prefixes:
  target: "target:" # default is "target:"
  tfmigrate: "tfmigrate:" # default is "tfmigrate:"
  ignore: "ignore:" # default is "ignore:"

target_groups:
- working_directory: aws/
  target: aws/
  aws_region: ap-northeast-1
  s3_bucket_name_plan_file: '<S3 Bucket Name for Terraform Plan File>'
  s3_bucket_name_tfmigrate_history: '<S3 Bucket Name for tfmigrate history files>'
  template_dir: templates/aws # This is used by `scaffold-working-dir` action
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
  s3_bucket_name_plan_file: '<S3 Bucket Name for Terraform Plan File>'
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
  s3_bucket_name_tfmigrate_history: '<S3 Bucket Name for tfmigrate history files>'
  template_dir: templates/github
  runs_on: ubuntu-latest # default is "ubuntu-latest". This is useful to use GitHub Actions Self Hosted Runner for the specific provider
  environment: # default is null
    # https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment
    name: production
    url: https://github.com
  secrets: # GitHub Secrets
  - env_name: FOO # Environment variable name
    secret_name: FOO_STAGING # Secret name

  gcs_bucket_name_plan_file: '<Google Cloud Storage Bucket Name for Terraform Plan File>'
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
