import React from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import { TextField } from "./components/TextField";
import { Counter } from "./Counter";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React TypeScript</h1>
        <TextField
          text="Hello"
          person={{ firstName: "", lastName: "" }}
          handleChange={(e) => e.currentTarget}
        />

        <Counter>
          {({ count, setCount }) => (
            <div>
              {count}
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          )}
        </Counter>
      </header>
    </div>
  );
};

export default App;
