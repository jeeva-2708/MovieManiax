import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { GenreProvider } from "./context/GenreContext";
import 'flowbite';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GenreProvider>
      <Router>
        <App />
      </Router>
    </GenreProvider>
  </StrictMode>
);
