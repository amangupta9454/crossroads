import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const container = document.getElementById("root");

// Store root instance globally to prevent multiple createRoot() calls
if (!window.__root) {
  window.__root = createRoot(container);
}

window.__root.render(
  <StrictMode>
    <App />
  </StrictMode>
);