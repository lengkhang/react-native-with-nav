import { createContext, useReducer, ReactNode } from "react";
import { initialState, reducer } from "./reducers";
import { Action, Expense } from "./types";

export const RootContext = createContext();

type Props = {
  children: ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
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