import * as React from "react";
import * as ReactDOM from "react-dom";
import "./../scss/global.scss";
import { HelloWorld } from "./components/App";

ReactDOM.render(
  <HelloWorld userName="Kamileg" lang="TypeScript" />,
  document.getElementById("root")
);
