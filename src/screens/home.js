import * as React from 'react'
import { Text, View, TextInput} from 'react-native'

// Styles
import HomeStyles from '../styles/HomeStyles'

// Components
import Button from '../components/Button'

const Home = ({ navigation }) => {
  return (
    <View style={HomeStyles.container}>
        <View style={HomeStyles.tpForm}>
            <Text>Digite o código da fila:</Text>
            <TextInput style={HomeStyles.codInput}/>
            <Button onPress={() => navigation.navigate('FilaUser')} text='Enviar' />
        </View>
        <Button onPress={() => navigation.navigate('FilaAdmin')} text='Criar Fila' />
    </View>
  );
}

export default Home;