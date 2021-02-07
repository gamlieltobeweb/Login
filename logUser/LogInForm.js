import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import axios from 'axios';

export default class LogInForm extends Component {
    constructor(props) {
		super(props)
    this.state = {
        userEmail: '',
        userPassword: '',
        redirect:false
    }
}

    userLogin = async (e) => {

        e.preventDefault();

        const { userEmail } = this.state;
        const { userPassword } = this.state;


        if (userEmail.length == 0 || userPassword.length == 0) {
            alert("text input empty")
        } else {
            if (!userEmail.includes("@")) {
                alert("enter email correctly")
            } else {



                let Data = {

                    email: userEmail,
                    pass: userPassword,
                }
      
                console.log(Data)
              await  fetch('http://localhost/api/login.php', {

                	mode: 'cors',
                	method: 'POST',
                	// header: {
                	// 	'Accept': 'application/json',
                	// 	'Content-type': 'application/json',
                	// 	'Access-Control-Allow-Origin': '*'

                	// },


                	body: JSON.stringify(Data)
                	// body: Data
                })
                .then((response) => {
                let resp  = response;
                console.log(resp)
                // .then((responseJson) => {
                // 	console.log(responseJson)
                // })
                })
                .catch((error) => {
                    // console.error(error.message);
                    console.warn(error)
                    // alert("error")
                });



                // header= {
                //     		'Accept': 'application/json',
                //     		'Content-type': 'application/json',
                //     		'Access-Control-Allow-Origin':'*'},

                //        axios({
                //             method: 'POST',
                //             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                //             url: 'http://localhost/api/login.php',
                //             body: JSON.stringify(Data)
                //           }).then(function (response) {
                //             console.log("data",data);
                //             console.log("response",response);
                //           })




            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    onChangeText={userEmail => this.setState({ userEmail })}
                    returnKeyType='next'
                    underlineColorAndroid="transparent"
                    placeholder='enter your email'
                    style={styles.input} />




                <TextInput
                    returnKeyType='go'
                    secureTextEntry
                    placeholder='enter your password'
                    onChangeText={userPassword => this.setState({ userPassword })}
                    style={styles.input}
                />

                <TouchableOpacity
                
                    style={styles.buttonContainer}
                    onPress={this.userLogin}
                >

                    <Text style={styles.buttonText}>LogIn</Text>



                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    }, input: {
        borderRadius: 15,
        lineHeight: 14,
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 20,
        // width:250,
        opacity: 0.5,
        color: '#000',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 20,
        justifyContent: 'center',
        borderRadius: 15
        // alignContent:'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#000',
        fontWeight: '700'
    }
})
