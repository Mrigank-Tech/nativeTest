import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigate } from '../../App';
  
function Task({ navigation }) {
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Task Screen.</Text>
            </View>
        </>
    );
}

function Profile({ navigation }) {
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen.</Text>
            </View>
        </>
    );
}

function Logout({ navigation }) {
    navigate('Login')
    return(
        null
    )
}

const Tab = createBottomTabNavigator();

export default function TabNavigatorScreen() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Task" component={Task} />
        <Tab.Screen name="Logout" component={Logout} />
      </Tab.Navigator>
  );
}