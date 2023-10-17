---
sidebar_position: 200
---

# tfaction.yaml

* [JSON Schema](https://github.com/suzuki-shunsuke/tfaction/blob/main/schema/tfaction.json)
* [Generated document from JSON Schema](https://suzuki-shunsuke.github.io/tfaction/config/tfaction.html)

Please add `tfaction.yaml` in each working directory for tfaction to detect working directories.

You can change the file name by the configuration `working_directory_file`.

All fields are optional.

```yaml
{}
```

You can override the configuration of `tfaction-root.yaml` by `tfaction.yaml`.

```yaml
aws_region:
s3_bucket_name_tfmigrate_history:
template_dir:
gcs_bucket_name_tfmigrate_history:
aws_assume_role_arn:
gcp_service_account:
gcp_workload_identity_provider:
secrets:
terraform_plan_config:
  aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_terraform_plan
tfmigrate_plan_config:
  aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_tfmigrate_plan
terraform_apply_config:
  aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_terraform_apply
tfmigrate_apply_config:
  aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_tfmigrate_apply
drift_detection:
  enabled: false
```
