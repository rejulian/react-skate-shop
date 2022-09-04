import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Nav.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <Link to='/' className="navbar-brand">SkateShop</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
                    <Link className="nav-link active" to='/category/Skate-Completo'>Skates Completos</Link>
                    <Link className="nav-link active" to='/category/Ruedas'>Ruedas</Link>
                </ul>
                <CartWidget/>
            </div>
        </div>
    </nav>
  )
}

export default NavBar