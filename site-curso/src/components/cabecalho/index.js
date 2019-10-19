import React from 'react'

export default class Cabecalho extends React.Component {

    render() {
        return (
            <header className="pb-2 mt-4 mb-2 border-bottom">
                <h2>
                    <strong>{this.props.titulo}</strong><br />
                    <small>{this.props.subtitulo}</small></h2>
            </header>
        )
    }
}