import * as React from 'react'

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from './src/screens/home'
import Historico from './src/screens/telaHistorico'
import Estatisticas from './src/screens/telaEstatisticas'

// Screen Stack
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={Home} options={{
          title: 'InLine',
          headerStyle:{
              backgroundColor: '#FF005C',
              height: 100,
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
              fontSize: 50,
              fontFamily: 'Roboto',
              letterSpacing: 1,
              fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name="Historico" component={Historico} options={{
          title: 'Histórico de Filas',
          headerStyle:{
              backgroundColor: '#FF005C',
              height: 100,
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
              fontSize: 32,
              fontFamily: 'Roboto',
              letterSpacing: 1,
              fontWeight: 'bold',
          }
        }}/>
        <Stack.Screen name="Estatisticas" component={Estatisticas} options={{
          title: 'Estatísticas de Fila',
          headerStyle:{
              backgroundColor: '#FF005C',
              height: 100,
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
              fontSize: 32,
              fontFamily: 'Roboto',
              letterSpacing: 1,
              fontWeight: 'bold',
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;