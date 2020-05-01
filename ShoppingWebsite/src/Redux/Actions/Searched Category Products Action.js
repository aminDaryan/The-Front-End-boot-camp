
import { SETSEARCHEDCATEGORYPRODUCTS } from "./Type Actions";
import { SETCHOSENBRANDSPRODUCTS } from "./Type Actions";
import { SETEXISTINGPRODUCTS } from "./Type Actions";


export const setSearchedCategorysProducts = (theSearchedProducts) => {
  return {
    type: SETSEARCHEDCATEGORYPRODUCTS,
    payload: theSearchedProducts
  };
};


export const setChosenBrandsProducts = (chosenBrands) => {
  return {
    type: SETCHOSENBRANDSPRODUCTS,
    payload: chosenBrands
  };
};

export const setExistingProducts = (existingProducts, shownProducts) => {
  return {
    type: SETEXISTINGPRODUCTS,
    existingProducts,
    shownProducts
  };
};

