import React from "react";
import ReactDOM from "react-dom/client";
import { ScrollToTop } from "./Components";
import "./index.css";
import Main from "./Navigation/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Main />
    <ScrollToTop />
  </React.StrictMode>
);
