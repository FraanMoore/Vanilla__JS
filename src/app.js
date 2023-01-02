/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = ["A", "the"];
  let subject = ["jogger", "racoon", "dog", "driver", "mother"];
  let acction = ["took my", "threw me", "yelled at my", "stole my", "bit me"];
  let possetion = ["homework", "toe", "shoe", "purse"];
  let where = ["on the street", "in my apartment", "in my yard"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let acctionIndex = Math.floor(Math.random() * acction.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    acction[acctionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
