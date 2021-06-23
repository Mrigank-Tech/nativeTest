import * as React from 'react';
import { Button, Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { navigate } from '../../App';

function Logout({ navigation }) {
  navigate('Login')
  return(
      null
  )
}


function UserListScreen({ navigation }) {
    return (
      <>
      <TouchableOpacity onPress={()=>navigation.toggleDrawer()} style={{width : Dimensions.get('window').width, height : 50, backgroundColor : "green", alignItems : 'center', justifyContent : 'center' }}>
          <Text>Toggle Drawer</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>User List Screen.</Text>
      </View>
      </>
      
    );
  }

  function AddUserScreen({ navigation }) {
    return (
      <>
      <TouchableOpacity onPress={()=>navigation.toggleDrawer()} style={{width : Dimensions.get('window').width, height : 50, backgroundColor : "green", alignItems : 'center', justifyContent : 'center' }}>
          <Text>Toggle Drawer</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Add User Screen.</Text>
      </View>
      </>
      
    );
  }

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
        <>
            <Drawer.Navigator initialRouteName="UserListScreen">
                <Drawer.Screen name="UserListScreen" component={UserListScreen} />
                <Drawer.Screen name="AddUserScreen" component={AddUserScreen} />
                <Drawer.Screen name="Logout" component={Logout} />
            </Drawer.Navigator>
        </>
  );
}