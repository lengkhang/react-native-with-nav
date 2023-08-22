import { Button, FlatList, Pressable, StyleSheet, Text, View, ListRenderItem } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from "../navigation/types";

type Character = {
  id: number;
  name: string;
  birth_year: string;
}

const DATA: Character[] = [
  {
    id: 1,
    name: 'Luke Skywalker',
    birth_year: '19BBY',
  },
  {
    id: 2,
    name: 'C-3PO',
    birth_year: '112BBY',
  },
  {
    id: 3,
    name: 'R2-D2',
    birth_year: '33BBY',
  },
  {
    id: 4,
    name: 'Darth Vader',
    birth_year: '41.9BBY',
  },
  {
    id: 5,
    name: 'Leia Organa',
    birth_year: '19BBY',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const renderListItems: ListRenderItem<Character> = ({ item }) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {
            name: item.name,
            birthYear: item.birth_year,
          })
        }
      >
        <Text
          style={{ fontSize: 18, paddingHorizontal: 12, paddingVertical: 12 }}
        >
          {item.name}
        </Text>
        <View
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: '#ccc',
          }}
        />
      </Pressable>
    );
  };

  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <Pressable
        onPress={() => navigation.navigate('Feed')}
        style={styles.button}
      >
        <Text style={styles.textButton}>Go to Feed screen</Text>
      </Pressable>
      {/* <Button 
        title="Go to Feed screen"
        style={styles.button}
        onPress={() => navigation.navigate('Feed')}
      /> */}
      <FlatList data={DATA} renderItem={renderListItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'red',
    margin: 12,
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  textButton: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  }
});

export default HomeScreen;