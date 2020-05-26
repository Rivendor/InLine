import * as React from 'react';
import { View } from 'react-native';

import styles from '../styles/historico-style'

import JSON from '../json/estatisticas.json'

// Components
import FilasPassadas from '../components/filas_passadas'

function Historico () {

    state = {
        filas:JSON
    }
      
    
    return (
      <View style={styles.container}>
        <FilasPassadas filas={this.state.filas}/>
      </View>
    );
}

export default Historico;