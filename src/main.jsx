import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RootLayout from "./Layout/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RootLayout>
    <App />
  </RootLayout>
);
