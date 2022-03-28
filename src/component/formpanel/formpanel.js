import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

export const Formpanel = () => {
  const [dbForm, setDbForm] = useState([])

  useEffect(() => {
    const axiosGet = async () => {
      const dbDatos = await axios.get('https://ositoservicio-backend.herokuapp.com/formulario')
      setDbForm(dbDatos.data)
    }
    axiosGet()
    console.log(dbForm)
  }, [])

  const handleDelete= async(id, correoElectronico) =>{

    swal({
      title: "Estas seguro de eliminar este correo?",
      text: `Estas eliminando el correo de ${correoElectronico}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async(willDelete) => {
      if (willDelete) {
        await axios.delete('https://ositoservicio-backend.herokuapp.com/formulario/' + id)
        swal("Elemento eliminado correctamente", {
          icon: "success",
        });
        window.location.replace('')
      } else {
        swal("Cancelado correctamente!");
      }
    });

  } 
  return (
    <div>
      <div className="container text-center mt-5">
        <h2>Formularios recibido</h2>
      </div>
      <div className='text-center m-auto'>
      {
          dbForm.map(correos =>(
            <table class="table caption-top container row m-auto mt-3">
            <div className='col-sm-8 col-8 m-auto'>
            <thead>
              <tr>
                <th scope="col">Hora</th>
                <th scope="col" className='text-center'>Email</th>
                <th scope="col" className='text-center'>Botones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                    <th scope="row" className='col-sm-2 col-2'>{correos.updatedAt.slice(11,19)}</th>
                    <td className='col-sm-6 col-6'>{correos.email}</td>
                    <td className='col-sm-2 col-2 text-center pt-2 pb-2'><button type="button" class="btn btn-danger" onClick={()=>handleDelete(correos._id , correos.email)}>Eliminar</button> <button type="button" class="btn btn-success"><Link to={`/panelcontrol/formpanel/${correos._id}`} className='boton-link'>Ver</Link></button></td>
                </tr>
            </tbody>
            </div>
          </table>
          ))
      }
      </div>
    </div>
  )
}
