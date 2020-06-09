import { StyleSheet } from 'react-native'

const ConfigStyles = StyleSheet.create({
    textNormal: {
        color: 'black',
        fontSize: 20,
    },
    textSombra: {
        color: '#756464',
        fontSize: 20,
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        backgroundColor: '#F4F4F4',
        paddingRight: 20,
        paddingLeft: 20
    },
});

export default ConfigStyles;