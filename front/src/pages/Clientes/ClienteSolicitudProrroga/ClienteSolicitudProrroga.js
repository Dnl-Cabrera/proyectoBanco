import React from "react";
import NavBar from "../../../components/Cliente/NavBar";
import PiePag from "../../../components/Cliente/PiePag";

import NavBarVertical from "./../../../components/Cliente/NavBarVertical"

class ClienteSolicitudProrroga extends React.Component {

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

                <section className="clienteAdministradorTitulo">
                    <div className="container">
                        <div className="login-title">
                            <p><h4 className="text-center">Administra tu crédito</h4></p>
                        </div>
                    </div>
                </section>



                <section className=" clienteAdministrador">
                    <div className="container">

                        <div className="h100 d-flex justify-content-center clienteAdministradorConten">
                            
                            <NavBarVertical/>

                            <div className=" clienteAdministradorIdentificador p-2 flex-fill bd-highlight ">

                                <div className="d-flex p-2 ">

                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    <img src="" className="rounded float-end justify-content-end" alt="..." />

                                </div>

                                <div className="row mb-3">
                                    <label for="colFormLabelSm" className="col-sm-6 col-form-label col-form-label-sm text-center">Ingresa el número de cuotas</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" />
                                    </div>

                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button type="button" className="btn btn-primary ">Guardar cambios</button>
                                </div>
                            </div>

                        </div>



                    </div>
                </section>



                <PiePag></PiePag>


            </div>
        )
    }
}

export default ClienteSolicitudProrroga;