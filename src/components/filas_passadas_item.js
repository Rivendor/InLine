import React from 'react'
import { Text, View } from 'react-native';

import styles from '../styles/historico-style'


const FilasPassadasItens = (props) => {
    return(
        <View style={styles.box}><Text style={styles.item}>{props.item.name}</Text></View>
    )

}

export default FilasPassadasItens;