import * as React from 'react'

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import {Home, FilaAdmin, FilaUser} from '../screens'

// Screen Stack
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          title: 'InLine',
          headerStyle:{
              backgroundColor: '#FF005C',
              height: 80,
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
              fontSize: 50,
              fontFamily: 'Roboto',
              letterSpacing: 1,
              fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name="FilaUser" component={FilaUser} options={{
          title: 'Fila',
          headerStyle:{
              backgroundColor: '#FF005C',
              height: 80,
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
              fontSize: 40,
              fontFamily: 'Roboto',
              letterSpacing: 1,
              fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name="FilaAdmin" component={FilaAdmin} options={{
          title: 'Sua Fila',
          headerStyle:{
              backgroundColor: '#FF005C',
              height: 80,
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
              fontSize: 40,
              fontFamily: 'Roboto',
              letterSpacing: 1,
              fontWeight: 'bold',
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;