import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

interface UseRefExampleProps {
  name?: string | any;
}

export const UseRefExample: React.FC<UseRefExampleProps> = ({ name }) => {
  const [myName, setMyName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef<HTMLInputElement | any>(null);

  function setFocus() {
    console.log(inputRef.current);
    inputRef.current?.focus();
    // inputRef.current?.value("Some value");
  }

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <h4>{name}</h4>
      <input
        ref={inputRef}
        type="text"
        value={myName}
        onChange={(e) => setMyName(e.target.value)}
      />
      <button onClick={setFocus}>Set Focus</button>
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
