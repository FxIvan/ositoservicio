import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Formpanel = () => {
  const [dbForm, setDbForm] = useState([])

  useEffect(() => {
    const axiosGet = async () => {
      const dbDatos = await axios.get('https://ositoservicio-backend.herokuapp.com/formulario')
      setDbForm(dbDatos.data)
    }
    axiosGet()
    console.log(dbForm)
  }, [dbForm])

 
  
  return (
    <div>
      <div className="container text-center mt-5">
        <h2>Formularios recibido</h2>
      </div>
      {
          dbForm.map(correos =>(
            <table class="table caption-top container row m-auto">
            <div className='col-sm-8'>
            <thead>
              <tr>
                <th scope="col">Hora</th>
                <th scope="col" className='text-center'>Email</th>
                <th scope="col" className='text-center'>Botones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                    <th scope="row" className='col-sm-2'>{correos.updatedAt.slice(11,19)}</th>
                    <td className='col-sm-6'>{correos.email}</td>
                    <td className='col-sm-2 text-center'><button type="button" class="btn btn-danger">Eliminar</button> <button type="button" class="btn btn-success">Ver</button></td>
                </tr>
            </tbody>
            </div>
          </table>
          ))
      }
    </div>
  )
}
