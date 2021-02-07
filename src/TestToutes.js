import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
// import {Router , Scene , Stack} from 'react-native-router-flux'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login'
import SignUp from './pages/signUp'
// import Logo from './components/Logo'

// import ViewTest from '../ViewTest'

// import Form from './components/Form'
const Stack = createStackNavigator();


export default class Test extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>

                    <Stack.Screen name = "Login" component = {Login}/>

                </Stack.Navigator>

            </NavigationContainer>

        )
    }
}

// const styles = StyleSheet.create({})
