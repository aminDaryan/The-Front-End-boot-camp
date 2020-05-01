
import { SETCHOSENPRODUCT } from "./../Actions/Type Actions";

const initialState = {
  product: JSON.parse(sessionStorage.getItem("The Chosen Product")) || "",
};

const fetchProductReducer = function (state = initialState, action) {
  switch (action.type) {
    case SETCHOSENPRODUCT:
      sessionStorage.setItem("The Chosen Product", JSON.stringify(action.payload))
      return { product: action.payload };
    default:
      return state;
  }
};

export default fetchProductReducer