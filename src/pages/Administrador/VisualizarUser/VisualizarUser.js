//React library
import React from "react";

//React Bootstrap library
import { Table, Form, Button  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//CSS
import Style from './VisualizarUser.module.css'

//Components
//import NavAdministrador from "../../../component/Administrador/NavAdministrador";


class VisualizarUser extends React.Component {

    peticion = {
        usuarios: [
            {
                "name": "Carlos Cabrera",
                "alias": "Drap",
                "rol": "Usuario",
                "requisitos": "Si",
                "fechaCreacion": "30/09/2021",
                "hora": "13:20",
            },
            {
                "name": "Diego Alejandro",
                "alias": "Alejo",
                "rol": "Interno",
                "requisitos": "Si",
                "fechaCreacion": "01/10/2021",
                "hora": "10:15",
            },
            {
                "name": "Federico Gonzales Mendoza",
                "alias": "Fede",
                "rol": "Interno",
                "requisitos": "Si",
                "fechaCreacion": "02/10/2021",
                "hora": "15:25",
            },
        ]
    }

    render() {

        return (
            <div className="row justify-content-center text-center">
                <div className="col-sm-9">
                    <div className={Style['rowDiv']}>
                        <h1>Visualizar usuarios</h1>
                        <br/>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ingresa el tipo de usuario que deseas ver</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa el rol" />
                            <Form.Text className="text-muted">
                            Los tipos de usuario son: usuario, interno y administrador
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Consultar
                        </Button>
                        </Form>
                        <br/>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre del usuario</th>
                                    <th>Alias</th>
                                    <th>Rol</th>
                                    <th>¿Cumple con los requisitos?</th>
                                    <th>Fecha de creación</th>
                                    <th>Hora</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.peticion.usuarios.map((usuario, index) => {
                                        return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{usuario.name}</td>
                                                    <td>{usuario.alias}</td>
                                                    <td>{usuario.rol}</td>
                                                    <td>{usuario.requisitos}</td>
                                                    <td>{usuario.fechaCreacion}</td>
                                                    <td>{usuario.hora}</td>
                                                </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    };

}

export default VisualizarUser;