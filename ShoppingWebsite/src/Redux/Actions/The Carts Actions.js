
import { ADDTOCARTTHEITEM, SUBTRACTTOCARTTHEITEM, GIVETHEAMOUNTOFITEM, DELETETHECARTTHEITEM } from "./Type Actions";


export const setAddingToCart = (product) => {
  return {
    type: ADDTOCARTTHEITEM,
    payload: product
  };
};

export const setSubtractingFromToCart = (product) => {
  return {
    type: SUBTRACTTOCARTTHEITEM,
    payload: product
  };
};

export const setTheAmountOfTheProduct = (product, inputNumber) => {
  return {
    type: GIVETHEAMOUNTOFITEM,
    payload: product,
    inputNumber
  };
};

export const setTheDeletionOfTheProduct = (product) => {
  return {
    type: DELETETHECARTTHEITEM,
    payload: product
  };
};
