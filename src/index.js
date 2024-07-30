import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { AppProvider } from "./context/AppContext";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
