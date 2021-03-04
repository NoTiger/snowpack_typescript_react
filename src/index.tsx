import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const GUEST_NAME = import.meta.env.SNOWPACK_PUBLIC_GUEST_NAME;

ReactDOM.render(
  // Strict Mode is a tool for highlighting potential problems in React code.
  <React.StrictMode>
    <App guestName={GUEST_NAME} />
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

// Hot Module Replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
