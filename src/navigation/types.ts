import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeStackNavigatorParamList = {
    Home: undefined;
    Details: {
        name: string;
        birthYear: string;
    };
};

export type BottomTabNavigatorParamList = {
    HomeStack: HomeStackNavigatorParamList;
    Feed: undefined;
    Settings: undefined;
}

export type DetailsScreenRouteProp = RouteProp<
    HomeStackNavigatorParamList,
    'Details'
>;

// export type HomeScreenNavigationProp = NativeStackNavigationProp<
//     HomeStackNavigatorParamList,
//     'Details'
// >;

export type HomeScreenNavigationProp = CompositeNavigationProp<
    NativeStackNavigationProp<HomeStackNavigatorParamList, 'Details'>,
    BottomTabNavigationProp<BottomTabNavigatorParamList, 'Feed'>
>;