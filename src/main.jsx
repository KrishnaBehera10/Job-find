import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MainContext from "./Context/MainContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainContext>
      <App />
      <ToastContainer position="top-right" autoClose={1000} />
    </MainContext>
  </BrowserRouter>
);
