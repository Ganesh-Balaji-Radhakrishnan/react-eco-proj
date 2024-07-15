import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { configureStore } from "./store";
import { Provider } from "react-redux";

ReactDom.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
