import React from 'react'

export default class ListaCursos extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <ul>
                <li>{this.props.nomeCurso}</li>
            </ul>
        )
    }
}