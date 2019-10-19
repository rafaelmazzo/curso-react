import React from 'react'
export default class CursoForm extends React.Component {

    initialState = {
        descricaoCurso: 'Descrição do Curso'
    }

    constructor(props) {
        super(props)
        this.state = this.initialState;
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                ...this.state,
                descricaoCurso: 'Batata'
            });
        }, 1000)
    }

    alterarInput = function (descricaoCurso) {
        console.log(descricaoCurso);
        console.log(descricaoCurso.target.value);
        this.setState({ descricaoCurso })
    }

    render() {
        return (
            <div>
                <h4>Incluir Curso</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="codigoCurso">Código do curso</label>
                        <input
                            type="number"
                            className="form-control"
                            id="codigoCurso"
                            placeholder="Código do curso" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricaoCurso">Descrição do curso</label>
                        <input
                            value={this.state.descricaoCurso}
                            onChange={(e) => { this.alterarInput(e) }}
                            type="text"
                            className="form-control"
                            id="descricaoCurso"
                            placeholder="Descrição do curso" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cargaHorariaCurso">Carga horária</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cargaHorariaCurso"
                            placeholder="Carga horária do curso" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="valorCurso">Valor</label>
                        <input
                            type="text"
                            className="form-control"
                            id="valorCurso"
                            placeholder="Valor do curso" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="categoriaCurso">Example select</label>
                        <select className="form-control" id="categoriaCurso">
                            <option value=''>Selecione</option>
                            <option value='1'>Informática</option>
                            <option value='2'>Engenharia</option>
                            <option value='3'>Administração</option>
                            <option value='4'>Redes</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}