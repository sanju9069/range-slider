import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./components/Main";
import { RangeProvider } from "./context/RangeProvider";

ReactDOM.render(
  <React.StrictMode>
    <RangeProvider>
      <Main />
    </RangeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
