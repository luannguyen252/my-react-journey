import { useState } from "react";
import PropTypes from "prop-types";

interface UseStateExampleProps {
  name?: string | any;
}

const AnotherUseStateExample = () => {
  const [state, setState] = useState({
    name: "Luan Nguyen",
    age: 0,
    job: "designer",
  });
  const name = state.name;
  const age = state.age;
  const job = state.job;

  function handleChange() {
    setState((prevState) => {
      return {
        ...prevState,
        name: "Elon Musk",
        age: 50,
        job: "CEO",
      };
    });
  }

  return (
    <>
      <p>
        {name}, {age}, {job}
      </p>
      <button onClick={handleChange}>Change</button>
    </>
  );
};

export const UseStateExample: React.FC<UseStateExampleProps> = ({ name }) => {
  let [count, setCount] = useState(0);

  function plusHandler() {
    setCount((count += 1));
  }

  function minusHandler() {
    setCount((count -= 1));
  }

  return (
    <>
      <h4>{name}</h4>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={plusHandler}>Plus</button>
        <span>{count}</span>
        <button onClick={minusHandler}>Minus</button>
      </div>
      <AnotherUseStateExample />
    </>
  );
};

UseStateExample.propTypes = {
  name: PropTypes.string,
};

UseStateExample.defaultProps = {
  name: "useState Example",
};
