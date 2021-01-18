import React from "react";
import ReactDOM from "react-dom";
import "./../scss/global.scss";
import { App } from "./components/App";
import {StateProvider} from "./shared/hooks/StateProvider";

ReactDOM.render(
  <StateProvider>
     <App/>
  </StateProvider>,
  document.getElementById("root")
);
