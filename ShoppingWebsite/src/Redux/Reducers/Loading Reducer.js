
import { SETLOADING } from "../Actions/Type Actions";

const initialState = {
  loading: false,
};

const loadingReducer = function (state = initialState, action) {
  switch (action.type) {
    case SETLOADING:
      return {loading: action.payload};
    default:
      return state;
  }
};

export default loadingReducer