import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

try {
  root.render(<App />);
} catch (error) {
  console.error("Erro ao renderizar o App:", error);
}
