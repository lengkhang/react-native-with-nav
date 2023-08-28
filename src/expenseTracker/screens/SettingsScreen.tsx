import { useQuery } from "react-query";
import { getAllMenuItems } from "./api/api";
import { FlatList, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect } from "react";
import { useRefreshOnFocus } from "../hooks/useRefreshOnFocus";

const SettingsScreen = () => {
  const {data, error, isLoading, refetch} = useQuery('menuItems', getAllMenuItems);

  useRefreshOnFocus(refetch);

  if (isLoading) {
    return (<Text>Loading...</Text>);
  }

  if (error) {
    return (<Text>Unable to load the data: {error?.message}</Text>);
  }

  const renderItem = ({ item }) => {
    const { price, description } = item;

    return (
      <View style={{ flexDirection: 'row' }}>
        <Text>{description}: </Text>
        <Text>${price}</Text>
      </View>)
  };

  return (
    <>
      {
        data.length && 
          <FlatList keyExtractor={(item) => item.id} data={data} renderItem={renderItem} />
      }
    </>
  );
};

export default SettingsScreen;