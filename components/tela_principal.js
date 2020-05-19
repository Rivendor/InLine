import * as React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'

const TelaPrincipal = ({ navigation }) => {

    //const onPress = () => ''

    return(
        <View style={styles.container}>
            <View style={styles.tpForm}>
                <Text>Digite o código da fila:</Text>
                <TextInput style={styles.codInput}/>
                <TouchableOpacity style={styles.tpButton} onPress={() => alert('Botão funcionando.')}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.tpButton} onPress={() => navigation.navigate('Historico')}>
                <Text style={styles.buttonText}>Criar Fila</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        backgroundColor: '#F4F4F4',
        paddingRight: 20,
        paddingLeft: 20
    },
    codInput:{
        height: 40,
        width: 200,
        backgroundColor: 'white',
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        shadowOffset: {
            width: 0,
            height: -50,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 5
    },
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
    },
    tpForm:{
        marginTop: 10,
        marginBottom: 10
    }
})

export default TelaPrincipal