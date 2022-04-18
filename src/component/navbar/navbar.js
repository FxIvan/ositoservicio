import React from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'
import logo from '../imgosito/ositoicon.svg'

export const Navbar = () =>{
        /*
        <div className='container container-navbar-desktop d-flex col-md-12 pt-5 text-align-center'>
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
        */
    
    return(
        <div className='container-fluid mt-2 row container-navbar-desktop'>
            <div className='logo-navbar col-sm-8'>
                <Link to={'/'}><img src={logo}/></Link>
            </div>
            <div className='col-sm-4 navbar-lista-desktop align-items-center d-flex'>
                <ul className='col-sm-12 d-flex justify-content-evenly m-auto'>
                    <li><Link to={'/objetivos'}>OBJETIVOS</Link></li>
                    <li><Link to={'/precios'}>PRECIOS</Link></li>
                    <li><Link to={'/contacto'}>CONTACTO</Link></li>
                </ul>
            </div>
        </div>
    )
}