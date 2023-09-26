import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo_uta.png"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=categoria1">
                        <h6>CATEGORIA1</h6>
                    </Link>
                    <Link className="link" to="/?cat=categoria2">
                        <h6>CATEGORIA2</h6>
                    </Link>
                    <Link className="link" to="/?cat=categoria3">
                        <h6>CATEGORIA3</h6>
                    </Link>
                    <Link className="link" to="/?cat=categoria4">
                        <h6>CATEGORIA4</h6>
                    </Link>
                    <Link className="link" to="/?cat=categoria5">
                        <h6>CATEGORIA5</h6>
                    </Link>
                    <span>Rafael</span>
                    <span>Salir</span>
                    <span className='write'><Link to="/write">Postear</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar