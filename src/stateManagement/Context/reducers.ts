import actions from "./actions";
import { Action } from "./Type";

export const initialState = {
  rating: 3,
  price: 1
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.SET_RATING:
      return { ...state, rating: action.value };
    case actions.SET_PRICE:
      return { ...state, price: action.value };
    case actions.RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
}

export default reducer;