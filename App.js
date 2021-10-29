import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import ScannerScreen from './Screen/ScannerScreen';
import HomePage from './Screen/HomePage';
import SouthIndian from './Screen/SouthIndian';
import MainCourse from './Screen/MainCourse';
import ColdDrinks from './Screen/ColdDrinks';
import IceCream from './Screen/IceCream';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SouthIndian" component={SouthIndian} />
        <Stack.Screen name="MainCourse" component={MainCourse} />
        <Stack.Screen name="IceCream" component={IceCream} />
        <Stack.Screen name="ColdDrinks" component={ColdDrinks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
