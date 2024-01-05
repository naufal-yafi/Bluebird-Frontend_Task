import React from "react";
import ReactDOM from "react-dom/client";
import DarkModeProvider from "./configs/DarkModeProvider.tsx";
import App from "./routes/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
);
