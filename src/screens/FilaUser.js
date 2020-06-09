import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'

// Api
import filasApi from '../axios/Axios'
import { decQtd } from '../axios/Axios'

// Components
import Button from '../components/Button'
import BoxContainer from '../components/BoxContainer'

// Styles
import FilaUserStyles from '../styles/FilaUserStyles'

export default function FilaUser({ navigation, route }) {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        let mounted = true;

        const { id } = route.params

        filasApi.get(`/fila/${id}`).then(res => {
            if (mounted) {
                const dados = res.data
                //console.log(dados.nomeFila)
                setDados(dados)
            }
        }).catch(err => {
            console.log(err)
        })

        const interval = setInterval(() => {
            filasApi.get(`/fila/${id}`).then(res => {
                if (mounted) {
                    const dados = res.data
                    //console.log(dados.nomeFila)
                    setDados(dados)
                }
            }).catch(err => {
                console.log(err)
            })
        }, 10000)

        return () => mounted = false;
    }, [])


    return (
        <View style={FilaUserStyles.container}>
            <BoxContainer height={200} alignItems={'center'}>
                <Text style={[FilaUserStyles.textNormal, { fontSize: 20 }]}>Você está na fila:</Text>
                <Text style={[FilaUserStyles.textNormal, { fontSize: 26 }]}>{dados.nomeFila}</Text>
                <Text style={[FilaUserStyles.textStyled, { fontSize: 32 }]}>Sua posição na fila é</Text>
                <Text style={[FilaUserStyles.textStyled, { fontSize: 50 }]}>2/{dados.qtdPessoas}</Text>
            </BoxContainer>
            <Button onPress={() => {
                decQtd(filasApi, dados)
                navigation.goBack()
            }
            } text='Sair da Fila' />
        </View>
    )

}