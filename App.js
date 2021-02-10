import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Login from './src/pages/Login'
// import SignUp from './src/pages/signUp'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


import Login from './src/pages/Login'
import SignUp from './src/pages/signUp'
import Forgot from './src/pages/Forgot'
import VerificationPassword from './src/pages/verificationPassword'
import VerificationNumber from './src/pages/verificationNumber'
import Home from './src/pages/Home'
import HomePage from './src/pages/HomePage'


export default class App extends Component {

  render() {

    return (
      

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#455a64',
          }
        }}>

          <Stack.Screen options={{headerStyle: {backgroundColor:'#455a'},headerTintColor:'#125487',headerTitleStyle:{
            fontWeight:'bold'
          } ,title:"bienvenu"}} name="Login" component={Login} />

          <Stack.Screen name = "SignUp" component = {SignUp}/>
          <Stack.Screen name = "Forgot" component = {Forgot}/>
          <Stack.Screen name = "VerificationNumber" component = {VerificationNumber}/>
          <Stack.Screen name = "VerificationPassword" component = {VerificationPassword}/>
          <Stack.Screen name = "Home" component = {Home}/>
  

        </Stack.Navigator>

      </NavigationContainer>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#455a64',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text: {
  //   color: '#ffffff',
  //   fontSize: 18,

  // }
});
 