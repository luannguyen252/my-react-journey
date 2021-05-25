# React Keys

```javascript
const stringLists = ["HTML", "CSS", "JavaScript", "React", "React Native"];

const updatedLists = stringLists.map((strList) => {
  <li key={strList.id}>{strList}</li>;
});
```

If there are no stable IDs for rendered items, you can assign the item index as a key to the lists. It can be shown in the below example.

```javascript
const stringLists = ["HTML", "CSS", "JavaScript", "React", "React Native"];

const updatedLists = stringLists.map((strList, index) => {
  <li key={index}>{strList}</li>;
});
```

## Using Keys with component

**Example: Incorrect Key usage**

```javascript
import React from "react";

function ListItem(props) {
  const item = props.item;

  return (
    // Wrong! No need to specify the key here.
    <li key={item.toString()}>{item}</li>
  );
}

function NameList(props) {
  const myLists = props.myLists;
  const listItems = myLists.map((strLists) => (
    // The key should have been specified here.
    <ListItem item={strLists} />
  ));

  return (
    <div>
      <h2>Incorrect Key Usage Example</h2>
      <ol>{listItems}</ol>
    </div>
  );
}

const myLists = ["HTML", "CSS", "JavaScript", "React", "React Native"];

export default function App() {
  return <NameList myLists={myLists} />;
}
```

**Example: Correct Key usage**

```javascript
import React from "react";

function ListItem(props) {
  const item = props.item;

  return (
    // No need to specify the key here.
    <li> {item} </li>
  );
}

function NameList(props) {
  const myLists = props.myLists;
  const listItems = myLists.map((strLists) => (
    // The key should have been specified here.
    <ListItem key={myLists.toString()} item={strLists} />
  ));

  return (
    <div>
      <h2>Correct Key Usage Example</h2>
      <ol>{listItems}</ol>
    </div>
  );
}

const myLists = ["HTML", "CSS", "JavaScript", "React", "React Native"];

export default function App() {
  return <NameList myLists={myLists} />;
}
```

## Uniqueness of Keys among Siblings

```javascript
import React from "react";

function MenuBlog(props) {
  const titlebar = (
    <ol>
      {props.data.map((show) => (
        <li key={show.id}>{show.title}</li>
      ))}
    </ol>
  );

  const content = props.data.map((show) => (
    <div key={show.id}>
      <h3>
        {show.title}: {show.content}
      </h3>
    </div>
  ));

  return (
    <div>
      {titlebar}
      <hr />
      {content}
    </div>
  );
}

const data = [
  { id: 1, title: "First", content: "Welcome to JavaTpoint!!" },
  { id: 2, title: "Second", content: "It is the best ReactJS Tutorial!!" },
  {
    id: 3,
    title: "Third",
    content: "Here, you can learn all the ReactJS topics!!",
  },
];

export default function App() {
  return <MenuBlog data={data} />;
}
```
