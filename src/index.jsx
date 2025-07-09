import Button from "./Button.jsx";
import "./index.css";
import { aa } from "./mato.js";
import React from "react";
import ReactDOM from "react-dom/client";

function sayHello() {
  console.log("hello");
}

sayHello();

console.log(aa());

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
console.log(Button);
root.render(<Button />);
