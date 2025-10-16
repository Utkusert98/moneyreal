import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // <-- CSS mutlaka burada import edilmeli

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);