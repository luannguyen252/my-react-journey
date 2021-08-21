import { useContext } from "react";
import PropTypes from "prop-types";

interface UseContextExampleProps {
  name?: string | any;
}

export const UseContextExample: React.FC<UseContextExampleProps> = ({
  name,
}) => {
  return (
    <>
      <h4>{name}</h4>
    </>
  );
};

UseContextExample.propTypes = {
  name: PropTypes.string,
};

UseContextExample.defaultProps = {
  name: "useContext Example",
};
