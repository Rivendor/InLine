import * as React from 'react'
import { Text, View } from 'react-native'

// Styles
import HomeStyles from '../styles/HomeStyles'

// Components
import Button from '../components/Button'
import Input from '../components/Input'

const Home = ({ navigation }) => {
  return (
    <View style={HomeStyles.container}>
        <View style={HomeStyles.tpForm}>
            <Text>Digite o nome da fila:</Text>
            <Input />
            <Text>Digite a senha da fila:</Text>
            <Input />
            <Button onPress={() => navigation.navigate('FilaUser')} text='Enviar' />
        </View>
        <Button onPress={() => navigation.navigate('FilaAdmin')} text='Criar Fila' />
    </View>
  );
}

export default Home;