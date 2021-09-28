# STYLES

#### Directory structure

```
./styles
 ├─config/
 ├─resources/
 ├─vendor/
 ├─base.scss
 ├─fonts.scss
 └─storybook.scss
```

- `/styles/resources/` - variables, mixins and functions used in SCSS. All of them are available globally in each component
- `/styles/config/` - variables, mixins and functions used both in SCSS and JS stored as JSON files. All of them are available globally in each component
- `/styles/vendor/` - libraries vendor styles
- `/styles/base.scss` - general styles for the whole application (i.e. `body`, `a` or `html`)
- `/styles/fonts.scss` - font connections
- `/styles/storybook.scss` - Storybook overrides

#### Variables and mixins auto imports
You don't have to directly import variables and mixins into each component's stylesheet. They are all preconfigured in Sass options. Just use it!

#### Media queries

All breakpoints and mixins for media queries are configured in the file `/styles/resources/grid.scss`.
Each breakpoint is a maximum width from 0 to the specified value.
For example, the breakpoint `tablet` would mean all devices up to 1024px.

For example, let's say we want to create a media query for styles on mobile devices:

```scss
.selector {
  // Styles for the desktop

  @include onPhone() {
    // Styles for the phone
  }
}
```

#### Working with url (...)

Since Sass implementations do not support URL rewriting, all resources must have relative paths.

To work around this problem and access the `/public` folder, you can interpolate the `$publicPath` variable in the file path, for example:

```scss
.image {
  background-image: url('#{$publicPath}/assets/images/image.webp');
}
```
