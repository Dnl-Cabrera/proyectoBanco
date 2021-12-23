import React from "react";
import NavBar from "../../../components/Cliente/NavBar";
import PiePag from "../../../components/Cliente/PiePag";

//Components
import NavBarVertical from "./../../../components/Cliente/NavBarVertical"

class ClienteCertificado extends React.Component {

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
                                
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                                <img src="" className="rounded float-end justify-content-end" alt="..."/>
                            
                            </div>
                            
                            
                            <div className="form-floating mb-3">
                                
                                <input type="text" className="form-control col-4" id="cuotaspagadas" placeholder="Número de cuotas pagadas"/>
                                <label for="cuotaspagadas">Cuotas pagadas</label>
                            </div>
                            <div className="form-floating mb-3">
                                
                                <input type="text" className="form-control col-4" id="cuotaspendientes" placeholder="Número de cuotas pendientes"/>
                                <label for="cuotaspagadas">Cuotas pendientes</label>
                            </div>
                                                       
                            <div className="form-floating mb-3">
                                    
                                <input type="text" className="form-control col-4 " id="valorCuota" placeholder="Valor cuota"/>
                                <label for="valorCuota">Cuotas pagadas</label>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="button" className="btn btn-primary ">Imprimir</button>
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

export default ClienteCertificado;