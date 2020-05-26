import * as React from 'react';
import { Text, View } from 'react-native';

import historicoStyles from '../styles/historico-style'

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

export default FilasPassadas;