import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ExpenseScreen from '../screens/ExpenseScreen';

import { HomeScreenNavigationProp, HomeStackNavigatorParamList } from './types';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Dashboard',
          headerRight: () => (<Button title="Add" onPress={() => navigation.navigate('Expense') } />)
        }}
      />
      <HomeStack.Screen name="Expense" component={ExpenseScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;