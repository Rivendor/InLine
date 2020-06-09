import React from 'react'
import { StyleSheet, View} from 'react-native'

const BoxContainer = (props) => {
    return(
        <View style={[styles.boxFila, {height: props.height, alignItems: props.alignItems}]}>
            {props.children}
        </View>
    )
}

export default BoxContainer;

const styles = StyleSheet.create({
    boxFila:{
        width: '100%',
        backgroundColor: 'white',
        
        justifyContent: 'center',
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