import React from 'react'
import ListaCursos from './lista-curso';

export default class ComponentState extends React.Component {

    initialState = {
        escola: 'Impata',
        cursos: ['React', 'Angular', 'JavaScript']
    }

    constructor() {
        super();
        this.state = this.initialState;
    }

    adicionar() {
        const { cursos } = this.state;
        cursos.push('Novo Curso');
        this.setState({ cursos });
    }

    render() {
        return (
            <div>
                <h5>Escola {this.state.escola}</h5>
                <button onClick={this.adicionar.bind(this)}>Adicionar</button>
                <div>
                    {this.state.cursos.map((curso, i) => 
                        <ListaCursos key={i} nomeCurso={curso} />
                    )}
                </div>
            </div>
        )
    }
}