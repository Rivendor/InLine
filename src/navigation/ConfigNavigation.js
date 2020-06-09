import React from 'react'

// Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Config } from '../screens'

// Components
import DrawerButton from '../components/DrawerButton'

// Screen Stack
const Stack = createStackNavigator();

const ConfigNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="Config">
        <Stack.Screen name="Config" component={Config} options={{
          title: 'Configuração',
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

export default ConfigNavigation;