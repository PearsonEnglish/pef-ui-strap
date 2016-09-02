## 0.2.0 (2016-09-02)
_New features and UX consistency._
### Features
* Import `Open Sans` font from `css/scss` file
* Add 4 new colors: `$pe-brand-color-green-tealish`, `$pe-brand-color-blue-dark`, `$pe-brand-color-blue-grey-light` and `$pe-brand-color-blue-grey`
* Add `badge-close` class
* Add `btn-secondary` and `btn-left` class
* Add `popover` class
* Upgrade  `autoprefixer`, `bootstrap-sass` and `font-awesome`

## BREAKING CHANGES
* Increase `$padding-base-horizontal` from `12px` to `18px`
* Remove `Playfair Display` font - `h1-h6` are `sans-serif` now
* Set `<strong>` font-weight to `semi-bold`
* Set `btn-primary` font-weight to `bold`
* Set `modal-title` font-weight to `normal`
* Class `btn-lg` is bootstrap default
* Different `badge` size
* Set `$modal-md` to `460px`
* Change `modal` padding
* Set `$text-muted` color to `$pe-brand-color-gray-graphite`

------

## 0.1.2 (2016-07-01)
_Notes for contributors._
### Features
* Add notes to README.md
### Bugfix
* Remove unnecessary config from sass-lint

------

## 0.1.1 (2016-05-23)
_Markdown files fix._
### Bugfix
* Fix `.md` files

------

## 0.1.0 (2016-05-23)
_Initial github release._
### Features
* Proper README.md

------

## 0.0.4 (2016-05-17)
_Pearson guidelines color pallete._
### Features
* Color pallete taken from [Pearson guidelines](https://brand.pearson.com/brand-toolkit/assets-templates.html)
* `badge`, `button` and `table` moved into `atoms` part
* `disabled` moved into `quarks` part

------

## 0.0.3 (2016-05-13)
_Add sass-lint_
### Features
* Use `grunt check` to check SASS codestyle.
* Use `pe-brand-color-[some_color]-bg` class to set proprer element background (e.g. in SourceJS spec)

### Bugfix
* Fix `table-rounded` class

------

## 0.0.2 (2016-05-12)
_Add grunt task and add Font Awesome._
### Features
* Use `grunt build` to build `dist` folder.
    * build css
    * build min.css
    * add git hook warning

### Bugfix
* Set proper pagination border radius for `pagination-sm` and `pagination-lg`

------

## 0.0.1 (2016-05-09)
_Very first, initial release._
### Features
* Version `0.0.1` was released with the following assets:
    * favicon.ico
    * logo_pearson.svg
