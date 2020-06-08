import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Formik } from 'formik'

// Api
import filasApi from '../axios/api'
import { dadosFila, listaFilas, fila, criaFila, apagaFila, atualizaFila } from '../axios/api'

// Components
import Button from '../components/Button'
import BoxContainer from '../components/BoxContainer'

// Styles
import FilaAdminStyles from '../styles/FilaAdminStyles'

export default class FilaAdmin extends Component {
  
    constructor(props){
      super(props)
      this.state = {
        JSON: []
      }
    }

  componentDidMount() {
    filasApi.get(`/fila/5edd7a0a0c0def30ac8a91fb`).then(res => {
      const JSON = res.data
      this.setState(JSON)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
     <View style={FilaAdminStyles.container}>
      <Text style={[FilaAdminStyles.textNormal, { fontSize: 20 }]}>Nome da Fila</Text>
      <BoxContainer height={50}>
        <Text style={[FilaAdminStyles.textNormal, { fontSize: 20, marginTop: 10 }]}>{this.state.nomeFila}</Text>
      </BoxContainer>
      <Text style={[FilaAdminStyles.textNormal, { fontSize: 20 }]}>Pessoas na Fila</Text>
      <BoxContainer height={50}>
        <Text style={[FilaAdminStyles.textNormal, { fontSize: 20, marginTop: 10 }]}>{this.state.qtdPessoas}</Text>
      </BoxContainer>
      <Text style={[FilaAdminStyles.textNormal, { fontSize: 20 }]}>Código da Fila</Text>
      <BoxContainer height={50}>
        <Text style={[FilaAdminStyles.textNormal, { fontSize: 20, marginTop: 10 }]}>{this.state.senhaFila}</Text>
      </BoxContainer>
      <Formik
        initialValues={{ id: this.state.id }}
        onSubmit={values => apagaFila(filasApi, values.id)}
      >{({ handleSubmit, values }) => (
        <Button onPress={handleSubmit} navigate={'Home'} text='Apagar Fila' />
      )}
      </Formik>
    </View>
    )
  }
}