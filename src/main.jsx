import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import {
  InventoryProvider,
  useInventory,
} from "./contexts/inventory-context.jsx";

export { useInventory };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <InventoryProvider>
        <App />
      </InventoryProvider>
    </Router>
  </React.StrictMode>
);
