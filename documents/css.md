# React CSS

- CSS in React is used to style the React App or Component.

- The **style** attribute is the most used attribute for styling in React applications, which adds dynamically-computed styles at render time.

- It accepts a JavaScript object in **camelCased** properties rather than a CSS string.

- There are many ways available to add styling to your React App or Component with CSS.

**Four ways to style React Components:**

1. Inline Styling
2. CSS Stylesheet
3. CSS Module
4. Styled Components

## Inline Styling

```javascript
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "Green" }}>Hello JavaTpoint!</h1>
        <p>Here, you can find all CS tutorials.</p>
      </div>
    );
  }
}
```

## camelCase Property Name

```javascript
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "Red" }}>Hello JavaTpoint!</h1>
        <p style={{ backgroundColor: "lightgreen" }}>
          Here, you can find all CS tutorials.
        </p>
      </div>
    );
  }
}
```

## Using JavaScript Object

```javascript
import React, { Component } from "react";

export default class App extends Component {
  render() {
    const mystyle = {
      color: "Green",
      backgroundColor: "lightBlue",
      padding: "10px",
      fontFamily: "Arial",
    };

    return (
      <div>
        <h1 style={mystyle}>Hello JavaTpoint</h1>
        <p>Here, you can find all CS tutorials.</p>
      </div>
    );
  }
}
```

## CSS Stylesheet

```javascript
// App.js
import React, { Component } from "react";
import "./index.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello JavaTpoint</h1>
        <p>Here, you can find all CS tutorials.</p>
      </div>
    );
  }
}
```

```css
/* index.css */
body {
  background-color: #008080;
  color: yellow;
  padding: 40px;
  font-family: Arial;
  text-align: center;
}
```

## CSS Module

- CSS Module is another way of adding styles to your application.
- It is a **CSS file** where all class names and **animation** names are scoped locally by default.
- It is available only for the component which imports it, means any styling you add can never be applied to other components without your permission, and you never need to worry about name conflicts.
- You can create CSS Module with the **.module.css** extension like a **myStyles.module.css** name.

```javascript
// App.js
import React from "react";
import styles from "./myStyles.module.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.mystyle}>Hello JavaTpoint</h1>
        <p className={styles.parastyle}>It provides great CS tutorials.</p>
      </div>
    );
  }
}
```

```css
/* myStyles.module.css */
.mystyle {
  background-color: #cdc0b0;
  color: Red;
  padding: 10px;
  font-family: Arial;
  text-align: center;
}

.parastyle {
  color: Green;
  font-family: Arial;
  font-size: 35px;
  text-align: center;
}
```

## Styled Components

- Styled-components is a **library** for React.
- It uses enhance CSS for styling React component systems in your application, which is written with a mixture of JavaScript and CSS.

**The styled-components provides:**

1. Automatic critical CSS
2. No class name bugs
3. Easier deletion of CSS
4. Simple dynamic styling
5. Painless maintenance

**Install:**

```bash
npm install styled-components
```

```javascript
// App.js
import React from "react";
import styled from "styled-components";

export default class App extends Component {
  render() {
    const Div: any = styled.div`
      margin: 20px;
      border: 5px dashed green;
      &:hover {
        background-color: ${(props: any) => props.hoverColor};
      }
    `;

    const Title = styled.h1`
      font-family: Arial;
      font-size: 35px;
      text-align: center;
      color: palevioletred;
    `;
    const Paragraph = styled.p`
      font-size: 25px;
      text-align: center;
      background-color: lightgreen;
    `;

    return (
      <div>
        <Title>Styled Components Example</Title>
        <p></p>
        <Div hoverColor="Orange">
          <Paragraph>Hello JavaTpoint!!</Paragraph>
        </Div>
      </div>
    );
  }
}
```
