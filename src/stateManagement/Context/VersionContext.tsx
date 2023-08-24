import { FlatList, ListRenderItem, Pressable, StyleSheet, Text, View } from "react-native";
import { restaurants } from "../../data/data";
import React, { createContext, useContext, useReducer } from "react";
import Filters from "./Filter";
import Results from "./Results";
import actions from "./actions";
import reducer, { initialState } from "./reducers";

export const RestaurantContext = createContext();

// React example: https://react.dev/learn/managing-state
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    rating: state.rating,
    price: state.price,
    setRating: value => {
      dispatch({ type: actions.SET_RATING, value });
    },
    setPrice: (value) => {
      dispatch({ type: actions.SET_PRICE, value });
    },
    reset: () => {
      dispatch({ type: actions.RESET })
    }
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  )
};

const VersionContext = () => {
  return (
    <Provider>
      <Filters />
      <Results />
    </Provider>
  )
}

export default VersionContext;