import * as React from 'react'
import { View, Text } from 'react-native'

// Components
import Button from '../components/Button'
import Switch from '../components/SwitchOp'

// Styles
import ConfigStyles from '../styles/ConfigStyles'

export default function Config({ navigation }) {

    return (
        <View style={ConfigStyles.container}>
            <View>
                <Switch text='Notificação' />
                <Text style={ConfigStyles.textSombra}>Sobre</Text>
                <Text style={ConfigStyles.textNormal}>Versão 1.0</Text>.
            </View>
            <View style={ConfigStyles.container}>
                <Button onPress={() => navigation.goBack()} text='Voltar' />
            </View>
        </View>

    )
}
