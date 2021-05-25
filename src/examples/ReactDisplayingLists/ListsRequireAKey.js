// Using the key prop
<div>
  {people.map((person) => (
    <p key={person.name}>{person.name}</p>
  ))}
</div>;

// Using an id as the key
function App() {
  const people = [
    { id: 1, name: "chris" },
    { id: 2, name: "nick" },
  ];

  return (
    <div>
      {people.map((person) => (
        <p key={person.id}>{person.name}</p>
      ))}
    </div>
  );
}

// Using the index as the key
function App() {
  const people = [{ name: "chris" }, { name: "nick" }];

  return (
    <div>
      {people.map((person, index) => (
        <p key={index}>{person.name}</p>
      ))}
    </div>
  );
}
