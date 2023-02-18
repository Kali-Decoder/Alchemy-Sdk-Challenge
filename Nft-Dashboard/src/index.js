import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import NFTContext from "./utils/NFTContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NFTContext>
    <App />
  </NFTContext>
);
