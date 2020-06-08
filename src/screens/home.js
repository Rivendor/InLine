import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Formik } from 'formik'

// Api
import filasApi from '../axios/api'
import { listaFilas, fila, criaFila, apagaFila, atualizaFila } from '../axios/api'

// Styles
import HomeStyles from '../styles/HomeStyles'

// Components
import Button from '../components/Button'
import Input from '../components/Input'

// Drawer
//import DrawerNavigation from '../navigation/DrawerNavigation'

//import Model from '../axios/model'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            JSON: []
        }
    }

    render() {
        return (
            <View style={HomeStyles.container}>
                <Formik
                    initialValues={{ senhaFila: '', id: '' }}
                    onSubmit={values =>
                        fila(filasApi, values, { navigation })
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
                            <Button onPress={handleSubmit} navigate={'FilaUser'} text='Enviar' />
                        </View>
                    )}
                </Formik>
                <Button navigate={'FilaAdmin'} text='Criar Fila' />
            </View>
        );
    }
}