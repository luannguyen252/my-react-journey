import { useReducer } from "react";
import PropTypes from "prop-types";

const ACTIONS = {
  PLUS: "plus",
  MINUS: "minus",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.PLUS:
      return { count: state.count + 1 };
    case ACTIONS.MINUS:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export const UseReducerExample = ({ name }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function plusHandler() {
    dispatch({ type: ACTIONS.PLUS });
  }

  function minusHandler() {
    dispatch({ type: ACTIONS.MINUS });
  }

  return (
    <>
      <h4>{name}</h4>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={plusHandler}>Plus</button>
        <span>{state.count}</span>
        <button onClick={minusHandler}>Minus</button>
      </div>
    </>
  );
};

UseReducerExample.propTypes = {
  name: PropTypes.string,
};

UseReducerExample.defaultProps = {
  name: "useReducer Example",
};
