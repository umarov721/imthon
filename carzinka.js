import { products } from "./data.js";
const elWrapper = document.querySelector(".cards");
const newTemplate = document.querySelector("#template");



console.log(products);
function renderProducts(list = products,parent=elWrapper) {
    parent.textContent = null;
  
    list.forEach((product) => {
      const newTemp = newTemplate.content.cloneNode(true);
      const elImg = newTemp.querySelector(".img", newTemp);
      elImg.dataset.id = product.id;
      const elTitel = newTemp.querySelector(".p", newTemp);
      const elRealPrice = newTemp.querySelector(".real-price", newTemp);
      const elSkitka = newTemp.querySelector(".skitka", newTemp);
      const elKarzina = newTemp.querySelector(".cart", newTemp);
      elKarzina.dataset.id = product.id;
     
      product.elCart
        ? (elKarzina.src = "./img/cart2.png")
        : (elKarzina.src = "./img/cart.svg");
      
      elImg.src = product.image;
      elTitel.textContent = product.title;
      elRealPrice.textContent = product.realPrice;
      elSkitka.textContent = product.price;
  
      parent.appendChild(newTemp);
     
      
    });
  }
renderProducts(products.filter((product) => product.elCart === true));

elWrapper.addEventListener("click", (evt) => {
    if (evt.target.className.includes("cart")) {
      const id = Number(evt.target.dataset.id);
  
      products.forEach((product) => {
        if (product.id === id) {
          product.elCart = !product.elCart;
          renderProducts(products.filter((product) => product.elCart === true)); 
          localStorage.setItem("cart", JSON.stringify(products));
        }
      });
    }
  });