import React, { Component } from 'react'
import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:3333/api'})

export default class Main extends Component {
    state = {
        filas: [],
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = () => {
        const response = await api.get('/lista_filas');

        this.setState({ filas: response.data.docs })
    }

    render();
}

export default api;