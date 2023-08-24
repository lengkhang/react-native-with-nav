import axios from "axios";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";

const retrievePosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return response.data;
};

const DisplayPosts = () => {
  const {
    data: posts = [],
    error,
    isLoading,
  } = useQuery<any[], Error>("postsData", retrievePosts);

  if (isLoading) {
    return (<Text>Loading...</Text>);
  } else if (error) {
    return (<Text>Error fetching posts!</Text>);
  }

  const renderItem = ({ item }) => {
    return (<Text key={item.id}>{item.title}</Text>);
  };

  const endComponent = () => {
    return (
      <View>
        <Text> List ended</Text>
      </View>
    );
  }

  // const top5Posts = posts.slice(0, 5);

  return (
    <>
      {
        posts.length &&
        <FlatList
          data={posts}
          renderItem={renderItem}
          ListFooterComponent={endComponent}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      }
    </>
  );

  // return (
  //   // <View style={{ marginBottom: 4, borderColor: 'blue', borderWidth: 1, padding: 0, flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
  //     {/* {
  //       posts.map(post => {
  //         return (<Text key={post.id}>{post.title}</Text>)
  //       })
  //     } */}


  //   // </View>
  // );
};

export default DisplayPosts;