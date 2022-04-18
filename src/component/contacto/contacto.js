import React from 'react'
import facebook from '../imgosito/facebook-icono.svg'
import instagram from '../imgosito/instagram-icono.svg'
import whatsapp from '../imgosito/whatsapp-icono.svg'

export const Contacto = () => {
  return (
    <div className="contact-container">
      <div className="row col-sm-12 text-center">
        <div className="col-sm-3 row">
          <div className="background-contact col-sm-3"></div>
        </div>
        <div className="col-sm-9 container">
          <div className="text-center">
            <h2>Contacto</h2>
          </div>
          <div>
            <div>
              <div className='col-sm-12 d-grid numero-desktop'>
                <h3>Numeros</h3>
                <span>+54 1136887781</span>
                <span>+54 1111111111</span>
              </div>
              <div className='d-grid correos-desktop'>
                <h3>Correos</h3>
                <span>almendraivan@gmail.com</span>
                <span>almendra@devalmendra.online</span>
              </div>
            </div>
            <div className="redes-desktop">
              <div>
                <h3>Redes</h3>
              </div>
              <div className="icono-desktop-contact row container text-center m-auto col-sm-12">
                <div className="col-sm-12 d-flex">
                  <a href="">
                    <img src={whatsapp} />
                  </a>
                  <a href="">
                    <img src={instagram} />
                  </a>
                  <a href="">
                    <img src={facebook} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
