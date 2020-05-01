
import { SETADDRESS } from "./Type Actions";


export const setAddress = (theAddress) => {
  return {
    type: SETADDRESS,
    payload: theAddress
  };
};
