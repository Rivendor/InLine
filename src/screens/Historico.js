import * as React from 'react'
import { Text, View, FlatList} from 'react-native'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

//COMPONENTES
import HistoricoLista from '../components/HistoricoLista'


class Historico extends React.Component{

    state = {
        filas:[]
    }

    componentDidMount() {
        axios.get(`http://localhost:3333/api/fila`)
           .then(res => {
            const filas = res.data;
            this.setState({ filas });
           })
    }
      
  
 
    render(){
        const { navigation } = this.props;
        return (
            <HistoricoLista filas={this.state.filas}/>
        );
    }
    
    
  
}

export default function(props) {
    const navigation = useNavigation();
  
    return <Historico {...props} navigation={navigation} />;
  }
