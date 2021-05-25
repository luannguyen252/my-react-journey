function App() {
  const person = {
    name: "Chris",
    twitter: "chrisoncode",
    bio: "The dude at scotch.io",
  };

  return (
    <div>
      {Object.keys(person).map((key) => (
        <p>{person[key]}</p>
      ))}
    </div>
  );
}

// Use the key as a label
function App() {
  const person = {
    name: "Chris",
    twitter: "chrisoncode",
    bio: "The dude at scotch.io",
  };

  return (
    <div>
      {Object.keys(person).map((key) => (
        <p>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
          {person[key]}
        </p>
      ))}
    </div>
  );
}
