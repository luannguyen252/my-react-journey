import { useCallback } from "react";
import PropTypes from "prop-types";

interface UseCallbackExampleProps {
  name?: string | any;
}

export const UseCallbackExample: React.FC<UseCallbackExampleProps> = ({
  name,
}) => {
  return (
    <>
      <h4>{name}</h4>
    </>
  );
};

UseCallbackExample.propTypes = {
  name: PropTypes.string,
};

UseCallbackExample.defaultProps = {
  name: "useReducer Example",
};
