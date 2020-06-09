import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'

// Api
import filasApi from '../axios/Axios'


// Styles
import HistoricoStyles from '../styles/HistoricoStyles'

export default function Historico({ navigation, route }) {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        let mounted = true;

        filasApi.get(`/lista_filas`).then(res => {
            if (mounted) {
                const dados = res.data
                setDados(dados)

            }
        }).catch(err => {
            console.log(err)
        })

        return () => mounted = false;
    }, [])

    function Item({ title, id }) {
        return (
          <TouchableOpacity
            style={HistoricoStyles.box}
            onPress={() => {
                navigation.navigate('Estatistica', {id: id})
            }
            }
          >
            <Text style={HistoricoStyles.item}>{title}</Text>
          </TouchableOpacity>
        );
      }


    return (
        <View style={HistoricoStyles.container}>
        <FlatList
            data={dados}
            renderItem={({ item }) => (
            <Item
                id={item.id}
                title={item.nomeFila}
            />
            )}
            keyExtractor={item => item.id}
        />
        </View>
    )

}