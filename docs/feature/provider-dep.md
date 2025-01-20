---
sidebar_position: 1210
---

# Check provider version constraint for troubleshooting

[#2256](https://github.com/suzuki-shunsuke/tfaction/pulls/2256) [v1.15.2](https://github.com/suzuki-shunsuke/tfaction/releases/tag/v1.15.2)

Sometimes the output of `terraform providers` (or `tofu providers`) is useful to look into provider's version constraint.

In that case, you can see it in the log of `setup` action.

e.g.

```
Run "$TF" providers

Providers required by configuration:
.
└── provider[registry.terraform.io/hashicorp/null] 3.2.3
```
