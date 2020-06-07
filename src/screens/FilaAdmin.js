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

const TagsFilaAdmin = ({ navigation }, JSON) => {
  return (
    <View style={FilaAdminStyles.container}>
      <Text style={[FilaAdminStyles.textNormal, { fontSize: 20 }]}>Nome da Fila</Text>
      <BoxContainer height={50}>
        <Text style={[FilaAdminStyles.textNormal, { fontSize: 20, marginTop: 10 }]}>{JSON.nomeFila}</Text>
      </BoxContainer>
      <Text style={[FilaAdminStyles.textNormal, { fontSize: 20 }]}>Pessoas na Fila</Text>
      <BoxContainer height={50}>
        <Text style={[FilaAdminStyles.textNormal, { fontSize: 20, marginTop: 10 }]}>52</Text>
      </BoxContainer>
      <Text style={[FilaAdminStyles.textNormal, { fontSize: 20 }]}>Tempo de Espera</Text>
      <BoxContainer height={50}>
        <Text style={[FilaAdminStyles.textNormal, { fontSize: 20, marginTop: 10 }]}>5 minutos</Text>
      </BoxContainer>
      <Text style={[FilaAdminStyles.textNormal, { fontSize: 20 }]}>Código da Fila</Text>
      <BoxContainer height={50}>
        <Text style={[FilaAdminStyles.textNormal, { fontSize: 20, marginTop: 10 }]}>{JSON.id}</Text>
      </BoxContainer>
      <Formik
        initialValues={{ id: JSON.id }}
        onSubmit={values => apagaFila(filasApi, values.id)}
      >{({ handleSubmit, values }) => (
        <Button onPress={handleSubmit} text='Apagar Fila' />
      )}
      </Formik>
    </View>
  );
}

export default class FilaAdmin extends Component {
  
    constructor(props){
      super(props)
      this.state = {
        JSON: []
      }
    }

  componentDidMount() {
    filasApi.get(`/fila/5edc3ff23fcecc220ca43e4a`).then(res => {
      const JSON = res.data
      this.setState(JSON)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const JSON = this.state;
    console.log(JSON.id + ' ' + JSON.nomeFila)
    return (
      <TagsFilaAdmin JSON={JSON} />
    )
  }
}