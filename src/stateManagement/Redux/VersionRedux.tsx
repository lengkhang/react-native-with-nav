import { FlatList, ListRenderItem, Pressable, StyleSheet, Text, View } from "react-native";
import { Provider, connect } from "react-redux";
import { legacy_createStore as createStore } from 'redux';
import { restaurants } from "../../data/data";
import Filters from "./Filter";
import Results from "./Results";
import actions from "./actions";
import reducer from "./reducers";

const store = createStore(reducer);

const ConnectedResults = connect(
  state => {
    return {
      rating: state.rating,
      price: state.price
    };
  }, null
)(Results);

const ConnectedFilters = connect(
  state => {
    return {
      rating: state.rating,
      price: state.price
    };
  }, dispatch => {
    return {
      setRating: (value: number) => dispatch({ type: actions.SET_RATING, value }),
      setPrice: (value: number) => dispatch({ type: actions.SET_PRICE, value }),
      reset: () => dispatch({ type: actions.RESET })
    };
  }
)(Filters);

const VersionRedux = () => {
  return (
    <Provider store={store}>
      <ConnectedFilters />
      <ConnectedResults />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  selected: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'red'
  }
});

export default VersionRedux;