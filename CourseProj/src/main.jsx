import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { App } from "../src/components/App/App";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(<App />);
