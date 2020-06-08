import * as React from 'react'
import { Text, View, TextInput} from 'react-native'

// Styles
import CriarFilaStyles from '../styles/CriarFilaStyles'

// Components
import Button from '../components/Button'

const CriarFila = ({ navigation }) => {
  return (
    <View style={CriarFilaStyles.container}>
        <View style={CriarFilaStyles.tpForm}>
            <Text>Digite o Nome da Fila:</Text>
            <TextInput style={CriarFilaStyles.codInput}/>
            <Button onPress={() => navigation.navigate('FilaUser')} text='Criar Fila' />
        </View>
    </View>
  );
}

export default CriarFila;