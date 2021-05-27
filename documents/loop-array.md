# Loop Array in React JS - React Foreach Loop Example

## Example 1

```javascript
import React from "react";

export default function App() {
  const myArray = ["HTML", "CSS", "JavaScript", "React", "React Native"];

  return (
    <div className="container">
      <h1>Example of React Map Loop</h1>

      {myArray.map((name) => (
        <li>{name}</li>
      ))}
    </div>
  );
}
```

## Example 2

```javascript
import React from "react";

export default function App() {
  const students = [
    {
      id: 1,
      name: "Jack",
      email: "jack@gmail.com",
    },
    {
      id: 2,
      name: "Mary",
      email: "mary@gmail.com",
    },
    {
      id: 3,
      name: "John",
      email: "john@gmail.com",
    },
  ];

  return (
    <div className="container">
      <h1>Example of React Map Loop</h1>

      <table className="table table-bordered">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>

        {students.map((student, index) => (
          <tr data-index={index}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
```
