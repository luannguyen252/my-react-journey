import { useContext } from "react";
import { ThemeContext } from "./UseContextExample";

export default function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margein: "2rem",
  };

  return (
    <>
      <div style={themeStyles}>Function Context</div>
    </>
  );
}
