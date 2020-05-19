import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import JSON from '../../estatisticas.json'

// Components
import Estatistica from '../../components/estatistica'

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

const style = StyleSheet.create({
    container: {
      flex: 5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});