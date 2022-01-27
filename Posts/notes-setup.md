
# Dev Notes

- .git
- VS Code
- Dist
- Public
  - **public/index.html**_page template_
  - webfonts, meta tags, or analytics
  - The build step will place the bundled scripts into the `< body>` tag where react hooks into the root div
  - The build script for bundler [< script src="./bundle.js"> </ rx>]
- Src
  - Components
  - Compos
  - **src/index.js**_js entry point_
- config files

## TAILWIND info

```bash
**npm install** -tailwindcss@latest- -@tailwindcss/typography- -postcss@latest- -autoprefixer@latest-
**npx tailwindcss init -p**
```

  "tailwindcss": "^3.0.7"
  "@headlessui/react": "^1.4.3"
  "@heroicons/react": "^1.0.5"

`tailwind.config.js`

```js
plugins: [
require('@tailwindcss/typography')
]
```

`postcss.config.js`

```js
module.exports = {
plugins: {
  tailwindcss: {},
  autoprefixer: {},
}
}
```

- add tailwind to css file

@tailwind base;
@tailwind components;
@tailwind utilities;

A. `CSS`

- auto-prefixer, post-css-preset-env _css-modules_ _css-loaders_
- style-loader— Adds CSS to the DOM by injecting a < style > tag

`CSS-loader`

1. _allows use of import Styles from './styles.css'_ or
2. _import { style1, style2 } from './styles.css'_

```jsx
<div className="{Style.style1}">1. Hello World</div>
<div className="{style1}">2. Hello World</div>
import { homeButton } from './styles.css'
```

- Use destructuring syntax
- Write css rules via: .home-button {...} ex.
- run `npm install` --save pack... for Dep
- use default imports/exports if the module has 1 component
- use named exports w/ utility mods exporting multiple func

## CSS Options: Bootstrap ||  MUI

- Add below imports to App.tsx if using bootstrap (also imp styles.css to index and add custom attr.)
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

`Bootstrap` _Dep_
"bootstrap": "^5.1.3",
"jquery": "^3.6.0",
"popper.js": "^1.16.1"

- For MUI: import the specific compo you use then use as a jsx div (Ex.)

```tsx
import Button from '@material-ui/core/Button';
<Button variant="contained">this is a material UI button</Button>
```

`MUI` _Dep_
"@material-ui/core": "^4.12.3",
"fontsource-roboto": "^4.0.0",
"@material-ui/icons": "^4.11.2"

### Package devDep

A. `Babel`

- @babel/core _main dep for Babel_ --transpiler--
- @babel/preset-env lets you code es'15-'17 & Babel auto detect/transpile
- @babel/preset-react (ID that it's a react app to convert jsx to JS)
- @babel/plugin-proposal-class-properties (Use class properties)
- @babel/plugin-syntax-dynamic-import, _dynamic import/exports_
- create .babelrc file and add presets / plugins that were installed

B. `Eslint`
package.json scripts (need to fix this test)
"test:lint-rules": "eslint index.js --config test-config/.eslintrc.js --format json"
// Optional: Can remove eslint if adding TypeScript and TS devDep.

C. `Prettier`

## Testing

1. `Jest`
   1. "test": "jest"
      1. npm test //run unit tests
2. `Cypress`
   1. "cypress:open": "cypress open"
      1. npm cypress:open

> _devDep_
"jest": "^27.4.7",
"babel-jest": "^27.4.6",
"cypress": "^9.3.1
