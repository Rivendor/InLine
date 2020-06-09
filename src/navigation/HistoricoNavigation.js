import React from 'react'

// Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Historico,Estatistica } from '../screens'

// Components
import DrawerButton from '../components/DrawerButton'

// Screen Stack
const Stack = createStackNavigator();

const HistoricoNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="Historico">
        <Stack.Screen name="Historico" component={Historico} options={{
          title: 'Historico',
          headerStyle: {
            backgroundColor: '#FF005C',
            height: 80,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 40,
            fontFamily: 'Roboto',
            letterSpacing: 1,
            fontWeight: 'bold',
          },
          headerLeft: () => <DrawerButton />
        }} />

        <Stack.Screen name="Estatistica" component={Estatistica} options={{
          title: 'Estatisca',
          headerStyle: {
            backgroundColor: '#FF005C',
            height: 80,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 40,
            fontFamily: 'Roboto',
            letterSpacing: 1,
            fontWeight: 'bold',
          },
          headerLeft: () => <DrawerButton />
        }} />
      </Stack.Navigator>
  );
}

export default HistoricoNavigation;