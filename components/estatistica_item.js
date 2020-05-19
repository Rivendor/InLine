import * as React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

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

const styles = StyleSheet.create({
    headerFirst:{
        marginTop:5,
        fontFamily :'Roboto',
        letterSpacing: 1,
        fontWeight: 'bold',
    },
    header:{
        marginTop: 5,
        fontFamily :'Roboto',
        letterSpacing: 1,
        fontWeight: 'bold',
    },
    item:{
        color: '#000',
        fontSize: 15,
        fontFamily: 'Roboto',
        justifyContent:'center',
        textAlign: "center",
        letterSpacing: 1,
        backgroundColor: 'white',
        alignSelf:'flex-end',
        width:200,
        paddingVertical: 8,
        elevation: 0,
        borderWidth:1,
        marginBottom: 3,
        marginTop:3,
        marginEnd:3,
        marginStart:3,
    },
    box:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        //backgroundColor:'#FF005C',
        width: 230,
        marginBottom: 5,
        borderStartWidth: 2,
        borderEndWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
    }
})

export default EstatisticaItens;