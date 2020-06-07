import * as React from 'react'
import { Text, View } from 'react-native'
import { Formik } from 'formik'

// Api
import filasApi from '../services/api'
import { listaFilas, fila, criaFila, apagaFila, atualizaFila } from '../services/api'

// Styles
import HomeStyles from '../styles/HomeStyles'

// Components
import Button from '../components/Button'
import Input from '../components/Input'

const Home = ({ navigation }) => {
  return (
    <View style={HomeStyles.container}>
      <Formik
        initialValues={{ nomeFila: '', senhaFila: '', id: '5edc449d3fcecc220ca43e4c' }}
        onSubmit={values =>
          fila(filasApi, values, { navigation })
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={HomeStyles.tpForm}>
            <Text>Digite o nome da fila:</Text>
            <Input
              onChangeText={handleChange('nomeFila')}
              onBlur={handleBlur('nomeFila')}
              value={values.nomeFila}
            />
            <Text>Digite a senha da fila:</Text>
            <Input
              onChangeText={handleChange('senhaFila')}
              onBlur={handleBlur('senhaFila')}
              value={values.senhaFila}
            />
            <Button onPress={handleSubmit} text='Enviar' />
          </View>
        )}
      </Formik>
      <Button onPress={() => navigation.navigate('FilaAdmin')} text='Criar Fila' />
    </View>
  );
}

export default Home;