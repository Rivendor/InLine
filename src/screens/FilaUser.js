import React, { Component } from 'react'
import { Text, View, TextInput} from 'react-native'

// Api
import filasApi from '../axios/api'

// Components
import Button from '../components/Button'
import BoxContainer from '../components/BoxContainer'

// Styles
import FilaUserStyles from '../styles/FilaUserStyles'

export default class FilaUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            JSON: []
        }
    }

    componentDidMount(){
        filasApi.get(`/fila/5edd7a0a0c0def30ac8a91fb`).then(res => {
            const JSON = res.data
            this.setState(JSON)
          }).catch(err => {
            console.log(err)
          })
    }

        render() {
            return (
                <View style={FilaUserStyles.container}>
                    <BoxContainer height={200}>
                        <Text style={[FilaUserStyles.textNormal, {fontSize: 20}]}>Você está na fila:</Text>
                        <Text style={[FilaUserStyles.textNormal, {fontSize: 26}]}>{this.state.nomeFila}</Text>
                        <Text style={[FilaUserStyles.textStyled, {fontSize: 32}]}>Sua posição na fila é</Text>
                        <Text style={[FilaUserStyles.textStyled, {fontSize: 50}]}>2/{this.state.qtdPessoas}</Text>
                    </BoxContainer>
                    <BoxContainer height={100}>
                        <Text style={[FilaUserStyles.textNormal, {fontSize: 20}]}>Tempo de espera estimado por pessoa</Text>
                        <Text style={[FilaUserStyles.textNormal, {fontSize: 32}]}>5 minutos</Text>
                    </BoxContainer>
                    <Button navigate={'Home'} text='Sair da Fila'/>
                </View>
            )
        }
}