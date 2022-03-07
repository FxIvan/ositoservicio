import React from 'react'
import '../css/style.css'

export const Formulario = () =>{

    const handleChange = () =>{
        
    }

    return(
        <div className='container'>
            <div className='text-center pb-5'>
                <h2>Dejanos tu consulta</h2>
            </div>
            <form className='col-sm-4 m-auto'>
                <label for="formControlInput" class="form-label">Tu nombre</label>
                <input type="text" className="form-control" id="formControlInput" placeholder="tu nombre" onChange={handleChange}/>

                <label for="formControlInput" class="form-label">Tu Email</label>
                <input type="email" className="form-control" id="formControlInput" placeholder="tu email" onChange={handleChange} required/>

                <label for="formControlInput" class="form-label">Telefono de contacto</label>
                <input type="number" className="form-control" id="formControlInput" placeholder="tu telefono" onChange={handleChange} required/>

                <label for="formControlInput" class="form-label">Tu consulta</label>
                <textarea type="text" className="form-control" id="formControlInput" placeholder="tu consulta" onChange={handleChange}/>
                <div className='text-center button-submit-desktop'>
                    <input type="submit" value="Enviar" className='col-sm-2'/>
                </div>
            </form>
        </div>
    )
}