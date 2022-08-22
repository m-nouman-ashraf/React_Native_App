import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../views/screens/HomeScreen'
import DetailsScreen from '../views/screens/DetailsScreen'
import DashBoard from '../views/screens/DashBoard'
import COLORS from '../consts/colors';
import ScreenNames from '../Helper/ScreenNames';
import Login from '../views/screens/Login';
import SignUp from '../views/screens/SignUp';

const AppNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName={ScreenNames.LogIn} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.LogIn} component={Login} />
            <Stack.Screen name={ScreenNames.SignUp} component={SignUp} />
            <Stack.Screen name={ScreenNames.DashBoard} component={DashBoard} />
            <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
            <Stack.Screen name={ScreenNames.DetailsScreen} component={DetailsScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
