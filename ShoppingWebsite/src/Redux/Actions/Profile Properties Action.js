
import { SETPROFILEPROPERTIES, SETPROFILEUSERNAME, SETPROFILEEMAIL, SETUSERPHONE, SETUSERADDRESS } from "./Type Actions";



export const setProfileProperties = (theProfileProperties) => {
  return {
    type: SETPROFILEPROPERTIES,
    payload: theProfileProperties
  };
};

export const setProfileUserName = (theProfileUSerName) => {
  return {
    type: SETPROFILEUSERNAME,
    payload: theProfileUSerName
  };
};

export const setProfileEmail = (theProfileEmail) => {
  return {
    type: SETPROFILEEMAIL,
    payload: theProfileEmail
  };
};

export const setProfilePhone = (theProfilePhone) => {
  return {
    type: SETUSERPHONE,
    payload: theProfilePhone
  };
};

export const setProfileAddress = (theProfileAddress) => {
  return {
    type: SETUSERADDRESS,
    payload: theProfileAddress
  };
};
