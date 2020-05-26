import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
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
    },
    containerItems: {
      flex: 1,
      width: '100%',
      justifyContent: "flex-start",
      alignItems: 'flex-start',
      paddingRight: 20,
      paddingLeft: 20
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
    eForm:{
        marginTop: 5,
        marginBottom: 5
    }
});