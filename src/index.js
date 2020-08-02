import React from "react";
import ReactDOM from "react-dom";
import './i18n';
import App from "./App";

// const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.Suspense>
    <App />
  </React.Suspense>,
   document.getElementById("root")
);
