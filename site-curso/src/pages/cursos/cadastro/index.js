import React from 'react';
import CursoForm from '../form'
import CursoList from '../list'
import axios from 'axios'

const API_URL = 'http://localhost:3200/api/curso'

export default class Cadastro extends React.Component {
    state = {
        data: []
    }
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.getCursos();
    }

    getCursos() {
        axios.get(API_URL)
            .then(retorno => this.setState({ ...this.state, data: retorno.data }))
            .catch(error => { console.log(error);})
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <CursoForm />
                </div>
                <div className="col-8">
                    <CursoList listaCurso={this.state.data} />
                </div>
            </div>
        )
    }
}