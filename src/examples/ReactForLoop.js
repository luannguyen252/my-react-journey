import React from "react";

const names = ["James", "Paul", "John", "George", "Ringo"];

export default function App() {
  return (
    <ul>
      {names.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}
