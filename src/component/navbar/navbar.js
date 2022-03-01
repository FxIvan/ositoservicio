import React from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'

import logo from '../imgosito/logoPNG.png'

export const Navbar = () =>{
    return(
        <div className='container container-navbar-desktop d-flex col-md-12 pt-5 pb-5 text-align-center'>
            <div className='navbar-web-desktop col-md-2'>
                <Link to={'/'}><img src={logo} alt='logo navbar'/></Link>
            </div>
            <div className='navbar-lista-desktop col-md-10'>
                <ul className='d-flex justify-content-around'>
                    <li><Link to={'/objetivos'}>OBJETIVOS</Link></li>
                    <li><Link to={'/precios'}>PRECIOS</Link></li>
                    <li><Link to={'/contacto'}>CONTACTO</Link></li>
                </ul>
            </div>
        </div>
    )
}