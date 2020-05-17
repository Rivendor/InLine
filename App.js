import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import JSON from './estatisticas.json'

//COMPONENTS
import Header from './components/header'
import TelaPrincipal from './components/tela_principal'

class App extends Component{
  render(){
    return(
      <View style={style.container}>
        <Header/>
        <TelaPrincipal/>
      </View>
    )
  }
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
