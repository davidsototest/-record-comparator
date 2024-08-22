import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CustomThemeProvider } from "./context/ThemeContext";
import { ServicesProvider } from "./context/ServiceContext";
import { ComparatorProvider } from "./context/ComparatorContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <ServicesProvider>
        <ComparatorProvider>
          <App />
        </ComparatorProvider>
      </ServicesProvider>
    </CustomThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
