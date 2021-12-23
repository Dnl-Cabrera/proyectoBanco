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
                        <Navbar.Brand className={Style['sizeTitle']}>Administrador</Navbar.Brand>
                        <Nav variant="pills" className="me-auto" id={Style['sizeItem']}>
                            <Nav.Link href="/VisualizarUser">Visualizar usuarios</Nav.Link>
                            <Nav.Link href="/AdminModificarUser">Modificar y/o eliminar clientes</Nav.Link>
                            <Nav.Link href="/AdminModificarInternalUser">Modificar datos usuario</Nav.Link>
                            <Nav.Link href="/AdminAprobarSolicitud">Aprobar solicitudes credito</Nav.Link>
                            <Nav.Link href="/AdminModificarCredito">Modificar y/o cancelar creditos</Nav.Link>
                            <Nav.Link href="/cerrarSesion">Cerrar sesion</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                {this.props.children}
            </div>
        )
    }

}

export default NavAdministrador;