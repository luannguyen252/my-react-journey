# React Lists

```javascript
var numbers = [1, 2, 3, 4, 5];

const multiplyNums = numbers.map((number) => {
  return number * 5;
});

console.log(multiplyNums); // [5, 10, 15, 20, 25]
```

## React Lists Example

```javascript
const myList = ["HTML", "CSS", "JavaScript", "React", "React Native"];

const listItems = myList.map((myList) => {
  return <li>{myList}</li>;
});

export default function App() {
  return <ul>{listItems}</ul>;
}
```

## Rendering Lists inside components

```javascript
const myLists = ["HTML", "CSS", "JavaScript", "React", "React Native"];

function NameList(props) {
  const myLists = props.myLists;
  const listItems = myLists.map((myList) => <li>{myList}</li>);

  return (
    <div>
      <h2>Rendering Lists inside component</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

export default function App() {
  return <NameList myLists={myLists} />;
}
```
