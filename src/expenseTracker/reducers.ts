import { Action, InitialState } from "./types";

export const initialState: InitialState = {
  expenses: []
};

export const reducer = (state, action) => {
  switch(action.type) {
    case Action.ADD_EXPENSE:
      return { ...state, expenses: [...state.expenses, action.value]};
    case Action.EDIT_EXPENSE: {
      const selectedExpenseIndex = state.expenses.findIndex(expense => expense.id === action.value.id);
      const updatedExpenses = [...state.expenses];
      updatedExpenses[selectedExpenseIndex] = action.value;

      return { ...state, expenses: updatedExpenses };
    }
    case Action.DELETE_EXPENSE: {
      return { ...state, expenses: state.expenses.filter(expense => expense.id !== action.value) }
    }
    default:
      return state;
  }
};