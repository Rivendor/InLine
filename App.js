import React, {Component} from 'react'
import axios from 'axios';

// Navigation
import Navigation from './src/navigation/Navigation'
import Teste from './Teste'

class App extends Component{

  state = {
    filas:[]
}

componentDidMount() {
    axios.get(`http://10.0.0.2:3333/api/fila`)
       .then(res => {
        this.setState({ filas: res.data });
       })
}
  render(){
    return(
      <Teste filas = {this.state.filas}/>
    //  <Navigation/>
    );
  }
}

export default App;