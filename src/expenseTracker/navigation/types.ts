import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Expense } from "../types";

export type HomeStackNavigatorParamList = {
    Home: undefined;
    Expense?: Expense & {
        isEditing?: boolean;
    };
};

export type BottomTabNavigatorParamList = {
    HomeStack: HomeStackNavigatorParamList;
    Feed: undefined;
    Settings: undefined;
}

export type ExpenseScreenRouteProp = RouteProp<
    HomeStackNavigatorParamList,
    'Expense'
>;


export type HomeScreenNavigationProp = CompositeNavigationProp<
    NativeStackNavigationProp<HomeStackNavigatorParamList, 'Expense'>,
    BottomTabNavigationProp<BottomTabNavigatorParamList, 'Feed'>
>;