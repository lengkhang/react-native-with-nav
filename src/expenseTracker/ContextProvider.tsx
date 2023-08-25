import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducers";
import { Action, Expense } from "./types";

export const RootContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    expenses: state.expenses,
    addExpense: (expense: Expense) => dispatch({ type: Action.ADD_EXPENSE, value: expense }),
    editExpense: (expense: Expense) => dispatch({ type: Action.EDIT_EXPENSE, value: expense }),
    deleteExpense: (id: string) => dispatch({ type: Action.DELETE_EXPENSE, value: id })
  };

  return (
    <RootContext.Provider value={value}>
      { children }
    </RootContext.Provider>
  )
};

export default ContextProvider;