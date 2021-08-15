import React from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
}

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <li key={index} className="list">
          <img className="list-avatar" src={person.img} alt={person.name} />
          <div className="list-content">
            <h2 className="list-name">{person.name}</h2>
            <p className="list-age">{person.age} years old</p>
            <p className="list-note">{person.note}</p>
          </div>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
