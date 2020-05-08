import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from 'styles';

class TelaPrincipal extends React.Component {
    static navigationOptions = {
        title: 'Tela Principal'
    };
   
    render() {
    return (
    <View style={{ 
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
    }}>
    </View>
    );
    }
}

export default TelaPrincipal;