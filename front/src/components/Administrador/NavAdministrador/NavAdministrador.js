//React Module
import React from "react";

//Bootstrap Library
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//CSS
import Style from "./NavAdministrador.module.css"

class NavAdministrador extends React.Component{

    render(){
        return(
            <div className="col-sm-12">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand className={Style['sizeTitle']}  href="#homeAdmin">Administrador</Navbar.Brand>
                        <Nav variant="pills" className="me-auto" id={Style['sizeItem']}>
                            <Nav.Link href="#vUser">Visualizar usuarios</Nav.Link>
                            <Nav.Link href="#mUser">Modificar y/o eliminar usuarios</Nav.Link>
                            <Nav.Link href="#mCred">Modificar y/o cancelar creditos</Nav.Link>
                            <Nav.Link href="#mUserInter">Modificar datos usuario</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                {this.props.children}
            </div>
        )
    }

}

export default NavAdministrador;