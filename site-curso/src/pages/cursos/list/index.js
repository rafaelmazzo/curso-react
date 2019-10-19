import React from 'react';
export default class CursoList extends React.Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nome Curso</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Angular</td>
                        <td>Lorem Ipsum dorlor sit amet</td>
                        <td>R$ 1.500,00</td>
                        <td>link | link | link</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}