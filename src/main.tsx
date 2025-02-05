import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";

import { ThemeProvider, AuthProvider } from "./context";

import App from "./App.tsx";

import "@radix-ui/themes/styles.css";
import "./index.css";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
