import { ReactLogo, TypeScriptLogo } from "./assets";
import AppFetchData from "./AppFetchData";

export default function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <ReactLogo color="white" />
            <TypeScriptLogo color="white" />
          </div>
          <h1>React API with TypeScript</h1>
        </div>
      </header>
      <div className="container">
        <AppFetchData />
      </div>
    </>
  );
}
