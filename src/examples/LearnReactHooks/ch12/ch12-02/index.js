import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";

import TodoStore from "./store";

const store = new TodoStore();

ReactDOM.render(
  <Provider todoStore={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
