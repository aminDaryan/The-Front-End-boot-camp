import { SETPROFILEPROPERTIES, SETPROFILEUSERNAME, SETPROFILEEMAIL, SETUSERPHONE, SETUSERADDRESS } from "../Actions/Type Actions";
import Cookies from "universal-cookie";

let cookies = new Cookies();


const initialState = {
  user: cookies.get("profile") ? cookies.get("profile").user : "",
  email: cookies.get("profile") ? cookies.get("profile").email : "",
  phone: cookies.get("profile") ? cookies.get("profile").phone : "",
  address: cookies.get("address") ? cookies.get("address") : "",
  id: cookies.get("profile") ? cookies.get("profile").id : "",
};

const categoryProdctsReducer = function (state = initialState, action) {
  switch (action.type) {
    case SETPROFILEPROPERTIES:
      return {
        ...state,
        user: action.payload.user,
        email: action.payload.email,
        phone: action.payload.phone,
        id: action.payload.id,
      };
    case SETPROFILEUSERNAME:
      return {
        ...state, userName: action.payload
      };
    case SETPROFILEEMAIL:
      return {
        ...state, email: action.payload
      };
    case SETUSERPHONE:
      return {
        ...state, phone: action.payload
      };
    case SETUSERADDRESS:
      return {
        ...state, address: action.payload
      };
    default:
      return state;
  }
};

export default categoryProdctsReducer