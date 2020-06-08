import React from 'react'

// Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Home, FilaAdmin, FilaUser } from '../screens'

// Components
import DrawerButton from '../components/DrawerButton'

// Screen Stack
const Stack = createStackNavigator();

const FilaAdminNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="FilaAdmin">
        <Stack.Screen name="FilaAdmin" component={FilaAdmin} options={{
          title: 'Sua Fila',
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

export default FilaAdminNavigation;