import axios from 'axios'

const filasApi = axios.create({ baseURL: 'http://192.168.0.10:3333/api' })

export default filasApi;

// Working
export const criaFila = (filasApi, values) => {
    filasApi.post('/cria_fila', {
        nomeFila: values.nomeFila,
        senhaFila: values.senhaFila
      }).then((res) => {
        // handle success
        console.log(res);
      }).catch((err) => {
        // handle error
        console.log(err);
      })
}

// Working
export const listaFilas = (filasApi) => {
    filasApi.get('/lista_filas').then((res) => {
        // handle success
        console.log(res);
      }).catch((err) => {
        // handle error
        console.log(err);
      })
}

// Working
export const apagaFila = (filasApi, id) => {
    filasApi.delete(`/apaga_fila/${id}`).then((res) => {
        // handle success
        console.log(`Fila ${id} apagada`);
      }).catch((err) => {
        // handle error
        console.log(err);
      })
}

// Working
export const fila = (filasApi, values, { navigation }) => {
    filasApi.get(`/fila/${values.id}`).then((res) => {
        // handle success
        console.log(res);
      }).catch((err) => {
        // handle error
        console.log(err);
      }).then(navigation.navigate('FilaUser'))
}

// Not Tested
export const atualizaFila = (filasApi, values) => {
  filasApi.put(`/atualiza_fila/${values.id}`).then((res) => {
    // handle success
    console.log(res);
  }).catch((err) => {
    // handle error
    console.log(err);
  })
}