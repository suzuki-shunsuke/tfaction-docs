---
sidebar_position: 400
---

# gsutil authentication

If you configure `gcs_bucket_name_plan_file`, tfaction stores Terraform Plan files at Google Cloud Storage with [gsutil](https://cloud.google.com/storage/docs/gsutil).
gsutil doesn't support Workload Identity Federation yet, so you have to use traditional service account key authentication.

* https://cloud.google.com/storage/docs/authentication
* https://github.com/google-github-actions/auth#authenticating-via-workload-identity-federation

> The bq and gsutil tools do no currently support Workload Identity Federation! You will need to use traditional service account key authentication for now.
