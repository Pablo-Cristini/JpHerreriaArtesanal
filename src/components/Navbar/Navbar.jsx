import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img src={require('../../assets/jp.png')} alt="Logo" className='navbar-logo' />
            <ul>
            <li>
                <Link className='menu-link' to="/">
                Home 
                </Link>
            </li>
            <li>
                <Link className='menu-link' to="/Productos">
                Productos
                </Link>
            </li>
            <li>
                <Link className='menu-link' to="/Contacto">
                    Contacto
                </Link>
            </li>
            </ul>

        </div>
        </nav>
    )
}
    export default Navbar;
