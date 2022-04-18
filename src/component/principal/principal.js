import React from 'react'
import imgFondo from '../imgosito/OSITO.svg'
import nosotrosImg from '../imgosito/nosotrosLogo.png'
import seguridad from '../imgosito/securityUndraw.svg'
import rapidez from '../imgosito/speedUndraw.svg'
import atencion from '../imgosito/atencionUndraw.svg'
import { Costos } from '../costos/costos'
import { Formulario } from '../formulario/formulario'
export const Principal = () => {
  return (
    <div>
      <div className="foto-portada container m-auto text-center">
        <img src={imgFondo} className='titulo-osito'/>
        <div className='text-service-intermediate'>
          <h3>servicio de intermediario</h3>
        </div>
      </div>
      <div>
        <div className="text-center mt-5 pb-4">
          <h2>Nosotros</h2>
        </div>
        <div className="container row m-auto nosotros-desktop mb-3">
          <img src={nosotrosImg} className="text-center col-sm-3" />
          <p className="col-sm-9">
            Somos un grupo de amigos que brinda servicio de intermediarias entre
            el consumidor y vendedor, evitando problemas con la seguridad y
            tiempo tanto para el consumidor como el vendedor, nuestra idea nació
            debido a que en la pandemia y antes de la pandemia las estafas
            online era recurrente para el consumidor que compraba online a
            través de la redes sociales(facebook, instagram, etc), resultaba que
            llegan a pagar el producto pero el producto no llega y terminan
            perdiendo dinero. Debido a este problema creamos un servicio donde
            el consumidor deposita el dinero en una cuenta perteneciente a
            servicios osito y cuando el producto llegue nosotros le depositamos
            al vendedor evitando estafas.
          </p>
        </div>
      </div>
      <div>
        <div>
          <div className="container text-center mt-5 pb-5">
            <h2>TE BRINDAMOS</h2>
          </div>
          <div className="undraw-desktop container row m-auto text-center">
            <div className="col-sm-4">
              <div>
                <img src={seguridad} alt="seguridad" className="img-fluid" />
              </div>
              <div>
                <span>seguridad</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div>
                <img src={rapidez} alt="rapidez" className="img-fluid" />
              </div>
              <div>
                <span>rapidez</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div>
                <img src={atencion} alt="atencion" />
              </div>
              <div>
                <span>atencion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Costos />
      </div>
      <div className="container-formulario-desktop">
        <Formulario />
      </div>
      <footer>
        <div className="footer-container-desktop">
          <h3>O</h3>
        </div>
      </footer>
    </div>
  )
}
