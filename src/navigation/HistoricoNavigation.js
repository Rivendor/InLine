import React from 'react'

// Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Historico } from '../screens'

// Components
import DrawerButton from '../components/DrawerButton'

// Screen Stack
const Stack = createStackNavigator();

const HomeNavigation = () => {
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
          fontSize: 50,
          fontFamily: 'Roboto',
          letterSpacing: 1,
          fontWeight: 'bold',
        },
        headerLeft: () => <DrawerButton />
      }} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;