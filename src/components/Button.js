import * as React from 'react'
import { Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Button = (props) => {
    const navigation = useNavigation()

    return(
        <TouchableOpacity style={styles.tpButton} onPress={() => navigation.navigate(props.navigate)}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    tpButton:{
        width: 120,
        height: 35,
        backgroundColor: '#FF005C',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
        shadowOffset: {
            width: 0,
            height: -50,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 5
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold'
    }
})