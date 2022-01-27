
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

C. `Prettier`

D. `WebPack`

```bash
npm install --save-dev webpack webpack-cli @babel/preset-react babel-loader @babel/core @babel/preset-env @hot-loader/react-dom webpack-dev-server css-loader style-loader html-webpack-plugin postcss-loader autoprefixer jest babel-jest css-loader style-loader file-loader url-loader lodash-webpack-plugin prettier

npm install react react-dom react-hot-loader bootstrap jquery popper.js tailwindcss lodash
```

```bash
  npm install webpack webpack-cli webpack-dev-server --save-dev
  npm install webpack webpack-cli --save-dev
```

```js
const path = require('path')
module.exports = {
entry: './src/app.js',
output: {
  path: path.join(_name, 'public'),
  filename: 'bundle.js',
},}
```

- webpack _Module bundler_ to convert code into prod ready site
- //\\ html-webpack-plugin _pre-gen basic html doc or make your own_
- //\\ webpack-nano _Webpack CLI_
- webpack-plugin-server _dev server via local_
- npx webpack --config webpack.config.js
- "clean": "rm dist/bundle.js",

## Testing

1. `Jest`
   1. "test": "jest",
2. `Cypress`
   1. "cypress:open": "cypress open

> devDep
"jest": "^27.4.7",
"babel-jest": "^27.4.6",
"cypress": "^9.3.1"
