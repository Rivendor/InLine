import React from 'react';
import { StyleSheet, Text, View, TextInput, ThemeContext , TouchableOpacity, Image, Button} from 'react-native';

//COMPONENTES
import EstatisticaItens from './estatistica_item'

const Estatistica = (props) => {

    const items = props.filas.map((item)=>{
        return(
            <EstatisticaItens key={item.id} item={item}/>
        )
    })


    return(
        <View style={styles.container}>  
            <View style={styles.tpForm}>  
                <Text style={styles.codInput}>{items}</Text>
            </View>
    </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        paddingRight: 20,
        paddingLeft: 20
    },
    codInput:{
        height: 20,
        width: 200,
        marginBottom: 0,
        marginTop: 0,
        paddingLeft: 10,
        paddingRight: 10,
        shadowOffset: {
            width: 0,
            height: -50,
        },
        shadowOpacity: 0.0,
        shadowRadius: 0,
        elevation: 5,
    },
    tpForm:{
        marginTop: 5,
        marginBottom: 5
    }
})


export default Estatistica;