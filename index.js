import React from "react";
import { createRoot } from "react-dom/client";

import {Placeholder} from './App'

import './index.css'

const App = () => {
    return <div className="redText"><Placeholder />This is a div tag </div>
}

const main = () => {
  const root =  createRoot(document.getElementById("root"));
  root.render(<App />);
}

main();

// const add = () =>  1 + 2;

// add();

