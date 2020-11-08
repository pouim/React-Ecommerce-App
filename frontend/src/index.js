import React from 'react'
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import Themes from "./themes";
import "./index.css";
import App from "./App";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Themes}>
    <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
