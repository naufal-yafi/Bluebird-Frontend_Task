import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import DarkModeProvider from "./configs/DarkModeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
