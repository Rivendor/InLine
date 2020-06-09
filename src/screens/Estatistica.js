import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'

// Components
import Button from '../components/Button'
import BoxContainer from '../components/BoxContainer'

// Styles
import EstatisticaStyles from '../styles/EstatisticaStyles'

// Axios
import filasApi from '../axios/Axios'

export default function Estatistica({ navigation, route }) {

    const [dados, setDados] = useState([])

    useEffect(() => {
        let mounted = true;

        const { id } = route.params

        console.log(id)

        filasApi.get(`/fila/${id}`).then(res => {
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
        <View style={EstatisticaStyles.containerFlex}>
            <View style={EstatisticaStyles.tpForm}>
            <Text style={[EstatisticaStyles.textNormal, { fontSize: 20 }]}>      Nome da Fila: </Text>
                        <BoxContainer height={50}>
                            <Text style={[EstatisticaStyles.textNormal, { fontSize: 20 }]}>{dados.nomeFila}</Text>
                        </BoxContainer>
                        <Text style={[EstatisticaStyles.textNormal, { fontSize: 20 }]}>      Total de Pessoas: </Text>
                        <BoxContainer height={50}>
                            <Text style={[EstatisticaStyles.textNormal, { fontSize: 20 }]}>{dados.qtdPessoas}</Text>
                        </BoxContainer>
                        <Text style={[EstatisticaStyles.textNormal, { fontSize: 20 }]}>      Pico: </Text>
                        <BoxContainer height={50}>
                            <Text style={[EstatisticaStyles.textNormal, { fontSize: 20 }]}>{dados.pico}</Text>
                        </BoxContainer>
                        <Text style={[EstatisticaStyles.textNormal, { fontSize: 20 }]}>      Senha da Fila: </Text>
                        <BoxContainer height={50}>
                            <Text style={[EstatisticaStyles.textNormal, { fontSize: 20 }]}>{dados.senhaFila}</Text>
                        </BoxContainer>
                    </View>
                    <Button onPress={() => navigation.goBack()} text='Voltar' />
                </View>
  );


}