/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".es"];

  for (let x = 0; x < pronoun.length; x++) {
    for (let y = 0; y < adj.length; y++) {
      for (let z = 0; z < noun.length; z++) {
        for (let w = 0; w < domain.length; w++) {
          console.log(pronoun[x] + adj[y] + noun[z] + domain[w]);
        }
      }
    }
  }
};
