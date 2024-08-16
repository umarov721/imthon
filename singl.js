import { products } from "./data.js";

const elImg = document.querySelector(".img");
    const elTitel = document.querySelector(".p");
    const elRealPrice = document.querySelector(".real-price");
    const elSkitka = document.querySelector(".skitka");

const id = localStorage.getItem("id") ? +localStorage.getItem("id") : 1;
const prodactCards = JSON.parse(localStorage.getItem("product"));

const singlProduct = products.filter((el) => el.id === id)[0];
elImg.src = singlProduct.image;
elTitel.textContent = singlProduct.title;
elRealPrice.textContent = singlProduct.realPrice;
elSkitka.textContent = singlProduct.price;
