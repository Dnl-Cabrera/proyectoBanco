//React Library
import React from "react";

//React-Bootstrap Library
import { Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "../../../components/Cliente/NavBar";
import PiePag from "../../../components/Cliente/PiePag";

//Component
import TablaDatos from "../../../components/Administrador/TablaDatos";

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
    input_cuotasMora = React.createRef();
    input_estado = React.createRef();
    input_fcorte = React.createRef();
    input_ffinalizacion = React.createRef();
    input_mesesCredito = React.createRef();
    input_tipoCredito = React.createRef();

    //Simulación de DB
    peticion = {
        productos: [
            {
                "name": "Credito libre inversión",
                "identificacion": "123456789",
                "numero_producto": "0025489678",
                "fecha_inicio": "30/09/2021",
                "fecha_corte": "15/09/2021",
                "meses_credito": "10",
                "fecha_finalizacion": "15/07/2022",
                "estado": "pendiente",
                "monto_solicitado": "200000",
            },
            {
                "name": "Credito vivienda",
                "identificacion": "123456789",
                "numero_producto": "00254857912",
                "fecha_inicio": "30/09/2021",
                "fecha_corte": "15/09/2021",
                "meses_credito": "22",
                "fecha_finalizacion": "15/07/2023",
                "estado": "pendiente",
                "monto_solicitado": "500000",
            },
            {
                "name": "Credito compra de cartera",
                "identificacion": "123456789",
                "numero_producto": "0043489678",
                "fecha_inicio": "30/09/2020",
                "fecha_corte": "15/09/2020",
                "meses_credito": "10",
                "fecha_finalizacion": "15/07/2021",
                "estado": "pendiente",
                "monto_solicitado": "3000000",
            },
        ]
    }


    //Este metodo es para consultar en la DB el valor y colocar los datos en la tabla.
    consultarDato = (e) => {
        e.preventDefault();
        if (this.input_id.current.value !== "") {
            this.claseDiv2.current.className = "col-sm-12 d";
            //En esta sección se debe modificar la variable petición para que se actualice la tabla.
        }
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