import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setRating, setPrice, reset } from "./actions";

const Filters = () => {
  const rating = useSelector(state => state.rating);
  const price = useSelector(state => state.price);
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.container}>
        {
          [1, 2, 3, 4, 5].map(value => {
            return (
              <Pressable key={value} style={rating >= value && styles.selected} onPress={() => dispatch(setRating(value))}>
                <Text>⭐️</Text>
              </Pressable>
            )
          })
        }
      </View>
      <View style={styles.container}>
        {
          [1, 2, 3].map(value => {
            return (
              <Pressable key={value} style={price >= value && styles.selected} onPress={() => dispatch(setPrice(value))}>
                <Text>💰</Text>
              </Pressable>
            )
          })
        }
      </View>
    </>
  );
};

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

export default Filters;