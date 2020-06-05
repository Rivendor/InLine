import * as React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = () => {
    return(
        <TextInput style={styles.codInput}/>
    )
}

export default Input;

const styles = StyleSheet.create({
    codInput:{
        height: 40,
        width: 200,
        backgroundColor: 'white',
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        shadowOffset: {
            width: 0,
            height: -50,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 5
    },
})