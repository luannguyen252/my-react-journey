import * as React from "react";
import PropTypes from "prop-types";
import Svg, { Circle, G, Ellipse } from "react-native-svg";

export default function Logo(props: string | number, color: string) {
  return (
    <Svg
      viewBox="-11.5 -10.23174 23 20.46348"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle fill={color} r={2.05} />
      <G fill="none" stroke={color}>
        <Ellipse rx={11} ry={4.2} />
        <Ellipse rx={11} ry={4.2} transform="rotate(60)" />
        <Ellipse rx={11} ry={4.2} transform="rotate(120)" />
      </G>
    </Svg>
  );
}

Logo.propTypes = {
  color: PropTypes.string,
};

Logo.defaultProps = {
  color: "#61dafb",
};
