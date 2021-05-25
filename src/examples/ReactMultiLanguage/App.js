import { withTranslation } from "react-i18next";
import { SwitchLanguage } from "./components/";
import logo from "./logo.svg";

function App({ t }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React" />
        <p>
          {t("Edit")} <code>src/App.js</code> {t("and save to reload")}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Learn React")}
        </a>
        <SwitchLanguage />
      </header>
    </div>
  );
}

export default withTranslation("translations")(App);
