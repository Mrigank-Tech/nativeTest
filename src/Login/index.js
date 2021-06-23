// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  ToastAndroid
} from "react-native";

const adminRole = {userEmail : 'admin@gmail.com', userPassword : '123456'};
const userRole = {userEmail : 'user@gmail.com', userPassword : '123456'};

export default function Login({route, navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    let credentials = {userEmail : email, userPassword : password}
    console.log(credentials)
    console.log(adminRole)
    console.log(userRole)
    if(!email){
        ToastAndroid.showWithGravityAndOffset(
            'Please enter email',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    }
    else if(!password){
        ToastAndroid.showWithGravityAndOffset(
            'Please enter password',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    }
    else{
        if(credentials.userEmail == adminRole.userEmail && credentials.userPassword == adminRole.userPassword ){
            navigation.replace('DrawerScreen')
        }else if(credentials.userEmail == userRole.userEmail && credentials.userPassword == userRole.userPassword){
            navigation.replace('TabNavigatorScreen')
        }else{
            ToastAndroid.showWithGravityAndOffset(
                'Email or Password is incorrect.',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50
            );
        }
    }
  }
 
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={{uri : ''}} /> */}
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={()=>onSubmit()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});