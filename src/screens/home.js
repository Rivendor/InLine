import * as React from 'react'
import { Text, View, TextInput, TouchableOpacity} from 'react-native'

import homeStyles from '../styles/home-style.js'

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