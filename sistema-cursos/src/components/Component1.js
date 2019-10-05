import React from 'react'
import css from './component1.css'
import {Link} from 'react-router-dom'

export default class Component1 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2 className="batata">Componente 1</h2>
                <Link to={'/state'}>
                    <img src="https://gamepedia.cursecdn.com/wowpedia/thumb/e/e0/Illidan_the_Betrayer.jpg/200px-Illidan_the_Betrayer.jpg?version=428519b3a21e1ee73573851ffc0c1c07" />
                </Link>
            </div>
        )
    }
}