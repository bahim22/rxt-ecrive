
# Documentation for creating Components

---
title: 'Component Information'

author: 'Hima 'Dionysus' Balde'

date: 2021/12/29

description: React App w/ custom WP configs and CSS

tag: web dev, jsx, tsx, mdx

---

## General React App Dir

>Directory Structure

- `**Public**`
- `index.html` _gateway_ of the react app that's being loaded via _root id_ which is where the app will run
- `**Src**`
  - `index.js` _imports, renders_ , it's the projects JS **entry-point**
  - `App.js` contains root app component, all project compo and pushed to _root div_
  - `index.css`
  - `app.css`
  - Pages Dir
  - Posts Dir
  - Styles Dir

### Specific Project structure for this App

my-app/

  > README.md
  > node_modules/
  > package.json

  > `public/`
    - **index.html**_page template_
    - favicon.ico

  > `src/`

    - App.css
    - App.js
    - App.test.js
    - index.css
    - **index.js**_js entry point_
    - logo.svg

### More info for main files

1. Put all JS and CSS files in src
2.`index.html`

**Contains**

- what's visibile to your users
- Only files inside the `public` folder can be referenced from the HTML.
- You can add webfonts, meta tags, or analytics to this file.
- The build step will place the bundled scripts into the `< body>` tag where react hooks into the root div
- The build script for bundler

```html
  <script src="./bundle.js "></script>
```

#### Component Structure and Mapping

| ------------------------------------------------------------------------------------------ |

1. Each File contains a 'child' component that is then exported
2. The parent component imports the 'child' functions and creates a piece of UI
3. The Layout file then combines the parent components into a meaningful design
4. The Layout can have props and children to change state depending on the app's purpose

| ----------------------------------------------------------------------------------------- |

### TAILWIND info

```bash
**npm install** -tailwindcss@latest- -@tailwindcss/typography- -postcss@latest- -autoprefixer@latest-
**npx tailwindcss init -p**
//add this to tailwind.config.js
plugins: [
require('@tailwindcss/typography')
]
```

> `add` in to the styles/globals.css

@tailwind base;
@tailwind components;
@tailwind utilities;

### TailwindCss setup method #2

- create .babelrc file and add presets / plugins that were installed
- create webpack.config.js file
- installs include bootstrap, tailwind, lodash

```bash
npm install --save-dev webpack webpack-cli @babel/preset-react babel-loader @babel/core @babel/preset-env @hot-loader/react-dom webpack-dev-server css-loader style-loader html-webpack-plugin postcss-loader autoprefixer jest babel-jest css-loader style-loader file-loader url-loader lodash-webpack-plugin prettier
npm install react react-dom react-hot-loader bootstrap jquery popper.js tailwindcss lodash
```

```js 
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
}
```

## CSS DESIGN

> `CSS-loader`

1. _allows use of import Styles from './styles.css'_ or
2. _import { style1, style2 } from './styles.css'_

```html
<div className={Style.style1}> 1. Hello World</div>
```

```html
- <div className={style1}> 2. Hello World </div>
```

- _or (3) with the destructuring syntax_
  - can write css rules via: .home-button {...} ex.

```jsx
> import { homeButton } from './styles.css'
```

> run `npm install` --save package-name or `yarn add` package-name to save a lib as a dep (as opposed to a devdep)

- use default imports/exports if the module has 1 component
- use named exports wj/ utility mods exporting multiple func
- can only have one default exp. but several named exp.

___

## WEBPACK config file

```bash
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install webpack webpack-cli --save-dev
```

### Package Descriptions

| Packages Using in this Project & **Description** |
| `react` `react-dom` `prop-types` `react-router-dom` |

> `Babel`

- @babel/core  _main dep for Babel_ --transpiler--
- @babel/preset-env lets you code es'15-'17 & Babel auto detect/transpile
- @babel/preset-react (ID that it's a react app to convert jsx to JS)
- ~@babel/plugin-proposal-class-properties (Use class properties)~
- @babel/plugin-syntax-dynamic-import, _dynamic import/exports_

> `CSS`

- auto-prefixer, post-css-preset-env _css-modules_ _css-loaders_
- react-bootstrap, module.css

- style-loader— Adds CSS to the DOM by injecting a < style > tag

> `WebPack`

- webpack _Module bundler_ to convert code into prod ready site
- html-webpack-plugin _pre-gen basic html doc or make your own_
- webpack-nano _Webpack CLI_
- webpack-plugin-serve _dev server via local_
