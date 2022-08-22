import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/views/screens/HomeScreen';
import COLORS from './src/consts/colors';
import DetailsScreen from './src/views/screens/DetailsScreen';
import Profile from './src/views/screens/Settings';
import PopUp from './src/views/screens/PopUp';
import AppNavigator from './src/Navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>

    // <NavigationContainer>
    //   <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Profile />
    // <PopUp />
  );
};

export default App;
