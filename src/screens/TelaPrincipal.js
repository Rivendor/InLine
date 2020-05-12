import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TelaPrincipal extends React.Component {
    static navigationOptions = {
        title: 'Tela Principal'
    };
   
    render() {
    return (
    <View>
        <Text>
            This is a text inside a view. Let's see what it looks like.
        </Text>
    </View>
    );
    }
}

export default TelaPrincipal;