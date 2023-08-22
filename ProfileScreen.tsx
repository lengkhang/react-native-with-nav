import { Text } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

export type Props = {
  name: string;
}

const ProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProfileScreen;