import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import JSON from '../../estatisticas.json'

// Components
import FilasPassadas from '../../components/filas_passadas'
import Header from '../../components/header'

function Historico () {

    state = {
        filas:JSON
    }
      
    
    return (
      <View style={styles.container}>
        <Header/>
        <FilasPassadas filas={this.state.filas}/>
      </View>
    );
}

export default Historico;

const styles = StyleSheet.create({
    container: {
      flex: 5,
      backgroundColor: '#F4F4F4',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });