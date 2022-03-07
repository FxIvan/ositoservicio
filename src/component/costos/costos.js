import React from 'react'
import precio250 from '../imgosito/250$.svg'
import precio350 from '../imgosito/350$.svg'
import { Link } from 'react-router-dom'

export const Costos = () =>{
    return(
        <div className="precios-desktop">
          <div className="text-center mt-5 mb-5">
            <h2>COSTO DEL SERVICIO</h2>
          </div>
          <div className="container col-sm-12 row  m-auto">
            <div className="col-sm-4 m-auto">
              <div className="text-center">
                <img src={precio250} alt="precio" />
              </div>
              <div className="lista-precio-desktop-250">
                <ul>
                  <li>Atencion: Lunes a Viernes</li>
                  <li>Transacciones: 1</li>
                  <li>Duracion: 3 dias</li>
                  <li>Envios al exerior: SI</li>
                  <li>Moneda: ARS/ARS</li>
                </ul>
                <div className="text-center">
                  <p>Horario de atencion 09:00 a 18:00</p>
                </div>
              </div>
              <div className="text-center container-button-desktop">
                <Link to={'/costo/250'} className="link-button-desktop">
                  Contactar
                </Link>
              </div>
            </div>

            <div className="col-sm-4 m-auto">
              <div className="text-center">
                <img src={precio350} alt="precio" />
              </div>
              <div className="lista-precio-desktop-350">
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
                <div className="text-center">
                  <p>Horario de atencion 24hs</p>
                </div>
              </div>
              <div className="text-center container-button-desktop">
                <Link to={'/costo/350'} className="link-button-desktop">
                  Contactar
                </Link>
              </div>
            </div>
          </div>
          {/******/}
        </div>
    )
}