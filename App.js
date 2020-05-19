import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import JSON from './estatisticas.json'

//COMPONENTS
import Header from './components/header'
import FilasPassadas from './components/filas_passadas'
import FormFila from './components/criar_fila'

class App extends Component{

  state = {
    filas:JSON
  }


  render(){
    return(
      <View style={style.container}>
        <Header/>
        <FormFila/>
        {/*<FilasPassadas filas={this.state.filas}/>*/}
      </View>
    )
  }
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
