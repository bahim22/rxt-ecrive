
# TypeScript Notes

`TSX` _devDep_ (package.json)

```json
"@types/react": "^17.0.38",
"@types/react-dom": "^17.0.11",
"typescript": "^4.5.5",
"ts-loader": "^9.2.6"
```

```tsx //App.tsx
import * as React from 'react';
interface Props {
   name:
    string
}
export default class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-4xl text-white bg-black">
          Hello {name} </h1>
      </>
    );}}
//index.tsx
import * as React from 'react';
import * as ReactDOM from "react-dom";
import App from './App'; import "./styles.css";

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);

//ts.config.json
{
"compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "strict": true,
    "noImplicitReturns": true,
    "noImplicitAny": true,
    "module": "es6",
    "moduleResolution": "node",
    "target": "es5",
    "allowJs": true,
    "jsx": "react",
},
"include": [
    "./src/**/*"
]}
{
  "compilerOptions": {
    "target": "ES2015",       /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    // "lib": ["es2015"],        /* Specify library files to be included in the compilation. */
    "allowJs": true,          /* Allow javascript files to be compiled. */
    "checkJs": true,          /* Report errors in .js files. */
    "noEmit": true,           /* Do not emit outputs. */
    "esModuleInterop": true,   /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */

    /* Strict Type-Checking Options */
    // "strict": true,                        /* Enable all strict type-checking options. */
    "noImplicitAny": false,                /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    "alwaysStrict": false,                 /* Parse in strict mode and emit "use strict" for each source file. */
    "resolveJsonModule": true
  },
  "include": ["lib"],
}
```

> Add code below to webpack config

```js
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
```

devDep
"file-loader": "^6.2.0", //svg
"url-loader": "^4.1.1" //png
