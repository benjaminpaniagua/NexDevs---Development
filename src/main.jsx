// Importing necessary libraries and components
import React from "react";
import ReactDOM from "react-dom/client";

// Importing the main App component
import { App } from "./App.jsx";

// ReactDOM.createRoot creates a root on the DOM container where the whole React application will be mounted.
// The render method then renders a React element into the root DOM node.
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* This is the main App component */}
    <App />
  </>
);
