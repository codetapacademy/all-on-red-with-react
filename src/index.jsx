import React from "react";
import { render } from "react-dom";
import App from "./component/app/app.component";

const reactWillRenderHere = document.querySelector("#react-will-render-here");

render(<App />, reactWillRenderHere);
