import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Filters = ({ rating, setRating, price, setPrice, reset }) => {
    return (
      <>
        <View style={styles.container}>
          {
            [1, 2, 3, 4, 5].map(value => {
              return (
                <Pressable key={value} style={rating >= value && styles.selected} onPress={() => setRating(value)}>
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
                <Pressable key={value} style={price >= value && styles.selected} onPress={() => setPrice(value)}>
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