import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Registro automático del Service Worker
import { registerSW } from 'virtual:pwa-register'

registerSW({
  onOfflineReady() {
    console.log("App lista para usarse sin conexión");
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
