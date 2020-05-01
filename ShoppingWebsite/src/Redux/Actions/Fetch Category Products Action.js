
import { SETCATEGORYPRODUCTS } from "./Type Actions";


export const setCategorysProducts = (theProducts) => {
  return {
    type: SETCATEGORYPRODUCTS,
    payload: theProducts
  };
};
