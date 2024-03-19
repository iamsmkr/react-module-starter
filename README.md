# react-module-starter
Starter kit to create a react module.

## Build module
This generates files under `dist/`
```
npm run build
npm link
```

## Use module in React App
```
npx create-react-app myapp
cd myapp
npm link react-module-starter
```
```javascript
cat src/App.js
import MyComponent from 'react-module-starter';

function App() {
  return (
    <div className="App">
      <MyComponent></MyComponent>
    </div>
  );
}

export default App;

```
