
import { SETUSERAUTHENTICATIONUSERNAME } from "./../Actions/Type Actions";
import { SETUSERAUTHENTICATIONEMAIL } from "./../Actions/Type Actions";
import { SETUSERAUTHENTICATIONPHONENUMBER } from "./../Actions/Type Actions";
import { SETUSERAUTHENTICATIONPASSWORD } from "./../Actions/Type Actions";
import { SETUSERAUTHENTICATIONPASSWORDCONFIRMATION } from "./../Actions/Type Actions";

const initialState = {
  userName: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const addressReducer = function (state = initialState, action) {
  switch (action.type) {
    case SETUSERAUTHENTICATIONUSERNAME:
      return { ...state, userName: { name: action.payload } };
    case SETUSERAUTHENTICATIONEMAIL:
      return { ...state, email: { address: action.payload, error: action.error } };
    case SETUSERAUTHENTICATIONPHONENUMBER:
      return { ...state, phoneNumber: { number: action.payload, error: action.error } };
    case SETUSERAUTHENTICATIONPASSWORD:
      return { ...state, password: { text: action.payload, error: action.error } };
    case SETUSERAUTHENTICATIONPASSWORDCONFIRMATION:
      return { ...state, passwordConfirmation: { text: action.payload, error: action.error } };
    default:
      return state;
  }
};

export default addressReducer