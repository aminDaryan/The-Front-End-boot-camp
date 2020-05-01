
import { SETVERIFICATION } from "./Type Actions";


export const setVerification = (verified, token) => {
  return {
    type: SETVERIFICATION,
    verificationStatus: verified,
    token: token,
  };
};
