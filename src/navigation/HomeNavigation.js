import React from 'react'

// Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Home, FilaUser } from '../screens'

// Components
import DrawerButton from '../components/DrawerButton'

// Screen Stack
const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{
        title: 'InLine',
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
      <Stack.Screen name="FilaUser" component={FilaUser} options={{
        title: 'Fila',
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

export default HomeNavigation;