import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/cas.scss";

createRoot(document.getElementById("root")).render(<App />);
