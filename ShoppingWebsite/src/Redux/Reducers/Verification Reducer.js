
import { SETVERIFICATION } from "./../Actions/Type Actions";
import Cookies from 'universal-cookie';

let cookies = new Cookies();
const initialState = {
  token: cookies.get("token") || '',
  authenticationStatus:  cookies.get("token")  ? true : false
};

const verificationReducer = function (state = initialState, action) {
  switch (action.type) {
    case SETVERIFICATION:
      return { authenticationStatus: action.verificationStatus, token: action.token };
    default:
      return state;
  }
};

export default verificationReducer