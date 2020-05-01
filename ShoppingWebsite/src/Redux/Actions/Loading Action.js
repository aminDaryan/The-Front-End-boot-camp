
import { SETLOADING } from "./Type Actions";


export const setLoading = (boolean) => {
  return {
    type: SETLOADING,
    payload: boolean
  };
};
