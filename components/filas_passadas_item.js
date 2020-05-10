import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';


const FilasPassadasItens = (props) => {
    return(
        <Text style={styles.item}>{props.item.name}</Text>
    )

}

const styles = StyleSheet.create({
    item:{
        padding: 30,
        color: '#000',
        fontSize: 25,
        fontFamily: 'Roboto',
        letterSpacing: 1,
        fontWeight: 'bold',
    }
})

export default FilasPassadasItens;