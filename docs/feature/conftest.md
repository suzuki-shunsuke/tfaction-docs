---
sidebar_position: 600
---

# Validate Terraform Plan Result with Conftest

About Conftest, please see https://www.conftest.dev/ .

https://www.openpolicyagent.org/docs/latest/terraform/

tfaction supports validating Terraform Plan Result with Conftest.

If Terraform Plan Result violate your Conftest Policy, the violation is notified as Pull Request Comment.

![image](https://user-images.githubusercontent.com/13323303/150035710-249c4cbd-47fa-46d7-ae0d-28ab4ace1a64.png)

tfaction doesn't provide any Conftest Policy. Please write your Conftest Policy freely.

We recommend writing the document about Conftest Policy per policy.

```
github-comment.yaml
policy/
  github_issue_label_description.rego # Policy
  github_issue_label_description_test.rego # Policy Test
  github_issue_label_description.md # Policy Document
```

![image](https://user-images.githubusercontent.com/13323303/150035773-1702fba7-5058-412f-b41c-f69793237dd7.png)

## Policy directory

tfaction >= v1.1.0

You can change the directory by the setting `conftest_policy_directory` in tfaction-root.yaml.

e.g. tfaction-root.yaml

```yaml
conftest_policy_directory: terraform/policy
```

The default value is "policy".
If `conftest_policy_directory` isn't set and the directory policy doesn't exist, contest is skipped.
If `conftest_policy_directory` is set but the directory doesn't exist, the action fails.
