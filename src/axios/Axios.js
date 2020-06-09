import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

const filasApi = axios.create({ baseURL: 'http://192.168.0.10:3333/api' })

export default filasApi;

// Working
export const criaFila = async (filasApi, values) => {
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
export const listaFilas = async (filasApi) => {
  filasApi.get('/lista_filas').then((res) => {
    // handle success
    console.log(res);
  }).catch((err) => {
    // handle error
    console.log(err);
  })
}

// Working
export const apagaFila = async (filasApi, id) => {
  filasApi.delete(`/apaga_fila/${id}`).then((res) => {
    // handle success
    console.log(`Fila ${id} apagada`);
  }).catch((err) => {
    // handle error
    console.log(err);
  })
}

// Working
export const fila = async (filasApi, values) => {
  const navigation = useNavigation()
  filasApi.get(`/fila/${values.id}`).then((res) => {
    // handle success
    console.log(res);
  }).catch((err) => {
    // handle error
    console.log(err);
  }).then(navigation.navigate('FilaUser'))
}

// Not Tested
export const atualizaFila = async (filasApi, values) => {
  filasApi.put(`/atualiza_fila/${values.id}`).then((res) => {
    // handle success
    console.log(res);
  }).catch((err) => {
    // handle error
    console.log(err);
  })
}

export const incQtd = async (filasApi, fila) => {
  const inc = fila.qtdPessoas + 1
  filasApi.put(`/atualiza_fila/${fila.id}`, { qtdPessoas: inc}).then((res) => {
    // handle success
    console.log(res)
  }).catch((err) => {
    // handle error
    console.log(err);
  })
}

export const decQtd = async (filasApi, fila) => {
  const dec = fila.qtdPessoas - 1
  filasApi.put(`/atualiza_fila/${fila.id}`, { qtdPessoas: dec}).then((res) => {
    // handle success
    console.log(res)
  }).catch((err) => {
    // handle error
    console.log(err);
  })
}

export function getFila(array, values) {
  return array.find(result => result.senhaFila === values.senhaFila)
}