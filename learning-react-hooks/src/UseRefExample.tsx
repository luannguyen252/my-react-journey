import { useRef } from "react";
import PropTypes from "prop-types";

interface UseRefExampleProps {
  name?: string | any;
}

export const UseRefExample: React.FC<UseRefExampleProps> = ({ name }) => {
  return (
    <>
      <h4>{name}</h4>
    </>
  );
};

UseRefExample.propTypes = {
  name: PropTypes.string,
};

UseRefExample.defaultProps = {
  name: "useRef Example",
};
