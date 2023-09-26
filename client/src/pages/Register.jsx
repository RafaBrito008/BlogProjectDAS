import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='auth'>
            <h1>Iniciar sesión</h1>
            <form>
                <input required type="text" placeholder='Nombre de usuario'/>
                <input required type="email" placeholder='Correo electrónico'/>
                <input required type="passsword" placeholder='Contraseña'/>
                <button>Registrarse</button>
                <span>Iniciar sesión <Link to="/login">aquí</Link></span>
            </form>
        </div>
    )
}

export default Register