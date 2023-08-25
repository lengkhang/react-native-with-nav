import { useContext } from "react";
import { Pressable, SectionList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootContext } from "../ContextProvider";
import { useNavigation } from "@react-navigation/native";

// const expenses = [
//   {
//     date: '2023-08-20',
//     type: 'Gas',
//     description: 'Petrol',
//     amount: 50.00
//   },
//   {
//     date: '2023-08-25',
//     type: 'Grocerry',
//     description: 'Aeon',
//     amount: 77.00
//   },
//   {
//     date: '2023-08-25',
//     type: 'Utility',
//     description: 'Electricity',
//     amount: 163.00
//   }
// ];

const HomeScreen = () => {
  const navigation = useNavigation();
  const { expenses } = useContext(RootContext);

  const totalExpenses = expenses.reduce((sum, current) => {
    return sum += current.amount;
  }, 0);

  const sectionsData = expenses.reduce((acc, current) => {
    const { id, date, type, description, amount } = current;

    const foundSectionIndex = acc.findIndex(section => section.title === current.date);

    if (foundSectionIndex < 0) {
      const sectionData = {
        title: current.date,
        data: [current]
      }

      acc.push(sectionData);
    } else {
      acc[foundSectionIndex].data.push(current);
    }

    return acc;
  }, []);

  sectionsData.sort((a, b) => {
    return b.title > a.title ? 1 : -1;
  })

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => {navigation.navigate('Expense', { isEditing: true, ...item })}}>
        <Text>{item.description}</Text>
      </Pressable>
    );
  };

  const renderSectionHeader = ({ section: { title } }) => {
    return (
      <Text>{title}</Text>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Total expenses: ${totalExpenses.toFixed(2)}</Text>
      </View>
      <SectionList
        keyExtractor={(item) => item.id}
        sections={sectionsData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;