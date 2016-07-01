# PEF UI Strap

PEF UI Strap is a project that provides set of styles definitions for Pearson applications.
##### The project use:
* [Bootstrap Sass 3.3](https://github.com/twbs/bootstrap-sass)
* [Font Awesome 4.6](http://fontawesome.io/)

### Build
To build styles from `scss` files use `grunt build`. It will create `dist` folder with:
* css (with source map and minification)
* scss files
* assets files (images and fonts)

Write CSS rules without vendor prefixes - [autoprefixer](https://github.com/postcss/autoprefixer) is used.

To check sass codestyle with `sass-lint` use `grunt check`.

### Examples
##### With scss:

```
// Import PEF UI Strap patterns
@import '../../node_modules/pef-ui-strap/dist/scss/strap';

// Import other patterns for your project
@import 'patterns/somePatterns';
[...]
```

##### Override PEF UI Strap variables:

```
// Override PEF UI Strap variables (e.g. set `$pe-body-bg: #ffff00;`)
@import 'overrides/overrides';

// Import PEF UI Strap patterns
@import '../../node_modules/pef-ui-strap/dist/scss/strap';

// Import other patterns for your project
@import 'patterns/somePatterns';
[...]
```

You can also use `css` files. Remember to copy `assets` into your application.

### Contributing
##### Please follow these rules:
* all changes should be done in `src` folder - use `grunt build` to modify `dist` folder
* all changes and new features should be accepted by design team
* try to keep backward compatibility
* update CHANGELOG.md
* avoid sass-lint warnings/errors
* use semantic versioning
