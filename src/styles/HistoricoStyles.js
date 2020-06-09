import { StyleSheet } from 'react-native'

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-start",
        backgroundColor: '#F4F4F4',
    },
    item:{
       padding: 25,
       color: '#000',
       fontSize: 25,
       fontFamily: 'Roboto',
       letterSpacing:1,
       fontWeight: 'bold'
    },
    box:{
        borderBottomWidth: 1,
        borderTopWidth: 1,
    }
});

export default HomeStyles;