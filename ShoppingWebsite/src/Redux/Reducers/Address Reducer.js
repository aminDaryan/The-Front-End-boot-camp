
import { SETADDRESS } from "./../Actions/Type Actions";

const initialState = {
  address: "/",
};

const addressReducer = function (state = initialState, action) {
  switch (action.type) {
    case SETADDRESS:
      return {address: action.payload};
    default:
      return state;
  }
};

export default addressReducer