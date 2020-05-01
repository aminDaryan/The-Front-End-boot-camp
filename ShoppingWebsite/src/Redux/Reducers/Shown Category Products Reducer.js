
import { SETCATEGORYPRODUCTS, SETSEARCHEDCATEGORYPRODUCTS, SETCHOSENBRANDSPRODUCTS, SETEXISTINGPRODUCTS } from "../Actions/Type Actions";

const initialState = {
  allOfTheProducts: JSON.parse(sessionStorage.getItem("The Items")) || [],
  existingProductsInStorage: JSON.parse(sessionStorage.getItem("The Items")) || [],
  products: JSON.parse(sessionStorage.getItem("The Items")) || [],
};
// console.log(JSON.parse(sessionStorage.getItem("The Items")))
const categoryProdctsReducer = function (state = initialState, action) {
  switch (action.type) {
    case SETCATEGORYPRODUCTS:
      sessionStorage.setItem("The Items", JSON.stringify(action.payload))
      return { allOfTheProducts: action.payload, existingProductsInStorage: action.payload, products: action.payload };
    case SETSEARCHEDCATEGORYPRODUCTS:
      return { ...state, products: action.payload };
    case SETCHOSENBRANDSPRODUCTS:
      return { ...state, products: action.payload };
    case SETEXISTINGPRODUCTS:
      return { ...state, existingProductsInStorage: action.existingProducts, products: action.shownProducts };
    default:
      return state;
  }
};

export default categoryProdctsReducer