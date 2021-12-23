//React Library
import React from "react";
//React-Bootstrap Library
import { Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "../../../components/Cliente/NavBar";
import PiePag from "../../../components/Cliente/PiePag";

//Components
import NavBarVertical from "./../../../components/Cliente/NavBarVertical"

//CSS
import Style from "./ClienteSolicitudCredito.css";


class ClienteSolicitudCredito extends React.Component {

    componentDidMount() {

        let rol = window.localStorage.getItem("rol");

        if (rol === "Administrador") {
            console.log("Ud es administrador");
        }
        else if (rol === "Usuario interno" || rol === "Administrador") {
            window.location.href = "/inicioUsuarioInterno"
        }
        else if (rol === "Cliente" || rol === "Administrador") {
            console.log("Ud es ",rol)
        }
        else {
            window.location.href = "/login"
        }

    }

   

    render() {
        return (
            <div>
                <NavBar></NavBar>

                <div className="row justify-content-center text-center p-4">

                    <div className="h100 d-flex justify-content-center clienteAdministradorConten">

                        <NavBarVertical/>

                        <div className=" solicitudCreditoIdentificador p-2 flex-fill bd-highlight ">

                            <h1>Solicitud Crédito</h1>
                            <div className="col-sm-10">
                                <Form onSubmit={this.consultarDato}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ingresa la cedula del solicitante</Form.Label>
                                        <Form.Control id={Style['celda-input']} type="number" placeholder="Ingresa la identificación" ref={this.input_id} />
                                        <Form.Text className="text-muted">
                                            Los datos de la cedula deben ser numericos.
                                        </Form.Text>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Consultar
                                    </Button>
                                </Form>
                            </div>


                            <h1>Solicitudes del cliente</h1>
                            <div name="visualizarProductos" className="col-sm-12 d-none" ref={this.claseDiv2}>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Tipo credito</th>
                                            <th>Identificación</th>
                                            <th># producto</th>
                                            <th>Meses credito</th>
                                            <th>Estado</th>
                                            <th>Monto solicitado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.peticion.productos.map((producto, index) => {
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{producto.name}</td>
                                                        <td>{producto.identificacion}</td>
                                                        <td>{producto.numero_producto}</td>
                                                        <td>{producto.meses_credito}</td>
                                                        <td>{producto.estado}</td>
                                                        <td>{producto.monto_solicitado}</td>
                                                        <td><Button onClick={this.btnModificar} ref={this.modificar} name={producto.numero_producto}>Aceptar</Button>
                                                            <Button onClick={this.btnModificar} ref={this.modificar} name={producto.numero_producto}>Eliminar</Button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>

                            <h1>Nueva Solicitud</h1>
                            <div className="col-sm-10">

                                <div className="row mb-3">
                                    <label for="colFormLabelSm" className="col-sm-6 col-form-label col-form-label-sm text-center">Indica el valor solicitado</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label for="colFormLabelSm" className="col-sm-6 col-form-label col-form-label-sm text-center">Ingrese el numero de cuotas en meses</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" />
                                    </div>
                                </div>

                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button type="button" className="btn btn-primary ">Solicitar</button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

                <PiePag></PiePag>


            </div>
        )
    }
}

export default ClienteSolicitudCredito;