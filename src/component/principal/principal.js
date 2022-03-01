import React from 'react'
import { Navbar } from '../navbar/navbar'
import imgFondo from '../imgosito/portadaPNG.png'

export const Principal = () =>{
    return(
        <div>
            <div className='foto-portada'>
                <img src={imgFondo}/>
            </div>
        </div>
    )
}