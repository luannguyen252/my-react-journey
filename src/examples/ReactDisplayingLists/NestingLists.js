function App() {
  const people = [
    {
      name: "chris",
      pets: [
        { name: "bella", type: "dog" },
        { name: "cocoa", type: "dog" },
      ],
    },
    {
      name: "nick",
      pets: [
        { name: "hilo", type: "cat" },
        { name: "polly", type: "cat" },
      ],
    },
  ];

  return (
    <div>
      {people.map((person, index) => (
        <div key={index}>
          <h2>{person.name}'s Pets</h2>
          {/_ loop over the pets _/}
          <div>
            {person.pets.map((pet, i) => (
              <p key={i}>
                {pet.type} named {pet.name}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
