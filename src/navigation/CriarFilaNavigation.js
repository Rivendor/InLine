import React from 'react'

// Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { CriarFila } from '../screens'

// Components
import DrawerButton from '../components/DrawerButton'

// Screen Stack
const Stack = createStackNavigator();

const CriarFilaNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="CriarFila">
        <Stack.Screen name="CriarFila" component={CriarFila} options={{
          title: 'CriarFila',
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

export default CriarFilaNavigation;