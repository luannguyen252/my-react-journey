import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

interface UseMemoExampleProps {
  name?: string | any;
}

function slowFunction(num: number) {
  console.log("CALLING SLOW FUNCTION!");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export const UseMemoExample: React.FC<UseMemoExampleProps> = ({ name }) => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("THEME CHANGED!");
  }, [themeStyles]);

  return (
    <div style={themeStyles}>
      <h4>{name}</h4>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <p>{doubleNumber}</p>
    </div>
  );
};

UseMemoExample.propTypes = {
  name: PropTypes.string,
};

UseMemoExample.defaultProps = {
  name: "useMemo Example",
};
