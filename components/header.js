import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

const Header = () => {
    return  (
    <View style={headerStyles.header}>
        <TouchableOpacity onPress={() => alert('Botão funcionando.')}>
            <Image style={headerStyles.menuButton} source={require('../assets/menu-button.png')}/>
        </TouchableOpacity>
        <Text style={headerStyles.headerText}>Inline</Text>
    </View>
    )
}

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

export default Header;