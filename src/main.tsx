import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import DarkModeProvider from "./configs/DarkModeProvider.tsx";
import store from "./redux/store.ts";
import App from "./routes/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </DarkModeProvider>
  </React.StrictMode>,
);
