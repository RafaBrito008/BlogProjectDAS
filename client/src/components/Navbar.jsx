import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo_uta.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
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
          <Link className="link" to="/?cat=categoria6">
            <h6>CATEGORIA6</h6>
          </Link>
          <span className="write">
            <Link className="link" to="/write">
              <b>Post</b>
            </Link>
          </span>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}><b>Salir</b></span>
          ) : (
            <Link className="link" to="/login">
              <b>Iniciar sesión</b>
            </Link>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
