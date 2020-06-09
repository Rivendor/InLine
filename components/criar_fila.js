import * as yup from 'yup'
import { Formik } from 'formik'

import React, { Component, Fragment } from 'react';
import { StyleSheet, TextInput, Text, Button, Alert, View } from 'react-native';


const FormFila = () =>{
    return (
      <View style={styles.form}>
        <Formik
          
          initialValues={{ nome: ''}}
          onSubmit={values => Alert.alert(JSON.stringify(values))}
          validationSchema={yup.object().shape({
            nome: yup
              .string()
              .required(),
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <Fragment >
              <View>
                <TextInput
                  value={values.nome}
                  onChangeText={handleChange('nome')}
                  onBlur={() => setFieldTouched('nome')}
                  placeholder="Digite o Nome da Fila"
                />
              </View>
              {touched.nome && errors.nome &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
              }
              <Button
                title='Criar Fila'
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </Fragment>
          )}
        </Formik>
      </View>
    );

}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#eee',
    width: '100%',
    height: '85%',
  },

})

export default FormFila;