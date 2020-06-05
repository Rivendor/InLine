import React from 'react'
import { Formik } from 'formik'
import { Text, View } from 'react-native'

// Styles
import HomeStyles from '../styles/HomeStyles'

// Components
import Button from '../components/Button'
import Input from '../components/Input'

const FormikTest = ({ navigation }) => {
    return (
        <View style={HomeStyles.container}>
            <View style={HomeStyles.tpForm}>
                <Text>Teste de Formik:</Text>
                <Formik
                    initialValues={{ nomeFila: '', senhaFila: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        handleChange, handleBlur, handleSubmit, values
                    }) => (
                            <View>
                                <Input
                                    onChangeText={handleChange('nomeFila')}
                                    onBlur={handleBlur('nomeFila')}
                                    value={values.nomeFila}
                                />
                                <Input
                                    onChangeText={handleChange('senhaFila')}
                                    onBlur={handleBlur('senhaFila')}
                                    value={values.senhaFila}
                                />
                                <Button onPress={handleSubmit} text="Enviar" />
                            </View>
                        )}
                </Formik>
            </View>
        </View>
    );
}

export default FormikTest;