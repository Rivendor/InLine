import * as React from 'react';
import { Text, View, } from 'react-native';

import estatisticaStyles from '../styles/estatisticas-style'

//COMPONENTES
import EstatisticaItens from './estatistica_item'

const Estatistica = (props) => {

    const items = props.filas.map((item)=>{
        return(
            <EstatisticaItens key={item.id} item={item}/>
        )
    })

    return(
        <View style={estatisticaStyles.containerItems}>  
            <View style={estatisticaStyles.eForm}>  
                <Text style={estatisticaStyles.codInput}>{items}</Text>
            </View>
        </View>
    )
}

export default Estatistica;