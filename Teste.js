import * as React from 'react'
import { Text, View, TextInput, StyleSheet} from 'react-native'
import TesteItem from './TesteItem'


const Teste = (props) => {
  
    const items = props.filas.map((item)=>{
        return(
            <TesteItem key={item.id} item={item}/>
        )
    })


    return( 
                <View style={styles.filasPassadasBox}>{items}</View>
    ) 
}

const styles = StyleSheet.create({
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

export default Teste;