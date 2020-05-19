import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

const Header = () => {
    return  <View style={styles.header}>
                <Text style={styles.headerText}>Estatistica Das Filas</Text>
            </View>
    
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FF005C',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '15%',
        height: 100,
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row'
    },
    headerText:{
        color: '#fff',
        fontSize: 20,
        fontSize: 50,
        fontFamily: 'Roboto',
        letterSpacing: 1,
        fontWeight: 'bold',
        marginLeft: 55
    },
});



export default Header;