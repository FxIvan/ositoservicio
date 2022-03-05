import React from 'react'
import imgFondo from '../imgosito/portadaPNG.png'
import nosotrosImg from '../imgosito/nosotrosLogo.png'
import seguridad from '../imgosito/securityUndraw.svg'
import rapidez from '../imgosito/speedUndraw.svg'
import atencion from '../imgosito/atencionUndraw.svg'
import precio250 from '../imgosito/250$.svg'
import precio350 from '../imgosito/350$.svg'
import { Link } from 'react-router-dom'
export const Principal = () => {
  return (
    <div>
      <div className="foto-portada">
        <img src={imgFondo} />
      </div>
      <div>
        <div className="text-center mt-4. pb-4">
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
              <img src={seguridad} alt="seguridad" />
              <div className="pt-4">
                <span>SEGURIDAD</span>
              </div>
            </div>
            <div className="col-sm-4">
              <img src={rapidez} alt="rapidez" />
              <div className="pt-4">
                <span>Rapidez</span>
              </div>
            </div>
            <div className="col-sm-4">
              <img src={atencion} alt="atencion" />
              <div className="pt-4">
                <span>
                  Atencion <br /> <p>24/7</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="precios-desktop">
          <div className='text-center mt-5 mb-5'>
            <h2>COSTO DEL SERVICIO</h2>
          </div>
<div className='container col-sm-12 row  m-auto'>
          <div className='col-sm-4 m-auto'>
            <div className='text-center'>
              <img src={precio250} alt="precio" />
            </div>
            <div className='lista-precio-desktop-250'>
              <ul>
                <li>Atencion: Lunes a Viernes</li>
                <li>Transacciones: 1</li>
                <li>Duracion: 3 dias</li>
                <li>Envios al exerior: SI</li>
                <li>Moneda: ARS/ARS</li>
              </ul>
              <div className='text-center'>
                <p>Horario de atencion 09:00 a 18:00</p>
              </div>
            </div>
            <div className='text-center container-button-desktop'>
              <Link to={'/costo/250'}  className='link-button-desktop'>
                Contactar
              </Link>
            </div>
          </div>

          <div className='col-sm-4 m-auto'>
            <div className='text-center'>
              <img src={precio350} alt="precio" />
            </div>
            <div  className='lista-precio-desktop-350'>
              <ul>
                <li>
                  <span>Atencion: 24/7</span>
                </li>
                <li>Transacciones: 1</li>
                <li>
                  <span>Duracion: 7 dias</span>
                </li>
                <li>Envios al exerior: SI</li>
                <li>
                  <span>Moneda: ARS/ARS y USD/USD</span>
                </li>
              </ul>
              <div className='text-center'>
                <p>Horario de atencion 24hs</p>
              </div>
            </div>
            <div className='text-center container-button-desktop'>
              <Link to={'/costo/350'} className='link-button-desktop'>
                Contactar
              </Link>
            </div>
          </div>
          </div>{/******/}
        </div>
      </div>
    </div>
  )
}
