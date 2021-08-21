import { useState, createContext } from "react";
import PropTypes from "prop-types";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";

export const ThemeContext = createContext();

export const UseContextExample = ({ name }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <h4>{name}</h4>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
};

UseContextExample.propTypes = {
  name: PropTypes.string,
};

UseContextExample.defaultProps = {
  name: "useContext Example",
};
