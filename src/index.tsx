import ReactDOM from "react-dom/client";

import { FirebaseProvider } from "./FirebaseProvider";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>
);
