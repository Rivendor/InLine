import * as React from 'react'
import { StyleSheet } from 'react-native'

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from './src/screens/home'
import Historico from './src/screens/telaHistorico'
import Estatisticas from './src/screens/telaEstatisticas'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={Home} />
        <Stack.Screen name="Historico" component={Historico} />
        <Stack.Screen name="Estatisticas" component={Estatisticas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const headerStyles = StyleSheet.create({
  header: {
      backgroundColor: '#FF005C',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      height: 100,
      paddingTop: 30,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row'
  },
  headerText:{
      color: '#fff',
      fontSize: 50,
      fontFamily: 'Roboto',
      letterSpacing: 1,
      fontWeight: 'bold',
      marginLeft: 55
  },
  menuButton:{
      width: 49,
      height: 33,
      padding: 10
  }
});