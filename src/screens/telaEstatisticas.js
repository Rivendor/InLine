import * as React from 'react'
import { View } from 'react-native'

import style from '../styles/estatisticas-style'

import JSON from '../json/estatisticas.json'

// Components
import Estatistica from '../components/estatistica'

function Estatisticas (){
    
    state = {
        filas:JSON
    }


    return(
        <View style={style.container}>
            <Estatistica filas={this.state.filas}/>
        </View>
    );
}

export default Estatisticas;