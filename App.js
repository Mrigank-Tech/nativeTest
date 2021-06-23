// import { StatusBar } from "expo-status-bar";
import React from 'react';
import {
  StyleSheet,
  ImageBackground,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from './src/Login';
import DrawerScreen from './src/Drawer';
import TabNavigatorScreen from './src/TabNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens()
const Stack = createStackNavigator();

const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export default function App() {
  return (
    <NavigationContainer ref = {navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="DrawerScreen" component={DrawerScreen} options={{headerShown: false}} />
          <Stack.Screen name="TabNavigatorScreen" component={TabNavigatorScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
 