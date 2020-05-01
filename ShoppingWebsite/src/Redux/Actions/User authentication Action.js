
import { SETUSERAUTHENTICATIONUSERNAME } from "./Type Actions";
import { SETUSERAUTHENTICATIONEMAIL } from "./Type Actions";
import { SETUSERAUTHENTICATIONPHONENUMBER } from "./Type Actions";
import { SETUSERAUTHENTICATIONPASSWORD } from "./Type Actions";
import { SETUSERAUTHENTICATIONPASSWORDCONFIRMATION } from "./Type Actions";


export const setUserAuthenticationUserName = (theUsersUserNAme) => {
    return {
        type: SETUSERAUTHENTICATIONUSERNAME,
        payload: theUsersUserNAme
    };
};

export const setUserAuthenticationEmail = (theUsersEmail, error) => {
    return {
        type: SETUSERAUTHENTICATIONEMAIL,
        payload: theUsersEmail,
        error
    };
};

export const setUserAuthenticationPhoneNumber = ( theUsersPhoneNumber, error) => {
    return {
        type: SETUSERAUTHENTICATIONPHONENUMBER,
        payload: theUsersPhoneNumber,
        error
    };
};

export const setUserAuthenticationPassword = (theUsersPassword, error) => {
    return {
        type: SETUSERAUTHENTICATIONPASSWORD,
        payload: theUsersPassword,
        error
    };
};

export const setUserAuthenticationPasswordConfirmation = (theUsersPasswordConfitmation, error) => {
    return {
        type: SETUSERAUTHENTICATIONPASSWORDCONFIRMATION,
        payload: theUsersPasswordConfitmation,
        error
    };
};
