import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FeedScreen = () => {
  const [count, setCount] = useState(0); 

  return (
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 18 }}>Feed Screen</Text>
      <View style={styles.container}>
        <Button title="-" onPress={() => setCount(count-1)}/>
        <Text style={styles.counter}>{count}</Text>
        <Button title="+" onPress={() => setCount(count+1)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    columnGap: 10,
    // width: 100
  },
  counter: {
    padding: 8
  }
});

export default FeedScreen;