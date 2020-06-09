import * as React from 'react'
import { Text, View, TextInput} from 'react-native'
import { Formik } from 'formik'

// Styles
import CriarFilaStyles from '../styles/CriarFilaStyles'

// Components
import Button from '../components/Button'
import Input from '../components/Input'

const CriarFila = ({ navigation }) => {
  return (
    <View style={CriarFilaStyles.container}>
      <Formik
        initialValues={{ nomeFila: '' }}
        onSubmit={async values => {
          await filasApi.post('/cria_fila', {
            filaName: values
          }).then((res) => {
            navigation.navigate('FilaUser', { id: fila.id })
          }).catch((err) => {
            // handle error
            console.log(err);
          })
        }}
      >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={CriarFilaStyles.tpForm}>
          <Text>Digite o nome da Fila:</Text>
           <Input
              onChangeText={handleChange('senhaFila')}
              onBlur={handleBlur('NomeFila')}
              value={values.nomeFila}
           />
         <Button onPress={handleSubmit} text='Enviar' />
        </View>
       )}
      </Formik>
    </View>
  );
}

export default CriarFila;