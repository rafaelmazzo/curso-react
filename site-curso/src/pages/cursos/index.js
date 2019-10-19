import React from 'react'
import Cabecalho from '../../components/cabecalho'
import Cadastro from './cadastro';


export default class Curso extends React.Component {
    
    render() {        
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo="Mazzo Cursos" />
                <Cadastro />
            </div>
        )
    }
}