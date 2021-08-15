import { useState } from "react";
import { jony, craig, elon, ReactLogo, TypeScriptLogo } from "./assets";
import { List, AddToList } from "./components";

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

export default function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Jony Ive",
      age: 54,
      img: jony,
      note: "Ive was Chief Design Officer (CDO) of Apple Inc.",
    },
    {
      name: "Craig Federighi",
      age: 52,
      img: craig,
      note: "Apple's Senior Vice President of Software Engineering.",
    },
    {
      name: "Elon Musk",
      age: 50,
      img: elon,
      note: "An entrepreneur and business magnate.",
    },
  ]);

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <ReactLogo color="white" />
            <TypeScriptLogo color="white" />
          </div>
          <h1>React with TypeScript</h1>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <List people={people} />
          </div>
          <div className="col-md-6">
            <AddToList setPeople={setPeople} people={people} />
          </div>
        </div>
      </div>
    </>
  );
}
