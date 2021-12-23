//React Library
import React from "react";

//Bootstrap Library
//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

//Template css Library
import "../../../style/css/bootstrap.min.css"

import "../../../style/css/bootstrap-icons.css"
import "../../../style/css/magnific-popup.css"
import "../../../style/css/aos.css"
import "../../../style/css/templatemo-nomad-force.css"
import "../../../style/css/custon.css"

//video
//import video from "../../../style/videos/814dc43e870597176cad645798825c03.mp4"
//import imagen from "../../../style/videos/792bd98f3e617786c850493560e11c45.jpg"

//Components
import NavBarVertical from "./../../../components/Cliente/NavBarVertical"
import PiePag from "../../../components/Cliente/PiePag";
import NavBar from "../../../components/Cliente/NavBar";

class ClienteAdministrador extends React.Component {

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
                <main>
            <NavBar/>

            <section className=" clienteAdministrador">
                <div className="container">
                    
                    <div className="h100 d-flex justify-content-center clienteAdministradorConten">
                        
                        <NavBarVertical/>

                        <div className=" clienteAdministradorIdentificador p-2 flex-fill bd-highlight "> 

                            <div className="d-flex p-2 ">
                                
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                                <img src="" className="rounded float-end justify-content-end" alt="..."/>
                            
                            </div>
                            

                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                
                <PiePag/>
                                           
                </div>
            </section>
            </main>
            

            </div>
        )
    }

}

export default ClienteAdministrador;