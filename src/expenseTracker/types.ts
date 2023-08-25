export enum Action {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  DELETE_EXPENSE
}

export enum ExpenseType {
  Grocery,
  Gas,
  Utility
};

export interface InitialState {
  expenses: Expense[];
}

export interface Expense {
  id: string;
  date: string;
  amount: number;
  description: string;
  type: ExpenseType;
};