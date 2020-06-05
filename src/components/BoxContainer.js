import * as React from 'react'
import { Text, StyleSheet, View} from 'react-native'

const BoxContainer = (props) => {
    return(
        <View style={[styles.boxFila, {height: props.height}]}>
            {props.children}
        </View>
    )
}

export default BoxContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        backgroundColor: 'white',
        paddingRight: 20,
        paddingLeft: 20
    },
    boxFila:{
        
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 5
    },
})