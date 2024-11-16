import "./mode.js";
import request from "./request.js";
import { updateHomeUI } from "./update.js";
const logInEl = document.getElementById("logIn");
const userInfo = document.getElementById("userInfo");
const btnSubmite = document.getElementById("btnSubmite");

logInEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e) {
    userInfo.classList.remove("hidden");
  }
});

btnSubmite.addEventListener("click", (e) => {
  e.preventDefault();
  if (e) {
    userInfo.classList.add("hidden");
  }
});

request("https://dummyjson.com/products")
  .then((data) => updateHomeUI(data))
  .catch((error) => console.log(error));
