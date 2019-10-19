import React from 'react'
import Cabecalho from '../../components/cabecalho'
import CursoForm from '../cursos/form'
import CursoList from '../cursos/list'

export default class Curso extends React.Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo="Mazzo Cursos" />
                <div className="row">
                    <div className="col-4">
                        <CursoForm />
                    </div>
                    <div className="col-8">
                        <CursoList />
                    </div>
                </div>
            </div>
        )
    }
}