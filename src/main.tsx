import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme accentColor="grass" grayColor="sage" radius="large">
      <App />
    </Theme>
  </React.StrictMode>
);
