# React Code Splitting

```javascript
// App.js
import { add } from "./math.js";

console.log(add(16, 26)); // 42

// math.js
export function add(a, b) {
  return a + b;
}
```

**Bundle file as like below:**

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(16, 26)); // 42
```

> Code splitting uses **React.lazy** and **Suspense** tool/library, which helps you to load a dependency lazily and only load it when needed by the user.

The code splitting improves:

1. The performance of the app
2. The impact on memory
3. The downloaded Kilobytes (or Megabytes) size

## React.lazy

> The best way for code splitting into the app is through the dynamic **import()** syntax. The **React.lazy** function allows us to render a dynamic import as a regular component.

**Before:**

```javascript
import ExampleComponent from "./ExampleComponent";

function MyComponent() {
  return (
    <div>
      <ExampleComponent />
    </div>
  );
}
```

**After:**

```javascript
const ExampleComponent = React.lazy(() => import("./ExampleComponent"));

function MyComponent() {
  return (
    <div>
      <ExampleComponent />
    </div>
  );
}
```

## Suspense

> If the module which contains the ExampleComponent is not yet loaded by the function component(MyComponent), then we need to show some **fallback** content while we are waiting for it to load. We can do this using the suspense component. In other words, the suspense component is responsible for handling the output when the lazy component is fetched and rendered.

```javascript
const ExampleComponent = React.lazy(() => import("./ ExampleComponent"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ExampleComponent />
      </Suspense>
    </div>
  );
}
```

> The **fallback** prop accepts the React elements which you want to render while waiting for the component to load. We can combine multiple lazy components with a single Suspense component.

```javascript
const ExampleComponent = React.lazy(() => import("./ ExampleComponent"));
const ExamComponent = React.lazy(() => import("./ ExamComponent"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <ExampleComponent />
          <ExamComponent />
        </section>
      </Suspense>
    </div>
  );
}
```

## Error boundaries

> If any module fails to load, for example, due to network failure, we will get an error. We can handle these errors with Error Boundaries. Once we have created the Error Boundary, we can use it anywhere above our lazy components to display an error state.

```javascript
import MyErrorBoundary from "./MyErrorBoundary";

const ExampleComponent = React.lazy(() => import("./ ExampleComponent"));
const ExamComponent = React.lazy(() => import("./ ExamComponent"));

const MyComponent = () => (
  <div>
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <ExampleComponent />
          <ExamComponent />
        </section>
      </Suspense>
    </MyErrorBoundary>
  </div>
);
```

## Route-based code splitting

> The route is the best place to start the code splitting. Route based code splitting is essential during the page transitions on the web, which takes some amount of time to load. Here is an example of how to setup route-based code splitting into the app using React Router with **React.lazy**.

```javascript
import React, { Suspense, lazy } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const Contact = lazy(() => import("./routes/Contact"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
```

## Named Export

> **React.lazy** supports default exports only. If any module you want to import using named exports, you need to create an intermediate module that re-exports it as the default.

```javascript
// ExampleComponents.js
export const MyFirstComponent = /* ... */;
export const MySecondComponent = /* ... */;

// MyFirstComponent.js
export { MyFirstComponent as default } from "./ExampleComponents.js";

// MyApp.js
import React, { lazy } from 'react';
const MyFirstComponent = lazy(() => import("./MyFirstComponent.js"));
```
