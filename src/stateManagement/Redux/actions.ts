import { Action } from "./Type";

const actions: Action = {
  SET_RATING: 'SET_RATING',
  SET_PRICE: 'SET_PRICE',
  RESET: 'RESET'
};

export const setRating = (value: number) => ({ type: actions.SET_RATING, value });
export const setPrice = (value: number) =>  ({ type: actions.SET_PRICE, value });
export const reset = () => ({ type: actions.RESET });

export default actions;