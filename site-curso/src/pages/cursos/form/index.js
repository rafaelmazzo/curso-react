import React from 'react'
export default class CursoForm extends React.Component {

    initialState = {
        codigoCurso: 0,
        descricaoCurso: '',
        cargaHorariaCurso: 0,
        valorCurso: 0,
        categoriaCurso: ''
    }

    constructor(props) {
        super(props)
        this.state = this.initialState;
    }

    alteraCodigo = (codigoCurso) => {
        this.setState({ codigoCurso })
    }

    alteraDescricao = (descricaoCurso) => {
        this.setState({ descricaoCurso })
    }

    alteraCargaHoraria = (cargaHorariaCurso) => {
        this.setState({ cargaHorariaCurso })
    }
    alteraValor = (valorCurso) => {
        this.setState({ valorCurso })
    }
    alteraCategoria = (categoriaCurso) => {
        this.setState({ categoriaCurso })
    }

    render() {
        return (
            <div>
                <h4>Incluir Curso</h4>
                <form>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Código</span>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            id="codigoCurso"
                            onChange={(e) => this.alteraCodigo(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="descricaoCurso">Descrição do curso</label>
                        <input
                            type="text"
                            className="form-control"
                            id="descricaoCurso"
                            placeholder="Descrição do curso"
                            onChange={(e) => this.alteraDescricao(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cargaHorariaCurso">Carga horária</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cargaHorariaCurso"
                            placeholder="Carga horária do curso"
                            onChange={(e) => this.alteraCargaHoraria(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="valorCurso">Valor</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">R$</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="valorCurso"
                                placeholder="Valor do curso"
                                onChange={(e) => this.alteraValor(e.target.value)}
                            />
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>

                    </div>
                    <div className="form-group">
                        <label htmlFor="categoriaCurso">Categoria do curso</label>
                        <select
                            className="form-control"
                            id="categoriaCurso"
                            onChange={(e) => this.alteraCategoria(e.target.value)}
                            value={this.state.categoriaCurso} >
                            <option value=''>Selecione</option>
                            <option value='informatica'>Informática</option>
                            <option value='engenharia'>Engenharia</option>
                            <option value='administracao'>Administração</option>
                            <option value='redes'>Redes</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}