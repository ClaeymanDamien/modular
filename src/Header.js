import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Logo from './img/logo.png'



const Header = () => (
        <Navbar variant="light" className="col-lg-10 offset-lg-1 p-5 pb-3 justify-content-center justify-content-lg-start d-flex align-items-center">
            <Navbar.Brand href="" className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                <img
                    alt=""
                    src={Logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-center mr-sm-5"
                />
                <h1 className="display-3 text-center">Mødular.</h1>  
            </Navbar.Brand>
        </Navbar>
)
export default Header;