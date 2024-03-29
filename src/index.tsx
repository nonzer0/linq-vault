import ReactDOM from "react-dom/client";

import { FirebaseProvider } from "./FirebaseProvider";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>
);
