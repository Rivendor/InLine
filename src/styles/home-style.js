import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        backgroundColor: '#F4F4F4',
        paddingRight: 20,
        paddingLeft: 20
    },
    codInput:{
        height: 40,
        width: 200,
        backgroundColor: 'white',
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        shadowOffset: {
            width: 0,
            height: -50,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 5
    },
    tpButton:{
        width: 120,
        height: 35,
        backgroundColor: '#FF005C',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
        shadowOffset: {
            width: 0,
            height: -50,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 5
    },
    debugButton:{
        width: 150,
        height: 45,
        backgroundColor: '#FF005C',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
        shadowOffset: {
            width: 0,
            height: -50,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 5
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold'
    },
    tpForm:{
        marginTop: 10,
        marginBottom: 10
    },
});