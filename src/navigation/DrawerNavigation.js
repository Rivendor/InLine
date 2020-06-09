import React from 'react'

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


// Screen Navigations
import HomeNavigation from './HomeNavigation'
import FilaAdminNavigation from './FilaAdminNavigation'
import HistoricoNavigation from './HistoricoNavigation'
import CriarFilaNavigator from './CriarFilaNavigation'
import ConfigNavigation from './ConfigNavigation'
import EstatisticaNavigation from './EstatisticaNavigation'

// Drawer Stack
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerStyle={{
                    backgroundColor: "#FF005C",
                    width: '50%',
                }}
                drawerContentOptions={{
                    activeTintColor: '#FF005C',
                    inactiveTintColor: 'white',
                    activeBackgroundColor: 'white'
                }}
                overlayColor='transparent'
            >
                <Drawer.Screen
                    name="Home"
                    component={HomeNavigation}
                    options={{
                        title: 'Principal'
                    }}
                />
                <Drawer.Screen
                    name="FilaAdmin"
                    component={FilaAdminNavigation}
                    options={{
                        title: 'Sua Fila'
                        }}
                />
                 <Drawer.Screen
                    name="Historico"
                    component={HistoricoNavigation}
                    options={{
                        title: 'Historico'
                        }}
                />
                <Drawer.Screen
                    name="CriarFila"
                    component={CriarFilaNavigator}
                    options={{
                        title: 'Criar Fila'
                        }}
                />
                <Drawer.Screen
                    name="Config"
                    component={ConfigNavigation}
                    options={{
                        title: 'Configuração'
                        }}
                />
            </Drawer.Navigator>
            
        </NavigationContainer>
    )
}

export default DrawerNavigation;