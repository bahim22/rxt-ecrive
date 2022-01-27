
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
