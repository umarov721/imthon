import { products } from "./data.js";
const categories = ["Популярности", "summer", "popular", "test"];



const elWrapper = document.querySelector(".cards");
const elCategories = document.querySelector("#categories-list");
const elBtn = document.querySelector(".btn");
const elInp1 = document.querySelector(".inp-1");
const elInp2 = document.querySelector(".inp-2");

localStorage.setItem("cart", JSON.stringify(products));

const newTemplate = document.querySelector("#template");


export function renderProducts(list = products,parent=elWrapper) {
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
    //   if (product.elCart) {
    //     console.log(product);
    //     elCart.classList.remove("fa-regular");
    //     elCart.classList.add("fa-solid");
    //     // elCart.className = "img2 fa-solid fa-heart";
    //   }
    elImg.src = product.image;
    elTitel.textContent = product.title;
    elRealPrice.textContent = product.realPrice;
    elSkitka.textContent = product.price;

    parent.appendChild(newTemp);
    // console.log(elRealPrice);
    
  });
}
renderProducts();
elWrapper.addEventListener("click", (evt) => {
    if (evt.target.className.includes("cart")) {
      const id = Number(evt.target.dataset.id);
  
      products.forEach((product) => {
        if (product.id === id) {
          product.elCart = !product.elCart;
          renderProducts();
          localStorage.setItem("cart", JSON.stringify(products));
        }
      });
    }
  });




  window.addEventListener("DOMContentLoaded", function () {
    renderProducts(products);
  
    categories.forEach((category) => {
      const newOption = document.createElement("option");
      newOption.value = category;
      newOption.textContent = category;
  
      elCategories.appendChild(newOption);
    });
  });



  elCategories.addEventListener("change", () => {
    const filteredArray = products.filter((item) =>
      item.categories.includes(elCategories.value)
    );
  
    renderProducts(filteredArray);
  });
  



  elBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (elInp1.value !== "" && elInp2.value !== "") {
     
      const filtrPrice = products.filter((product) =>{
        
         return( product.price > +elInp1.value &&
          product.price < +elInp2.value)}
      );
      console.log(filtrPrice);
      renderProducts(filtrPrice);
    }
  });


  