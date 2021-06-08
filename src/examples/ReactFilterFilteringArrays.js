import React from "react";

const people = [
  {
    name: "James",
    age: 31,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "Paul",
    age: 65,
  },
  {
    name: "Ringo",
    age: 49,
  },
  {
    name: "George",
    age: 34,
  },
];

export default function App() {
  return (
    <div>
      <ul>
        {people
          .filter((person) => person.age < 60)
          .map((filteredPerson) => (
            <li>{filteredPerson.name}</li>
          ))}
      </ul>
      <ul>
        {names
          .filter((name) => name.includes("J"))
          .map((filteredName) => (
            <li>{filteredName}</li>
          ))}
      </ul>
    </div>
  );
}
