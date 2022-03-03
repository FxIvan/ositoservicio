import React from 'react'
import imgFondo from '../imgosito/portadaPNG.png'
import nosotrosImg from '../imgosito/nosotrosLogo.png'

export const Principal = () =>{
    return(
        <div>
            <div className='foto-portada'>
                <img src={imgFondo}/>
            </div>
            <div>
                <div className='text-center mt-4. pb-4'>
                    <h2>Nosotros</h2>
                </div>
                <div className='container row m-auto nosotros-desktop mb-3'>
                        <img src={nosotrosImg} className='text-center col-sm-3'/>    
                        <p className='col-sm-9'>Somos un grupo de amigos que brinda servicio de intermediarias entre el consumidor y vendedor, evitando problemas con la seguridad y tiempo tanto para el consumidor como el vendedor, nuestra idea nació debido a que en la pandemia y antes de la pandemia las estafas online era recurrente para el consumidor que compraba online a través de la redes sociales(facebook, instagram, etc), resultaba que llegan a pagar el producto pero el producto no llega y terminan perdiendo dinero. Debido a este problema creamos un servicio donde el consumidor deposita el dinero en una cuenta perteneciente a servicios osito y cuando el producto llegue nosotros le depositamos al vendedor evitando estafas.</p>
                </div>
            </div>
        </div>
    )
}