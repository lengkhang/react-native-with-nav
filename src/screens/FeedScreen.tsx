import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DisplayPosts from './ReactQuery/DisplayPosts';
import CreatePost from './ReactQuery/CreatePost';
import UpdatePost from './ReactQuery/UpdatePost';

const FeedScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <View>
        <Text style={{ fontSize: 18 }}>Feed Screen</Text>
        <View style={styles.container}>
          <Button title="-" onPress={() => setCount(count - 1)} />
          <Text style={styles.counter}>{count}</Text>
          <Button title="+" onPress={() => setCount(count + 1)} />
        </View>
      </View>

      <CreatePost />
      <UpdatePost />
      <DisplayPosts />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 10,
  },
  counter: {
    padding: 8
  }
});

export default FeedScreen;