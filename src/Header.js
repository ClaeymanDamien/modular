import React from 'react'
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Logo from './img/logo.png'



const Header = () => (
        <Navbar variant="light" className="col-lg-10 offset-lg-1 p-5 justify-content-center justify-content-lg-start d-flex align-items-center">
            <Navbar.Brand href="" className="d-flex">
                <img
                    alt=""
                    src={Logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-center mr-5"
                />
                <h1 className="display-3 text-center">Mødular.</h1>  
            </Navbar.Brand>
        </Navbar>
)
export default Header;