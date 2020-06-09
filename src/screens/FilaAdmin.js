import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Formik } from 'formik'

// Api
import filasApi from '../axios/Axios'
import { apagaFila } from '../axios/Axios'

// Components
import Button from '../components/Button'
import BoxContainer from '../components/BoxContainer'

// Styles
import FilaAdminStyles from '../styles/FilaAdminStyles'

export default function FilaAdmin ({ navigation, route }) {
  const [dados, setDados] = useState([]);

    useEffect(() => {
          let mounted = true;

        const { id } = route.params
        filasApi.get(`/fila/${id}`).then(res => {
        // Placeholder
        //filasApi.get(`/fila/5edd7a0a0c0def30ac8a91fb`).then(res => {
            if (mounted) {
                const dados = res.data
                //console.log(dados.nomeFila)
                setDados(dados)
            }
        }).catch(err => {
            console.log(err)
        })

        return () => mounted = false;
    }, [])


    return (
     <View style={FilaAdminStyles.container}>
      <Text style={[FilaAdminStyles.textNormal, { fontSize: 20 }]}>Nome da Fila</Text>
      <BoxContainer height={50}>
        <Text style={[FilaAdminStyles.textNormal, { fontSize: 20, marginTop: 10 }]}>{dados.nomeFila}</Text>
      </BoxContainer>
      <Text style={[FilaAdminStyles.textNormal, { fontSize: 20 }]}>Pessoas na Fila</Text>
      <BoxContainer height={50}>
        <Text style={[FilaAdminStyles.textNormal, { fontSize: 20, marginTop: 10 }]}>{dados.qtdPessoas}</Text>
      </BoxContainer>
      <Text style={[FilaAdminStyles.textNormal, { fontSize: 20 }]}>Código da Fila</Text>
      <BoxContainer height={50}>
        <Text style={[FilaAdminStyles.textNormal, { fontSize: 20, marginTop: 10 }]}>{dados.senhaFila}</Text>
      </BoxContainer>
      <Formik
        initialValues={{ id: dados.id }}
        onSubmit={values => apagaFila(filasApi, values.id)}
      >{({ handleSubmit, values }) => (
        <Button onPress={handleSubmit} navigate={'Home'} text='Apagar Fila' />
      )}
      </Formik>
    </View>
    )
}