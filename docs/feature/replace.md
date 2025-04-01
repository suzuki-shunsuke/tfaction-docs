---
sidebar_position: 650
---

# Map working directories and targets using regular expressions

tfaction >= v1.9.0 [#1902](https://github.com/suzuki-shunsuke/tfaction/pull/1902) [#1879](https://github.com/suzuki-shunsuke/tfaction/issues/1879)

You can map `working directories` with `targets` using regular expressions.

You can configure regular expressions in `tfaction-root.yaml`.
This setting is optional.

e.g. tfaction-root.yaml:

```yaml
replace:
  patterns:
    # Replace /services/ to / : e.g. github/services/foo => github/foo
    - regexp: /services/
      replace: /
    # Replace /production$ to /prod
    - regexp: /production$
      replace: /prod
    # Remove the prefix `google-` : e.g. foo/google-users/production => foo/users/prod
    - regexp: /google-(.*)/
      replace: "/$1/"
      flags: g
```

You can define multiple patterns.
All patterns are applied to each working directory, meaning multiple patterns can be applied.

This feature uses [Regexp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) and [string.prototype.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

```js
target = target.replace(new RegExp(pattern.regexp, pattern.flags), pattern.replace);
```

So about the syntax of `regexp`, [flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), and `replace`, please see those documents.
