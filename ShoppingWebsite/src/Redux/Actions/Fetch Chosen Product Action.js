import { SETCHOSENPRODUCT } from "./Type Actions";


export const setChosenProduct = (theProduct) => {
    return {
        type: SETCHOSENPRODUCT,
        payload: theProduct
    };
};
