import React, { PureComponent } from "react";
import SearchMovies from "./SearchMovies";
import "./styles.css";

class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </div>
    );
  }
}

export default App;
