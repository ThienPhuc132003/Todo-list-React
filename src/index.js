import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TodoList from "./pages/TodoList";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
