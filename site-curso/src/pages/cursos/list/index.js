import React from 'react';
export default class CursoList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLinhas = () => {
        const cursos = this.props.listaCurso || [];
        return cursos.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td>{curso.descricao}</td>
                <td>{curso.preco}</td>
                <td>{curso.categoria}</td>
            </tr>
        )
        );
    }


    render() {
        console.log(this.props.listaCurso)
        return (
            <div>
                <h4>Lista de cursos</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Categoria</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }
}