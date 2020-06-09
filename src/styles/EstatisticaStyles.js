import { StyleSheet } from 'react-native'

const EstatisticaStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        backgroundColor: '#F4F4F4',
        paddingRight: 20,
        paddingLeft: 20
    },
    containerFlex: {
        flex: 1,
        flexDirection: "column",
        paddingRight: 20,
        paddingLeft: 20
    },
    containerItem:{
        width:'100%', 
        height: 50,
        flexDirection:'column',
    },
    textNormal: {
        color: 'black',
    },
    textStyled: {
        color: '#FF005C',
    },
    codInput:{
        height: 20,
        width: 200,
        marginBottom: 0,
        marginTop: 0,
        paddingLeft: 10,
        paddingRight: 10,
        shadowOffset: {
            width: 0,
            height: -50,
        },
        shadowOpacity: 0.0,
        shadowRadius: 0,
        elevation: 5,
    },
    tpForm:{
        marginTop: 5,
        marginBottom: 5
    },

});

export default EstatisticaStyles;