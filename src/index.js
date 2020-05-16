import React from "react";
import ReactDOM from "react-dom";

const fname = 'Michael';
const lname = "Elliott";
const number = 100;

ReactDOM.render(
  <div>
    <h1> {fname} {lname}'s Favorite foods.</h1>
    <ul>
      <li>Bacon</li>
      <li>Sweet Potatoes {number}%</li>
      <li>Eggs with mushroom</li>
    </ul>
  </div>

  ,document.getElementById("root")
);
