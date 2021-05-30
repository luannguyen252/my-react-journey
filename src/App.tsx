import { BrowserRouter } from "react-router-dom";
import AppLink from "./config/AppLink";

function App() {
  return (
    <div className="container">
      <header>
        <h1>My React App</h1>
      </header>

      <BrowserRouter>
        <nav>
          <AppLink to="/home">Home</AppLink>
          <AppLink to="/about">About</AppLink>
          <AppLink to="/contact">Contact</AppLink>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
