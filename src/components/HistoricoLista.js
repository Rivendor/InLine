import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//COMPONENTES
import HistoricoItens from './HistoricoItens'

const HistoricoLista = (props) => {

    const items = props.filas.map((item)=>{
        return(
            <HistoricoItens key={item.id} item={item}/>
        )
    })


    return( 
            <View style={styles.filasPassadas}>
                <Text style={styles.filasPassadasText}> Histórico de Filas </Text>
                <View style={styles.filasPassadasBox}>{items}</View>
            </View>
    ) 
}

const styles = StyleSheet.create({
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

export default HistoricoLista;