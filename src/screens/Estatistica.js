import React, { useState, useEffect } from 'react'
import { Text, View, TextInput } from 'react-native'

// Components
import Button from '../components/Button'

// Styles
import EstatisticaStyles from '../styles/EstatisticaStyles'

export default function Estatistica({ navigation, route }) {

    const [dados, setDados] = useState([])

    useEffect(() => {
        let mounted = true;

        const { id } = route.params

        filasApi.get(`/fila/5edd7a0a0c0def30ac8a91fb`).then(res => {
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