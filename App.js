import React, {Component} from 'react'
import axios from 'axios';

// Navigation
import DrawerNavigation from './src/navigation/DrawerNavigation'

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
      <DrawerNavigation />
    );
  }
}

export default App;