import { useReducer } from "react";
import PropTypes from "prop-types";

interface UseReducerExampleProps {
  name?: string | any;
}

export const UseReducerExample: React.FC<UseReducerExampleProps> = ({
  name,
}) => {
  return (
    <>
      <h4>{name}</h4>
    </>
  );
};

UseReducerExample.propTypes = {
  name: PropTypes.string,
};

UseReducerExample.defaultProps = {
  name: "useReducer Example",
};
