---
sidebar_position: 400
---

# gsutil authentication

If you configure `gcs_bucket_name_plan_file`, tfaction stores Terraform Plan files at Google Cloud Storage with [gsutil](https://cloud.google.com/storage/docs/gsutil).

From Google Cloud SDK 390.0.0, gsutil supports Workload Identity Federation.

From tfaction v0.5.16, tfaction installs the latest Google Cloud SDK using [google-github-actions/setup-gcloud](https://github.com/google-github-actions/setup-gcloud).
