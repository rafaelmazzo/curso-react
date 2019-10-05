import React from 'react'
import css from './component1.css'


export default class Component1 extends React.Component {
    constructor() {
        super();
    }
    style = {
        'font-weight':'normal',
        'color':'yellow'
    }
    render() {
        return <h2 style={this.style} className="batata">Teste Componente {this.props.batata}</h2>
    }
}