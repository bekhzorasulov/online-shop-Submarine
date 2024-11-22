import "./mode.js";
import request from "./request.js";
import { upDateProductUI } from "./update.js";

const location = window.location.search;
const params = new URLSearchParams(location).get("id");

if (params) {
  request(`https://dummyjson.com/products/${params}`)
    .then((product) => upDateProductUI(product))
    .catch((error) => console.log(error.massage));
}
