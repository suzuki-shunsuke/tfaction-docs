---
sidebar_position: 200
---

# How to add a working directory

* Create S3 Buckets: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket
  * For Terraform Plan files
  * For tfmigrate History files
* Create AWS IAM Roles: https://github.com/suzuki-shunsuke/terraform-aws-tfaction
* Update [tfaction-root.yaml](/docs/config/tfaction-root-yaml) if it is needed
* [Scaffold the working directory](/docs/feature/scaffold-working-dir)

## AWS IAM Role

To access S3 buckets, tfaction uses [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials).
tfaction supports configuring Assume Role per working directory type and build type.

e.g.

```yaml
- working_directory: github/services/
  # ...
  aws_assume_role_arns:
    tfmigrate_plan: arn:aws:iam::000000000000:role/GitHubActionsTerraformPRGitHub
    terraform_plan: arn:aws:iam::000000000000:role/GitHubActionsTerraformPRGitHub
    tfmigrate_apply: arn:aws:iam::000000000000:role/GitHubActionsTerraformMainGitHub
    terraform_apply: arn:aws:iam::000000000000:role/GitHubActionsTerraformMainGitHub
```

* tfmigrate_plan: Assume Role for [tfmigrate-plan](https://github.com/suzuki-shunsuke/tfaction/tree/main/tfmigrate-plan)
* tfmigrate_apply: Assume Role for [tfmigrate-apply](https://github.com/suzuki-shunsuke/tfaction/tree/main/tfmigrate-apply)
* terraform_plan: Assume Role for [terraform-plan](https://github.com/suzuki-shunsuke/tfaction/tree/main/terraform-plan)
* terraform_apply: Assume Role for [terraform-apply](https://github.com/suzuki-shunsuke/tfaction/tree/main/terraform-apply)

We provide a Terraform Module to create these IAM Roles.

https://github.com/suzuki-shunsuke/terraform-aws-tfaction

## Required Permission

### terraform_plan

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:DeleteObject"
            ],
            "Resource": "arn:aws:s3:::<S3 Bucket for Plan File>/*"
        }
    ]
}
```

### terraform_apply

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::<S3 Bucket for Plan File>/*"
        }
    ]
}
```

### tfmigrate_plan

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:DeleteObject"
            ],
            "Resource": "arn:aws:s3:::<S3 Bucket for Plan File>/*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": "arn:aws:s3:::<S3 Bucket for tfmigrate history>/*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": "arn:aws:s3:::<S3 Bucket for tfmigrate history>"
        }
    ]
}
```

### tfmigrate_apply

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::<S3 Bucket for tfmigrate history>/*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": "arn:aws:s3:::<S3 Bucket for tfmigrate history>"
        }
    ]
}
```
