import * as React from 'react';
import { Text, View, } from 'react-native';

import styles from '../styles/estatisticas-style'

const EstatisticaItens = (props) => {

    return(
        <View style={styles.box}>
            <View>
                <Text style={styles.headerFirst}>Nome da Fila:</Text>
                <Text style={styles.item}>
                    {props.item.name}
                </Text>
            </View>
            <View>
                <Text style={styles.header}>Total de Pessoas:</Text>
                <Text style={styles.item}>
                    {props.item.pessoasTotal}
                </Text>
            </View>
            <View>
                <Text style={styles.header}>Pico:</Text>
                <Text style={styles.item}>
                    {props.item.pico}
                </Text>
            </View>
            <View>
                <Text style={styles.header}>Tempo Total:</Text>
                <Text style={styles.item}>
                    {props.item.tempoTotal}
                </Text>
            </View>
            <View>
                <Text style={styles.header}>Tempo de Atendimento:</Text>
                <Text style={styles.item}>
                    {props.item.tempoAtendimento}
                </Text>
            </View>
        </View>
    )
}

export default EstatisticaItens;