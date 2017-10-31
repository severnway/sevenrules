# sevenrules

Git commit message validator.

Validates the format a git commit message against [The seven rules of a great Git commit message](https://chris.beams.io/posts/git-commit/#seven-rules):

1. **Separate subject from body with a blank line**
1. **Limit the subject line to 72 characters**
1. **Capitalize the subject line**
1. **Do not end the subject line with a period**
1. Use the imperative mood in the subject line
1. **Wrap the body at 72 characters**
1. Use the body to explain what and why vs. how

The bolded rules 1-4 and 6 are checked. The remaining 2 are not detectable programmatically. The title of [rule 2](https://chris.beams.io/posts/git-commit/#limit-50) says 50 characters, but the body clarifies 72 is the hard limit.

Provides a [husky](https://github.com/typicode/husky) hook for easy use.

Inspired by the [quality Bash implementation](https://gitlab.com/silent.correspondent/commit-msg/blob/master/commit-msg.sh) by Silent Correspondent.

## Usage

Install husky and the validator:

```
npm install husky --save-dev
npm install sevenrules --save-dev
```

Hook the validator to `commitmsg` in your `package.json`:

```
{
  "scripts": {
    "commitmsg": "sevenrules"
  }
}
```

Enjoy your clean commit log!

## Conduct

Respect agency. Follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

Anybody caught using this work without our permission, will be mighty good friends of ourn, cause we don't give a dern. Study it. Hack it. Publish it, even without naming the source. We made it, that's all we wanted to do.

Released under [the Severn license](LICENSE), an MIT derivative without the notice requirement. Contributor signatures available in the [contributors](https://github.com/severndb/contributors) repository.

NO rights reserved.