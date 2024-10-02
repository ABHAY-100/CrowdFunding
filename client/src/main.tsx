import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import App from "./app";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);

  root.render(
    <ThirdwebProvider>
      <Router>
        <App />
      </Router>
    </ThirdwebProvider>
  );
} else {
  console.error("Root element not found");
}
