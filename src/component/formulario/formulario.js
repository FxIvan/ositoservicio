import React, { useState } from 'react'
import '../css/style.css'
import axios from 'axios'
import { Link, useHref } from 'react-router-dom'
export const Formulario = () =>{

    const [ form , setForm ] = useState({
        nombre:'',
        email:'',
        telefono:'',
        consulta:''
    })

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        await axios.post('https://ositoservicio-backend.herokuapp.com/formulario', form)
       
    }

    return(
        <div className='container'>
            <div className='text-center pb-5'>
                <h2>Dejanos tu consulta</h2>
            </div>
            <form className='col-sm-4 m-auto'>
                <label for="formControlInput" className="form-label">Tu nombre</label>
                <input type="text" className="form-control" id="formControlInput" placeholder="tu nombre" onChange={handleChange} name='nombre'/>

                <label for="formControlInput" className="form-label">Tu Email</label>
                <input type="email" className="form-control" id="formControlInput" placeholder="tu email" onChange={handleChange} required name='email'/>

                <label for="formControlInput" className="form-label">Telefono de contacto</label>
                <input type="number" className="form-control" id="formControlInput" placeholder="tu telefono" onChange={handleChange} required name='telefono'/>

                <label for="formControlInput" className="form-label">Tu consulta</label>
                <textarea type="text" className="form-control" id="formControlInput" placeholder="tu consulta" onChange={handleChange} name='consulta'/>
                <div className='text-center button-submit-desktop'>
                    <input type="submit" value="Enviar" className='col-sm-2' onClick={()=> handleSubmit}/>
                </div>
            </form>
        </div>
    )
}