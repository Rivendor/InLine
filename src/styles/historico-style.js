import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 5,
      backgroundColor: '#F4F4F4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item:{
      padding: 20,
      color: '#000',
      fontSize: 25,
      fontFamily: 'Roboto',
      letterSpacing: 1,
      fontWeight: 'bold',
    },
    box:{
        borderTopWidth:1,
    },
    filasPassadas: {
      backgroundColor: '#eee',
      width: '100%',
      height: '85%',
      
    },
    filasPassadasText:{
        alignItems: 'center',
        padding: 30,
        color: '#000',
        fontSize: 30,
        fontFamily: 'Roboto',
        letterSpacing: 1,
        fontWeight: 'bold',
    },
});