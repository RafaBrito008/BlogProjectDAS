import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    const [err, setError] = useState(null)

    const navigate = useNavigate()

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post("/auth/login", inputs)
            navigate("/")
        } catch (err) {
            setError(error.response.data)
        }
    }

    return (
        <div className='auth'>
            <h1>Iniciar sesión</h1>
            <form>
                <input required type="text" placeholder='Nombre de usuario' name='username' onChange={handleChange}/>
                <input required type="passsword" placeholder='Contraseña' name='password' onChange={handleChange}/>
                <button onClick={handleSubmit}>Iniciar Sesión</button>
                {err && <p>{err}</p>}
                <span>Crear una nueva cuenta <Link to="/register">aquí</Link></span>
            </form>
        </div>
    )
}

export default Login