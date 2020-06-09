import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Header = () => {
    return  <View style={styles.header}>
                <Text style={styles.headerText}>Inline</Text>
            </View>
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ff0084',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '15%',
    },
    headerText:{
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Roboto',
        letterSpacing: 1,
        fontWeight: 'bold',
    },
});

export default Header;