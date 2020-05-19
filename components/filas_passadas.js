import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//COMPONENTES
import FilasPassadasItens from './filas_passadas_item'

const FilasPassadas = (props) => {

    const items = props.filas.map((item)=>{
        return(
            <FilasPassadasItens key={item.id} item={item}/>
        )
    })


    return( 
            <View style={historicoStyles.filasPassadas}>
                <Text style={historicoStyles.filasPassadasText}> Histórico de Filas </Text>
                <View style={historicoStyles.filasPassadasBox}>{items}</View>
            </View>
    ) 
}

const historicoStyles = StyleSheet.create({
    filasPassadas: {
        backgroundColor: '#eee',
        width: '100%',
        height: '85%',
        
    },
    filasPassadasText:{
        alignItems: 'center',
        padding: 30,
        color: '#000',
        fontSize: 30,
        fontFamily: 'Roboto',
        letterSpacing: 1,
        fontWeight: 'bold',
        
        
    },
});

export default FilasPassadas;