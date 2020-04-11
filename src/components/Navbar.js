import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/Header.css'
import logo from '../images/Logo.png'



const Nav=(porps)=> {
    return (
        <div className="container-fluid colorbg">
            <nav className="mb-1 navbar container sticky-top navbar-expand-lg navbar-dark navegador">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav ml-auto nav-flex-icons">
                    <li className="nav-item avatar">
                        <a className="nav-link p-0" href="#">
                            <img  src={logo} className="rounded-circle z-depth-0"
                                alt="avatar image" height="60" />
                        </a>
                    </li>
                </ul>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link text" href="#">Inicio
                            <span>|</span>
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="text-two nav-link text-secondary font-weight-bold" href="#">Cursos</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-two nav-link text-secondary font-weight-bold" href="#">Acompañamiento</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-two nav-link text-secondary font-weight-bold" href="#">Iniciar Sesión</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}
export default Nav;