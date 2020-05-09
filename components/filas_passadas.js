import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FilasPassadasItens from './filas_passadas_item'

const FilasPassadas = (props) => {

    const items = props.filas.map((item)=>{
        return(
            <FilasPassadasItens key={item.id} item={item}/>
        )
    })


    return( 
            <View style={styles.filasPassadas}>
                <Text style={styles.filasPassadasText}> Filas Passadas </Text>
                <Text>{items}</Text>
            </View>
    ) 
}

const styles = StyleSheet.create({
    filasPassadas: {
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '85%',
    },
    filasPassadasText:{
        padding: 20,
        color: '#000',
        fontSize: 20,
        fontFamily: 'Roboto',
        letterSpacing: 1,
        fontWeight: 'bold',
    },
});

export default FilasPassadas;