//React library
import React from "react";

//React Bootstrap library
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//CSS
import Style from "./AdminModificarUser.module.css"

//Components
import TablaDatos from "../../../components/Administrador/TablaDatos";
import NavAdministrador from "../../../components/Administrador/NavAdministrador/NavAdministrador";

class AdminModificarUser extends React.Component {

    input_id = React.createRef();
    clase = React.createRef();

    input_nombre = React.createRef();
    input_identificacion = React.createRef();
    input_alias = React.createRef();
    input_genero = React.createRef();
    input_rol = React.createRef();
    input_telefono = React.createRef();
    input_correo = React.createRef();
    input_direccion = React.createRef();


    usuarioPrueba = {
        "name": "Carlos Cabrera",
        "alias": "Drap",
        "rol": "Usuario",
        "direccion": "Cll 1234 - 5678",
        "genero": "Masculino",
        "identificacion": "1234567789",
        "correo": "prueba@gmail.com",
        "telefono": "304658978",
    }

    cambiarDatos = (e) => {
        //console.log(this.input_nombre.current.value,this.input_identificacion.current.value);
        if (e.target.name === "modificar") {
            this.usuarioPrueba.name = this.input_nombre.current.value;
            this.usuarioPrueba.identificacion = this.input_identificacion.current.value;
            this.usuarioPrueba.alias = this.input_alias.current.value;
            this.usuarioPrueba.rol = this.input_rol.current.value;
            this.usuarioPrueba.genero = this.input_genero.current.value;
            this.usuarioPrueba.direccion = this.input_direccion.current.value;
            this.usuarioPrueba.telefono = this.input_telefono.current.value;
            this.usuarioPrueba.correo = this.input_correo.current.value;
        }
        else if (e.target.name === "eliminar") {
            //Eliminar
            console.log(this.usuarioPrueba);
        }
    }

    consultarDato = (e) => {
        e.preventDefault();
        //console.log(this.clase);
        if (this.input_id.current.value !== "") {
            this.clase.current.className = "row justify-content-center text-center d";
            this.input_nombre.current.value = this.usuarioPrueba.name;
            this.input_identificacion.current.value = this.usuarioPrueba.identificacion;
            this.input_alias.current.value = this.usuarioPrueba.alias;
            this.input_rol.current.value = this.usuarioPrueba.rol;
            this.input_genero.current.value = this.usuarioPrueba.genero;
            this.input_direccion.current.value = this.usuarioPrueba.direccion;
            this.input_telefono.current.value = this.usuarioPrueba.telefono;
            this.input_correo.current.value = this.usuarioPrueba.correo;
        }
        else {
            this.clase.current.className = "row justify-content-center text-center d-none";
        }


    }


    render() {

        return (

            <div >
                <NavAdministrador />
                <div className="row justify-content-center text-center p-4">
                    <h1>Modificar o eleminar usuarios</h1>
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
                            <Button variant="primary" type="submit">
                                Consultar
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="row justify-content-center text-center d-none" ref={this.clase}>
                    <h1>Usuario consultado</h1>
                    <div className="col-sm-6 p-3">

                        <TablaDatos titulo1="Nombre" titulo2="Identificacion" contenido1="nombre" contenido2="identificacion" referencia1={this.input_nombre} referencia2={this.input_identificacion} />
                        <TablaDatos titulo1="Alias" titulo2="Rol" contenido1="alias" contenido2="rol" referencia1={this.input_alias} referencia2={this.input_rol} />
                        <TablaDatos titulo1="Genero" titulo2="Dirección" contenido1="genero" contenido2="direccion" referencia1={this.input_genero} referencia2={this.input_direccion} />
                        <TablaDatos titulo1="Correo" titulo2="Telefono" contenido1="correo" contenido2="telefono" referencia1={this.input_correo} referencia2={this.input_telefono} />

                        <div className="col-sm-5 d-inline p-1 pt-4">
                            <Button variant="primary" type="submit" onClick={this.cambiarDatos} name="modificar">Modificar</Button>
                        </div>
                        <div className="col-sm-5 d-inline p-1 pt-4">
                            <Button variant="primary" type="submit" onClick={this.cambiarDatos} name="eliminar">Eliminar</Button>
                        </div>

                    </div>


                </div>

                <br />

            </div>


        )

    }

}

export default AdminModificarUser;