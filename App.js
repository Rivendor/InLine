import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import JSON from './estatisticas.json'

// Components
import Header from './components/header'
import TelaPrincipal from './components/tela_principal'
import FilasPassadas from './components/filas_passadas'

function PrincipalScreen() {
  return (
    <View style={style.container}>
        <Header/>
        <TelaPrincipal/>
      </View>
  );
}

function HistoricoScreen() {
  
  state = {
    filas:JSON
  }
  

  return (
    <View style={style.container}>
        <Header/>
        <FilasPassadas filas={this.state.filas}/>
      </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={PrincipalScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*
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
*/

export default App;

const style = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
