import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MarketplacePage from "./modules/marketplace/marketplace.component.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MarketplacePage />
  </React.StrictMode>
);
