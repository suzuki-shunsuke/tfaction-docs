---
sidebar_position: 900
---

# Linters

tfaction runs some linters in [test](/actions/test) Action.
If you don't want to run these linters, please stop using [test](/actions/test) Action.

* terraform validate
* [suzuki-shunsuke/github-action-tflint](https://github.com/suzuki-shunsuke/github-action-tflint)
* [suzuki-shunsuke/github-action-tfsec](https://github.com/suzuki-shunsuke/github-action-tfsec)

## tflint

tfaction runs [tflint](https://github.com/terraform-linters/tflint) and notifies the result.

![image](https://user-images.githubusercontent.com/13323303/153742908-2512f73a-1505-4c0c-9284-b6deb8983c2f.png)

--

![image](https://user-images.githubusercontent.com/13323303/153742833-403ea6c5-a780-4d2a-a30c-3a481c0971b1.png)

## tfsec

tfaction runs [tfsec](https://github.com/aquasecurity/tfsec) and notifies the result.

![image](https://user-images.githubusercontent.com/13323303/153747798-0e6ac3d4-e335-4c20-8e2a-1f5b43205ff3.png)

--

![mage](https://user-images.githubusercontent.com/13323303/153747838-ccbd4fba-6654-4589-84c8-7ae833644426.png)
