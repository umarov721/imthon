import { products } from "./data.js";
import { renderProducts } from "./main.js";



renderProducts(products.filter((product) => product.elCart === true));