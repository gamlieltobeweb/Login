import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


import axios from 'axios'

export default Refscreen = () => {



    const [username, setusername] = useState('')
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const [isSubmit, setisSubmit] = useState(false)

    useEffect(() => {
        let data = {
            email:email,
            pass:password,
            nom:username
        }
        const auth = async () => {
            axios.post('localhost:4545/user',data
            ).then(resp=>{
                console.log(resp)
                setisSubmit(false)
            }).catch(err=>{
                console.log("errrrrr",err)
            })
        }
        if (isSubmit) auth();
    }, [isSubmit])



    const usernameHandler = (text) => {
        setusername(text)
    }
    return (
        <View style={styles.container}>
            
            <TextInput placeholder="Email" style={styles.input} onChangeText={(text) => setemail(text)} />
            <TextInput placeholder="password" style={styles.input} secureTextEntry={true} autoCapitalize="none" onChangeText={(password) => setpassword(password)} />
            <View style={styles.buttoncontainer}>

                <Button title="Register" onPress={ setisSubmit(true)} />
            </View>


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        paddingVertical: 5,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        width: "55%"
    },

    buttoncontainer: {
        marginTop: 20

    }
});
