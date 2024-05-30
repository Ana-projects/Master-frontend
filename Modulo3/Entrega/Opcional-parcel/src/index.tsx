import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./styles.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
