import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ConnectedApp from "./containers/ConnectedApp";
import store from "./configureStore";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
