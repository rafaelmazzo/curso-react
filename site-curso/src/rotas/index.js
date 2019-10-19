import React, {Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Curso from '../pages/cursos'
import Contato from '../pages/contato'

export default class Rotas extends Component {
    render() {
        return (
            <Switch>
                <Route path="/cursos" component={Curso}></Route>
                <Route path="/contato" component={Contato}></Route>
                <Route path="*" component={Curso}></Route>
            </Switch>
        )
    }
}