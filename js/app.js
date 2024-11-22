import "./mode.js";
import request from "./request.js";
import { upDateHomeUI } from "./update.js";
const logInEl = document.getElementById("logIn");
const userInfo = document.getElementById("userInfo");
const btnSubmite = document.getElementById("btnSubmite");

request("https://dummyjson.com/products")
  .then((data) => upDateHomeUI(data))
  .catch((error) => console.log(error));

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
