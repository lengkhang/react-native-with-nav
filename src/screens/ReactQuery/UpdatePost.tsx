import axios from "axios";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useMutation } from "react-query";

const UpdatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const mutation = useMutation((updatedPost) => {
    return axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedPost);
  })

  const onUpdate = () => {
    mutation.mutate({ title, body });
  };

  if (mutation.isLoading) {
    console.log('==> To update:', mutation.data);
    return (<Text>Loading...</Text>);
  } else if (mutation.isError) {
    return (<Text>Error: {mutation.error.message}</Text>);
  } else if (mutation.isSuccess) {
    console.log('==> Update to:', mutation.data);
    return (<Text>Post successfully updated!</Text>);
  }

  return (
    <View>
      <TextInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <TextInput
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <Button onPress={onUpdate} title="Update" />
    </View>
  )
};

export default UpdatePost;