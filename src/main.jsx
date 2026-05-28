import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import { AppProvider } from "./context/AppContext";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2000,
            style: {
              borderRadius: "16px",
              background: "#0f172a",
              color: "#fff",
            },
          }}
        />

        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);