import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'

import filasApi from './api'

/*
const JSONString = res.data
object = JSON.parse(JSONString)
array = Object.keys(object).map(filas => {
    return object[filas]
})
*/

export default class Model extends Component {

    state = {
        JSONString: []
    }// make the GET request to fetch data from the URL then using promise function to handle response.

    componentDidMount() {
        filasApi.get(`/lista_filas`).then(res => {
            const JSONString = res.data;
            this.setState({ JSONString });
        })
    }

    render() {
        const { JSONString } = this.state;
        return (
            <View>
                {
                JSONString.map(fila => <Text>{fila.nomeFila}</Text>)
                }
            </View>
        )
    }

}