//React Library
import React from "react";

//React-Bootstrap Library
import { Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "../../../components/Cliente/NavBar";
import PiePag from "../../../components/Cliente/PiePag";

//Component
import TablaDatos from "../../../components/Cliente/TablaDatos";

//CSS
import Style from "./ClienteSolicitudCredito.css";


class ClienteSolicitudCredito extends React.Component {


    //Estado para guardar el numero de producto
    state = {
        producto: "",
    }

    //Referencias para identificar la consulta del usuario
    input_id = React.createRef();
    //Ref para identificar los botones de modificacion en la tabla
    modificar = React.createRef();
    //Ref para identificar el boton de eliminar producto
    eliminar = React.createRef();

    //Ref para activar el div que muestra los inputs para modificar los productos.
    clase = React.createRef();
    claseDiv2 = React.createRef();

    //Ref para identificar los input y poder agregarle los datos desde la DB
    input_nombre = React.createRef();
    input_tipoIdentificaion = React.createRef();
    input_numeroIdentificaion = React.createRef();
    input_fechaSolicitud = React.createRef();
    input_valorSolicitado = React.createRef();
    input_fechaAprobacion = React.createRef();
    input_valorAprobado = React.createRef();
    input_fechaRechazo = React.createRef();
    input_mesesCredito = React.createRef();
    input_fechaFinalizacion = React.createRef();
    input_estadoSolicitud = React.createRef();

    //Simulación de DB
    peticion = {
        productos: [
            {
                "nombre": "Credito libre inversión",
                "tipoIdentificacion": "Cedula",
                "numeroIdentificacion": "1234567891",
                "fechaSolicitud": "30/09/2021",
                "valorSolicitado": "30/09/2021",
                "fechaAprobacion": "15/09/2021",
                "valorAprobado": "30/09/2021",
                "fechaRechazo": "15/09/2021",
                "mesesCredito": "10",
                "fechaFinalizacion": "15/07/2022",
                "estadoSolicitud": "pendiente",

            },
            {
                "nombre": "Credito libre inversión",
                "tipoIdentificacion": "Cedula",
                "numeroIdentificacion": "1234567892",
                "fechaSolicitud": "30/09/2021",
                "valorSolicitado": "30/09/2021",
                "fechaAprobacion": "15/09/2021",
                "valorAprobado": "30/09/2021",
                "fechaRechazo": "15/09/2021",
                "mesesCredito": "10",
                "fechaFinalizacion": "15/07/2022",
                "estadoSolicitud": "pendiente",
            },
            {
                "nombre": "Credito libre inversión",
                "tipoIdentificacion": "Cedula",
                "numeroIdentificacion": "1234567893",
                "fechaSolicitud": "30/09/2021",
                "valorSolicitado": "30/09/2021",
                "fechaAprobacion": "15/09/2021",
                "valorAprobado": "30/09/2021",
                "fechaRechazo": "15/09/2021",
                "mesesCredito": "10",
                "fechaFinalizacion": "15/07/2022",
                "estadoSolicitud": "pendiente",
            },
        ]
    }


    //Este metodo es para consultar en la DB el valor y colocar los datos en la tabla.
    consultarDato = (e) => {
        e.preventDefault();
        //console.log(this.clase);

        let datos = {
            "cedula": this.input_id.current.value,
        }

        let token = window.localStorage.token

        fetch("http://localhost:8080/administrador/consultarSolicitud", {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json",
                "auth-token-jwt": token
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                //console.log(JSON.stringify(response).hasOwnProperty("error"));

                if (!JSON.stringify(response).hasOwnProperty("error")) { //Para saber si tiene la clave error.
                    if (response) {
                        if (response.tipoUsuario === "Cliente") {

                            this.clase.current.className = "row justify-content-center text-center d";
                            this.setState({
                                nombre: response.nombre,
                                tipoIdentificacion: response.tipoIdentificacion,
                                numeroIdentificacion: response.numeroIdentificacion,
                                fechaSolicitud: response.fechaSolicitud,
                                valorSolicitado: response.valorSolicitado,
                                fechaAprobacion: response.fechaAprobacion,
                                valorAprobado: response.valorAprobado,
                                fechaRechazo: response.fechaRechazo,
                                mesesCredito: response.mesesCredito,
                                fechaFinalizacion: response.fechaFinalizacion,
                                estadoSolicitud: response.estadoSolicitud
                     
                            })

                            this.input_nombre.current.value = this.state.nombre,
                            this.input_tipoIdentificacion.current.value = this.state.tipoIdentificacion,
                            this.input_numeroIdentificacion.current.value = this.state.numeroIdentificacion,
                            this.input_fechaSolicitud.current.value = this.state.fechaSolicitud,
                            this.input_valorSolicitado.current.value = this.state.valorSolicitado,
                            this.input_fechaAprobacion.current.value = this.state.fechaAprobacion,
                            this.input_valorAprobado.current.value = this.state.valorAprobado,
                            this.input_fechaRechazo.current.value = this.state.fechaRechazo,
                            this.input_mesesCredito.current.value = this.state.mesesCredito,
                            this.input_fechaFinalizacion.current.value = this.state.fechaFinalizacion,
                            this.input_estadoSolicitud.current.value = this.state.estadoSolicitud

                            alert("Solicitud modificada")
                        }
                        else {
                            this.clase.current.className = "row justify-content-center text-center d-none";
                            alert("Si desea consultar usuario interno o administrador dirigirse a la opcion correspondiente")

                        }
                    }
                    else {
                        this.clase.current.className = "row justify-content-center text-center d-none";
                        alert("Solicitud no encontrada")
                    }

                }
                else {
                    window.location.href = "/login"
                    alert("Sesion finalizada")
                }

            });

    }


    render() {
        return (
            <div>
                <NavBar></NavBar>

                <div className="row justify-content-center text-center p-4">

                    <div class="h100 d-flex justify-content-center clienteAdministradorConten">

                        <div class="clienteAdministradorBotones btn-group-vertical" role="group" aria-label="Vertical button group">
                            <button type="button" class="btn btn-primary">Solicitar crédito</button>
                            <button type="button" class="btn btn-primary">Generar historial</button>
                            <button type="button" class="btn btn-primary">Solicita una prorroga</button>
                            <button type="button" class="btn btn-primary">Generar certificado</button>
                            <button type="button" class="btn btn-primary">Salir</button>

                        </div>

                        <div class=" solicitudCreditoIdentificador p-2 flex-fill bd-highlight ">

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

                                <div class="row mb-3">
                                    <label for="colFormLabelSm" class="col-sm-6 col-form-label col-form-label-sm text-center">Indica el valor solicitado</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="colFormLabelSm" class="col-sm-6 col-form-label col-form-label-sm text-center">Ingrese el numero de cuotas en meses</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" />
                                    </div>
                                </div>

                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button type="button" class="btn btn-primary ">Solicitar</button>
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