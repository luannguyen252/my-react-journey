import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";

const Wrapper = styled("main")`
  background: ${(props) => props.theme.background};
  width: 100%;
  height: 100%;
  h1 {
    font-size: 32px;
    line-height: 48px;
    color: ${(props) => props.theme.body};
  }
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const App = () => {
  const themeState = useTheme();

  return (
    <Wrapper>
      <div id="introduction">
        <h1>React Dark Mode</h1>
        <div>
          <button onClick={() => themeState.toggle()}>
            {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default App;
