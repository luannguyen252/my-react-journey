# React Map

> A map is a data collection type where data is stored in the form of pairs. It contains a unique key. The value stored in the map must be mapped to the key. We cannot store a duplicate pair in the map().

```javascript
var numbers = [1, 2, 3, 4, 5];
const doubleValue = numbers.map((number) => {
  return number * 2;
});
console.log(doubleValue);
```

## The map() method used for

1. Traversing the list element

```javascript
import React from "react";

function NameList(props) {
  const myLists = props.myLists;
  const listItems = myLists.map((myList) => <li>{myList}</li>);

  return (
    <div>
      <h2>React Map Example</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

const myLists = ["A", "B", "C", "D", "D"];

export default function App() {
  return <NameList myLists={myLists} />;
}
```

2. Traversing the list element with keys.

```javascript
import React from "react";

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <ListItem key={number.toString()} value={number} />
  ));

  return (
    <div>
      <h2>React Map Example</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

const numbers = [1, 2, 3, 4, 5];

export default function App() {
  return <NumberList numbers={numbers} />;
}
```
