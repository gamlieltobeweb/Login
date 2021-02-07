import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image,KeyboardAvoidingView ,TextInput} from 'react-native'

import LogInForm from './LogInForm'

export default class Login extends Component {
	render() {
		return (
			<View style={styles.container}>




			<View style={styles.logoContainer} ></View>
			<Image style = {styles.logo} source = {require('../image/logo_OC.jpg')}/>
			<Text style={styles.title}>LogIn OCTV</Text>

			<LogInForm/>
		
			
				
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// marginTop:190,
		// alignItems: 'center',
		// // backgroundColor: '#3498db',
		backgroundColor: '#3498db',
	},
	logo:{
		width:100,
		height:100
	},
	logoContainer:{
		alignItems:'center',
		flexGrow:1,
		justifyContent:'center'
	},
	title:{
		color:'#00BFFF',
		marginTop:10,
		width:150,
		textAlign:'center',
		opacity:0.9

	},
	input: {
        borderRadius:15,
        lineHeight: 14,
        height: 40,
        backgroundColor: '#00BFFF',
        marginBottom: 10,
        // width:250,
        opacity: 0.5,
        color: '#fff',
        paddingHorizontal: 120
}
})
