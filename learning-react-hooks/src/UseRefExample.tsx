import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

interface UseRefExampleProps {
  name?: string | any;
}

export const UseRefExample: React.FC<UseRefExampleProps> = ({ name }) => {
  const [myName, setMyName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <h4>{name}</h4>
      <input
        type="text"
        value={myName}
        onChange={(e) => setMyName(e.target.value)}
      />
      <p>My name is {myName}</p>
      <p style={{ color: renderCount.current >= 10 ? "red" : "black" }}>
        I rendered {renderCount.current} times
      </p>
    </>
  );
};

UseRefExample.propTypes = {
  name: PropTypes.string,
};

UseRefExample.defaultProps = {
  name: "useRef Example",
};
