//React Library
import React from "react";

//React-Bootstrap Library
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//CSS
import Style from "./AdminAprobarSolicitud.module.css";

//Components
import TablaAprobarSolicitud from "../../../components/Administrador/TablaAprobarSolicitud";
import NavAdministrador from "../../../components/Administrador/NavAdministrador/NavAdministrador";


class AdminAprobarSolicitud extends React.Component {

    constructor() {
        super();
        this.state = {
            "identificacion": "",
            "valorSolicitado": "",
            "numeroCuotas": "",
            "valorEstado": "",
            "tipoUsuario": "",
            
        };
    }

    componentDidMount() {

        let rol = window.localStorage.getItem("rol");

        if (rol === "Administrador") {
            console.log("Ud es administrador");
        }
        else if (rol === "Usuario interno") {
            window.location.href = "/inicioUsuarioInterno"
        }
        else if (rol === "Cliente") {
            window.location.href = "/inicioCliente";
            alert("Ud no es administrador")
        }
        else {
            window.location.href = "/login"
        }

    }

    input_id = React.createRef();
    clase = React.createRef();

    input_identificacion = React.createRef();
    input_valorSolicitado = React.createRef();
    input_numeroCuotas = React.createRef();
    input_valorEstado = React.createRef();
    input_tipoUsuario = React.createRef();



    consultarDato = (e) => {
        e.preventDefault();
        //console.log(this.clase);

        let datos = {
            "cedula": this.input_id.current.value,
        }

        let token = window.localStorage.token

        fetch("http://localhost:8080/aprobarCredito/consultarClienteAC", {
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
                                identificacion: response.numeroCedula,
                                valorSolicitado: response.valorSolicitado,
                                numeroCuotas: response.numeroCuotas,
                                valorEstado: response.estado,
                                tipoUsuario:response.tipoUsuario
                                
                            })

                            this.input_identificacion.current.value = this.state.identificacion;
                            this.input_valorSolicitado.current.value = this.state.valorSolicitado;
                            this.input_numeroCuotas.current.value = this.state.numeroCuotas;
                            this.input_valorEstado.current.value = this.state.valorEstado;
                            this.input_tipoUsuario.current.value = this.state.tipoUsuario;
                            

                            //alert("Estado modificado")
                        }
                        else {
                            this.clase.current.className = "row justify-content-center text-center d-none";
                            alert("Si desea consultar usuario interno o administrador dirigirse a la opcion correspondiente")

                        }
                    }
                    else {
                        this.clase.current.className = "row justify-content-center text-center d-none";
                        alert("Usuario no encontrado")
                    }

                }
                else {
                    window.location.href = "/login"
                    alert("Sesion finalizada")
                }

            });
            

    }

    cambiarDatos = () => {
        
        //console.log(this.input_nombre.current.value,this.input_identificacion.current.value);

            let datosNuevos = {

                identificacion: this.input_identificacion.current.value,
                valorSolicitado: this.input_valorSolicitado.current.value,
                numeroCuotas: this.input_numeroCuotas.current.value,
                valorEstado: this.input_valorEstado.current.value,
                tipoUsuario:this.input_tipoUsuario.current.value
                           
                
            }
            //console.log(datosNuevos);

            this.actualizarDatos(datosNuevos)
    }


    actualizarDatos = (datosNuevos) => {

        let token = window.localStorage.token

        fetch("http://localhost:8080/aprobarCredito/aprobarSolicitud", {
            method: "PUT",
            body: JSON.stringify(datosNuevos),
            headers: {
                "Content-Type": "application/json",
                "auth-token-jwt": token
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                //console.log(response)
                //return response
                alert("Datos actualizados")
            });
    }

    render(){
        return(
            <div>
                <NavAdministrador />
                <div className="row justify-content-center text-center p-4">
                    <h2>Estado solicitud de credito</h2>
                    <br />
                    <div className="col-sm-10">
                        <Form onSubmit={this.consultarDato}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ingresa la cedula del usuario que deseas modificar o eliminar</Form.Label>
                                <Form.Control id={Style['celda-input']} type="number" placeholder="Ingresa la identificación" ref={this.input_id} />
                                <Form.Text className="text-muted">
                                    Los datos de la cedula deben ser numericos.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Consultar
                            </Button>
                        </Form>
                    </div>
                    <div className="row justify-content-center text-center d-none" ref={this.clase}>
                        <h3> Información usuario</h3>
                        <div className="col-sm-10 p-3">

                        <TablaAprobarSolicitud titulo1="Identificación" titulo2="Valor Solicitado" titulo3="Número de Cuotas" titulo4="Estado" titulo5="Tipo de Usuario" contenido1="identificacion" contenido2="valorSolicitado" contenido3="numeroCuotas" contenido4="valorEstado" contenido5="tipoUsuario" referencia1={this.input_identificacion} referencia2={this.input_valorSolicitado} referencia3={this.input_numeroCuotas} referencia4={this.input_valorEstado} referencia5={this.input_tipoUsuario} />
                       
                       <br/>

                        <div className="col-sm-5 d-inline p-1 pt-4">
                            <Button variant="primary" type="submit" onClick={this.cambiarDatos} name="modificar">Actualizar</Button>
                        </div>                   

                    </div>


                       
                    </div>

                    



                   

                    


                </div>

            </div>
        )
    }
}


export default AdminAprobarSolicitud;