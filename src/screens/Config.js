import * as React from 'react'
import { View ,Text} from 'react-native'

// Components
import Button from '../components/Button'
import Switch from '../components/SwitchOp'

// Styles
import ConfigStyles from '../styles/ConfigStyles'

export default function Config ({ navigation }) {

    return(
      <View style={ConfigStyles.container}>
          <View style={ConfigStyles.container}>
          <Switch text='Notificação'/>
          </View>
          <View style={ConfigStyles.container}>
          <Text style={ConfigStyles.textSombra}>Sobre</Text>
          <Text style={ConfigStyles.textNormal}>Versão</Text>
          </View>
      <View style={ConfigStyles.container}>
      <Button onPress={() => navigation.navigate('Home')} text='Voltar' />
      </View>
      </View>

    )
}
