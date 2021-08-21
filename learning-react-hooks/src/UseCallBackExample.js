import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

export const UseCallbackExample = ({ name }) => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={theme}>
      <h4>{name}</h4>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("UPDATING ITEMS");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};

UseCallbackExample.propTypes = {
  name: PropTypes.string,
};

UseCallbackExample.defaultProps = {
  name: "useCallback Example",
};
