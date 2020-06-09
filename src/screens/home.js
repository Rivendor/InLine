import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Formik } from 'formik'

// Api
import filasApi from '../axios/Axios'
import { getFila, incQtd } from '../axios/Axios'

// Styles
import HomeStyles from '../styles/HomeStyles'

// Components
import Button from '../components/Button'
import Input from '../components/Input'

export default function Home({ navigation }) {

    return (
        <View style={HomeStyles.container}>
            <Formik
                initialValues={{ senhaFila: '', id: '' }}
                onSubmit={async values => {

                    await filasApi.get('/lista_filas').then((res) => {

                        const fila = getFila(res.data, values)
                        //console.log(fila.id + ' ' + fila.nomeFila)
                        incQtd(filasApi, fila)
                        navigation.navigate('FilaUser', { id: fila.id })

                    }).catch((err) => {
                        // handle error
                        console.log(err);
                    })
                }
                }
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={HomeStyles.tpForm}>
                        <Text>Digite o código da fila:</Text>
                        <Input
                            onChangeText={handleChange('senhaFila')}
                            onBlur={handleBlur('senhaFila')}
                            value={values.senhaFila}
                        />
                        <Button onPress={handleSubmit} text='Enviar' />
                    </View>
                )}
            </Formik>
        </View>
    );
}