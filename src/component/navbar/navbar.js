import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../imgosito/logoWeb.svg'

export const Navbar = () =>{
    return(
        <div>
            <div>
                <Link to={'/'}><img src={logo} alt='logo navbar'/></Link>
            </div>
            <div>
                <ul>
                    <li><Link to={'/objetivos'}>OBJETIVOS</Link></li>
                    <li><Link to={'/precios'}>PRECIOS</Link></li>
                    <li><Link to={'/contacto'}>CONTACTO</Link></li>
                </ul>
            </div>
        </div>
    )
}