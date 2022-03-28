import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


export const Formuser = () =>{

    const { id } = useParams()

    const [dbFormId , setDbFormId] = useState([])

    useEffect(()=>{
        const pedidoId = async()=>{
            const datosId = await axios.get(`https://ositoservicio-backend.herokuapp.com/formulario/${id}`)
            setDbFormId(datosId.data)
        }
        pedidoId()
    },[])

    return(
        <div className='container'>
            <div className='text-center mt-5'>
                <h2>Correos recibido</h2>
            </div>
            <div>
                <div className='text-center'>
                    <h3>informacion</h3>
                </div>
                <div className='row m-auto text-center mt-3 mb-3'>
                    <div className='col-6'>
                        <p>Email</p>
                        <h4>{dbFormId.email}</h4>
                    </div>
                    <div className='col-6'>
                        <p>Telefono</p>
                        <h4>{dbFormId.telefono}</h4>
                    </div>
                </div>
                <div className='col-sm-6 text-center'>
                        <p>Nombre</p>
                        <h4>{dbFormId.nombre}</h4>
                </div>
            </div>
            <div className='text-center mt-5 container-consulta-desktop'>
                    <h3>Consulta</h3>
                <div className='consulta-desktop mb-5'>
                    <p>{dbFormId.consulta}</p>
                </div>
                <div className='container-button-volver'>
                    <Link to={'/panelcontrol/formpanel'} className='btn-volver-desktop'>volver</Link>
                </div>
            </div>
        </div>
    )
}