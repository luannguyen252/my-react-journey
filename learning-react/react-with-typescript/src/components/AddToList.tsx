import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
}

const AddToList: React.FC<IProps> = ({ setPeople, people }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!input.name || !input.age) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        img: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };

  return (
    <div className="add-to-list">
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          onChange={handleChange}
          className="input"
          name="name"
          value={input.name}
          placeholder="Enter your name"
          required={true}
          autoFocus={true}
          id="name"
        />
      </div>

      <div className="field">
        <label htmlFor="age">Your age</label>
        <input
          type="text"
          onChange={handleChange}
          className="input"
          name="age"
          value={input.age}
          placeholder="Enter your age"
          required={true}
          id="age"
        />
      </div>

      <div className="field">
        <label htmlFor="photo">Your photo</label>
        <input
          type="text"
          onChange={handleChange}
          className="input"
          name="img"
          value={input.img}
          placeholder="Enter your photo URL"
          id="photo"
        />
      </div>

      <div className="field">
        <label htmlFor="note">Your note</label>
        <textarea
          onChange={handleChange}
          className="input"
          name="note"
          value={input.note}
          placeholder="Enter your note"
          id="note"
        />
      </div>

      <button onClick={handleClick} className="button">
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
