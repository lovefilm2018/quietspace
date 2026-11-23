import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootEl = document.getElementById("root")!;
const hasPrerenderedHtml =
  rootEl.childElementCount > 0 ||
  (rootEl.textContent !== null && rootEl.textContent.trim().length > 0);

if (hasPrerenderedHtml) {
  hydrateRoot(rootEl, <App />);
} else {
  createRoot(rootEl).render(<App />);
}
