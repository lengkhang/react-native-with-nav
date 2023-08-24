import { useContext } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { restaurants } from "../../data/data";

const renderResultItem = ({ item }) => {
  const { name, rating, price } = item;

  return (
    <View>
      <Text style={{ fontSize: 26 }}>{name}</Text>
      <Text>{new Array(rating).fill('⭐️')}</Text>
      <Text>{new Array(price).fill('💰')}</Text>
      <View
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: '#ccc',
        }}
      />
    </View>
  )
}

const Results = ({ rating, price }) => {
  const results = restaurants.filter(restaurant => restaurant.rating >= rating && restaurant.price >= price);

  return (
    <FlatList data={results} renderItem={renderResultItem} />
  );
}

export default Results;