import { View, Text } from 'react-native';
import VersionRedux from '../stateManagement/Redux/VersionRedux';
import VersionContext from '../stateManagement/Context/VersionContext';

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 18 }}>Settings Screen</Text>
      <VersionRedux />
      <VersionContext />
    </View>
  );
};

export default SettingsScreen;