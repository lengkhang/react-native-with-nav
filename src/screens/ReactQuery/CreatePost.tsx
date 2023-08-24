import axios from 'axios';
import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useMutation } from 'react-query';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const mutation = useMutation((newPost) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
  });

  const onSubmit = () => {
    mutation.mutate({ title, body });
  };

  if (mutation.isLoading) {
    return <Text>Submitting...</Text>;
  }

  if (mutation.isError) {
    return <Text>Error: {mutation.error.message}</Text>;
  }

  if (mutation.isSuccess) {
    return <Text>Post submitted!</Text>;
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
      <Button onPress={onSubmit} title="Submit" />
    </View>
  )
};

export default CreatePost;