import React from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'

import logo from '../imgosito/logoWeb.svg'

export const Navbar = () =>{
    return(
        <div>
            <div className='navbar-web-desktop'>
                <Link to={'/'}><img src={logo} alt='logo navbar'/></Link>
            </div>
            <div className='navbar-lista-desktop'>
                <ul>
                    <li><Link to={'/objetivos'}>OBJETIVOS</Link></li>
                    <li><Link to={'/precios'}>PRECIOS</Link></li>
                    <li><Link to={'/contacto'}>CONTACTO</Link></li>
                </ul>
            </div>
        </div>
    )
}