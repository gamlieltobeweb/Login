import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View, Button, TextInput, TouchableOpacity
} from 'react-native';


export default class register extends Component {

	static navigationOptions = ({ navigation }) => ({
		title: 'Register',
		headerRight:

			<TouchableOpacity
		
				onPress={() => navigation.navigate('Home')}
				style={{ margin: 10, backgroundColor: 'orange', padding: 10 }}>
				<Text style={{ color: '#ffffff' }}>Home</Text>
			</TouchableOpacity>

	});

	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			userPrenom: '',
			userEmail: '',
			userPassword: ''
		}
	}

	userRegister = () => {
		//alert('ok'); // version 0.48

		const { userName } = this.state;
		const { userPrenom } = this.state;
		const { userEmail } = this.state;
		const { userPassword } = this.state;

		if (userName.length == 0 || userPrenom.length == 0 || userPassword.length == 0) {
			alert("text input empty")
		} else {
			if (!userEmail.includes("@")) {
				alert("enter email correctly")
			} else {



				let Data = {
					nom: userName,
					prenom: userPrenom,
					email: userEmail,
					pass: userPassword,
				}
				fetch('http://localhost/api/server.php', {

					mode: 'cors',
					method: 'post',
					header: {
						'Accept': 'application/json',
						'Content-type': 'application/json',
						'Access-Control-Allow-Origin': '*'

					},


					body: JSON.stringify(Data)
				})
					.then((response) => console.log(response))
					// .then((responseJson) => {
					// 	alert(JSON.stringify(responseJson))
					// })
					.catch((error) => {
						// console.error(error.message);
						console.warn(error)
						alert("error")
					});
			}

		}
	}

	render() {
		return (


			<View style={styles.container}>

				<TextInput
					placeholder="Enter Name"
					style={{
						width: 250, margin: 10, borderColor: "#333",
						borderWidth: 1
					}}
					underlineColorAndroid="transparent"
					onChangeText={userName => this.setState({ userName })}

				/>
				<TextInput
					placeholder="Enter LastName"
					style={{
						width: 250, margin: 10, borderColor: "#333",
						borderWidth: 1
					}}
					underlineColorAndroid="transparent"
					onChangeText={userPrenom => this.setState({ userPrenom })}

				/>
				<TextInput
					placeholder="Enter Email"
					style={{
						width: 250, margin: 10, borderColor: "#333",
						borderWidth: 1
					}}
					underlineColorAndroid="transparent"
					onChangeText={userEmail => this.setState({ userEmail })}
				/>
				<TextInput
					placeholder="Enter Password"
					style={{
						width: 250, margin: 10, borderColor: "#333",
						borderWidth: 1
					}}
					underlineColorAndroid="transparent"
					onChangeText={userPassword => this.setState({ userPassword })}
				/>

				<TouchableOpacity
					onPress={this.userRegister}
					style={{
						width: 250, padding: 10, backgroundColor: 'magenta',
						alignItems: 'center'
					}}>
					<Text style={{ color: '#fff' }}>Signup</Text>
				</TouchableOpacity>

			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 60,
		// justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});

AppRegistry.registerComponent('register', () => register);
