function App() {
  const people = [{ name: "chris" }, { name: "nick" }];

  return (
    <div>
      {people.map((person) => (
        <p>{person.name}</p>
      ))}
    </div>
  );
}
