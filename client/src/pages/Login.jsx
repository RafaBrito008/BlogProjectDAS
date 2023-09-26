import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='auth'>
            <h1>Iniciar sesión</h1>
            <form>
                <input required type="text" placeholder='Nombre de usuario'/>
                <input required type="passsword" placeholder='Contraseña'/>
                <button>Iniciar Sesión</button>
                <span>Crear una nueva cuenta <Link to="/register">aquí</Link></span>
            </form>
        </div>
    )
}

export default Login