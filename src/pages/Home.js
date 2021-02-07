import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Bienvenu  </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#455a64',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:50,
        fontWeight: "bold"
    },


})
