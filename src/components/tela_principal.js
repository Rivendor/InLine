import * as React from 'react'
import { Text, View, TextInput, TouchableOpacity} from 'react-native'

import styles from '../styles/home-style'

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
            <TouchableOpacity style={styles.tpButton} onPress={() => alert('Botão funcionando.')}>
                <Text style={styles.buttonText}>Criar Fila</Text>
            </TouchableOpacity>
            <Text>Teste React Navigation:</Text>
            <TouchableOpacity style={styles.tpButton} onPress={() => navigation.navigate('Historico')}>
                <Text style={styles.buttonText}>Histírico de Filas</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TelaPrincipal