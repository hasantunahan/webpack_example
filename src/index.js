import axios from "axios";
import Ogrenci from "./ogrenci";
import "./css/style.scss";

const hasan = new Ogrenci("naber");
hasan.adısoyle();
console.log("hasan ");

axios
  .get("https://fakestoreapi.com/products")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
