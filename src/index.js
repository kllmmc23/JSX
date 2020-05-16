import React from "react";
import ReactDOM from "react-dom";

const YOURNAME = "Michael";
var date = new Date();
const CURRENTYEAR = date.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {YOURNAME}</p>
    <p>Copyright {CURRENTYEAR}</p>
  </div>,
  document.getElementById("root")
);
