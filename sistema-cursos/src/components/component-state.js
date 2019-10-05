import React from 'react'
import ListaCursos from './lista-curso';
import ComponenteNome from './component-nome';
import {Link} from 'react-router-dom';

export default class ComponentState extends React.Component {

    initialState = {
        escola: 'Impata',
        cursos: ['React', 'Angular', 'JavaScript']
    }
    count = 1;

    constructor() {
        super();
        this.state = this.initialState;
    }

    adicionar() {
        const { cursos } = this.state;
        cursos.push('Novo Curso');
        ++this.count
        const state = { escola: "Impacta" + this.count, cursos }
        this.setState(state);
    }

    render() {
        return (
            <div>
                <h5>Escola </h5>
                <ComponenteNome value={this.state.escola} />
                <button onClick={this.adicionar.bind(this)}>Adicionar</button>
                <div>
                    {this.state.cursos.map((curso, i) =>
                        <ListaCursos key={i} nomeCurso={curso} />
                    )}
                </div>
                <Link to={'/'}>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </Link>
            </div>
        )
    }
}