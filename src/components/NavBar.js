import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">SkateShop</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Destacado</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Skates Completos</a></li>
                            <li><a className="dropdown-item" href="#">Ruedas</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar