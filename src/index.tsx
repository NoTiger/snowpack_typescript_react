import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(
  // Strict Mode is a tool for highlighting potential problems in React code.
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

// Hot Module Replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
