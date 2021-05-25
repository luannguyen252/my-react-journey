import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { RestfulProvider } from "restful-react";
import "./style.scss";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <RestfulProvider base="https://dog.ceo/api">
      <App />
    </RestfulProvider>
  </StrictMode>,
  rootElement
);
