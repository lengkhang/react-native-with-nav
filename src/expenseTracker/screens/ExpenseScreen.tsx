import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootContext } from "../ContextProvider";
import { Expense } from "../types";
import { ExpenseScreenRouteProp } from "../navigation/types";
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const ExpenseScreen = () => {
  const route = useRoute<ExpenseScreenRouteProp>();
  const { params } = route;

  const [date, setDate] = useState(params?.date || new Date().toLocaleDateString('en-GB')); // new Date().toLocaleDateString('en-GB')
  const [amount, setAmount] = useState(params?.amount.toString());
  const [description, setDescription] = useState(params?.description);
  const [type, setType] = useState(params?.type);

  const navigation = useNavigation();
  const { addExpense, editExpense, deleteExpense } = useContext(RootContext);

  const onAmountChange = (value) => {
    const allowNumeric = (/^\d{1,6}(\.)?(\d{1,2})?$/).test(value);
    const allowLeadingZeroDecimal = (/^0\.(\d{1,2})?$/).test(value);

    const isAllowedValue = allowNumeric || allowLeadingZeroDecimal;

    if (isAllowedValue) {
      setAmount(value);
    }
  };

  const onSubmit = () => {
    const expense: Expense = {
      id: params?.id || uuidv4(),
      date,
      amount: Number(amount),
      type,
      description
    };

    if (params?.isEditing) {
      editExpense(expense);
    } else {
      addExpense(expense);
    }

    navigation.navigate('Home');
  };

  const onDelete = () => {
    deleteExpense(params!.id);

    navigation.navigate('Home');
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Date:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setDate(value)
          }}
          value={date} />
      </View>
      <View style={styles.container}>
        <Text>Type:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setType(value)}
          value={type} />
      </View>
      <View style={styles.container}>
        <Text>Amount:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
          onChangeText={onAmountChange}
          value={amount} />
      </View>
      <View style={styles.container}>
        <Text>Description:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setDescription(value)}
          value={description} />
      </View>
      <Button title="submit" onPress={onSubmit} />
      {
        params?.isEditing &&
          <Button title="delete" onPress={onDelete} />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 120,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default ExpenseScreen;