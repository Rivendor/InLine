import * as React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'

function Home({ navigation }) {
  return (
    <View style={homeStyles.container}>
        <View style={homeStyles.tpForm}>
            <Text>Digite o código da fila:</Text>
            <TextInput style={homeStyles.codInput}/>
            <TouchableOpacity style={homeStyles.tpButton} onPress={() => alert('Botão funcionando.')}>
                <Text style={homeStyles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={homeStyles.tpButton} onPress={() => alert('Botão funcionando.')}>
            <Text style={homeStyles.buttonText}>Criar Fila</Text>
        </TouchableOpacity>
        <View>
            <Text>Teste React Navigation:</Text>
            <TouchableOpacity style={homeStyles.debugButton} onPress={() => navigation.navigate('Historico')}>
                <Text style={homeStyles.buttonText}>Histórico de Filas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.debugButton} onPress={() => navigation.navigate('Estatisticas')}>
                <Text style={homeStyles.buttonText}>Estatísticas de Filas</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default Home;

const homeStyles = StyleSheet.create({
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
    debugButton:{
        width: 150,
        height: 45,
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
});
