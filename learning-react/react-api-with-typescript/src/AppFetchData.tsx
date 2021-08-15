import { useState, useEffect } from "react";
import axios from "axios";
import { MaleIcon, FemaleIcon } from "./assets";
import { People } from "./utils/types";

const MALE_COLOR = "#2563EB";
const FEMALE_COLOR = "#DB2777";
const FETCH_COUNT = 5;

const fetchData = () => {
  return axios
    .get(`https://randomuser.me/api/?results=${FETCH_COUNT}`)
    .then((res) => {
      const { results } = res.data;
      console.log(results);
      return results;
    })
    .catch((err) => {
      console.error(err);
    });
};

export default function AppFetchData() {
  const [people, setPeople] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defence: "",
    type: "",
  });

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        console.log(response);
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defence: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonChosen(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData().then((apiPeople) => {
      setPeople(apiPeople);
    });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <h3 className="label">Search Data from API</h3>
          <div className="field">
            <label htmlFor="search">Pokemon name or number</label>
            <input
              type="text"
              placeholder="Enter pokemon name or number"
              className="input"
              id="search"
              onChange={(event) => {
                setPokemonName(event.target.value);
              }}
              autoFocus
            />
            <button className="button" onClick={searchPokemon}>
              Search Pokemon
            </button>
          </div>
          <div className="display-section">
            {!pokemonChosen ? (
              <h1>No Data</h1>
            ) : (
              <>
                <h3>Name or number: {pokemon.name}</h3>
                <div className="display-section__content">
                  <img src={pokemon.img} alt={pokemon.name} />
                  <div className="display-section__description">
                    <p>
                      Species: <b>{pokemon.species}</b>
                    </p>
                    <p>
                      Type: <b>{pokemon.type}</b>
                    </p>
                    <p>
                      Attack: <b>{pokemon.hp}</b>
                    </p>
                    <p>
                      Defence: <b>{pokemon.hp}</b>
                    </p>
                    <p>
                      HP: <b>{pokemon.hp}</b>
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-md-8">
          <h3 className="label">Fetch Data from API</h3>
          <ul>
            {people.map((person: People, personIdx) => (
              <li key={personIdx} className="list">
                <img
                  className="list-avatar"
                  src={person.picture.large}
                  alt={person.name.first}
                />
                <div className="list-content">
                  <h3 className="list-name">
                    {person.name.title}. {person.name.first} {person.name.last}{" "}
                    {person.gender === "female" ? (
                      <FemaleIcon color={FEMALE_COLOR} />
                    ) : (
                      <MaleIcon color={MALE_COLOR} />
                    )}
                  </h3>
                  <p className="list-age">{person.dob.age} years old</p>
                  <p className="list-note">
                    E:{" "}
                    <a
                      href={`mailto:${person.email}`}
                      title={`Send an mail to ${person.name.first}`}
                    >
                      {person.email}
                    </a>
                  </p>
                  <p className="list-note">
                    P:{" "}
                    <a
                      href={`tel:${person.phone}`}
                      title={`Call phone to ${person.phone}`}
                    >
                      {person.phone}
                    </a>
                  </p>
                  <p className="list-note">
                    C:{" "}
                    <a
                      href={`tel:${person.cell}`}
                      title={`Call phone to ${person.cell}`}
                    >
                      {person.cell}
                    </a>
                  </p>
                  <p className="list-note">
                    A:{" "}
                    <b>
                      {person.location.street.number}{" "}
                      {person.location.street.name}, {person.location.state},{" "}
                      {person.location.city}, {person.location.country},{" "}
                      {person.location.postcode}
                    </b>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
