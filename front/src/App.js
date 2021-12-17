//library React
import React from "react"

//Pages inicio aplicacion
import InicioAplicacion from "./pages/InicioAplicacion/"

//Pages administrador
import AdminAprobarSolicitud from "./pages/Administrador/AdminAprobarSolicitud"
import AdminInicio from "./pages/Administrador/AdminInicio/AdminInicio";
import NavAdministrador from "./components/Administrador/NavAdministrador/NavAdministrador"
import AdminModificarCredito from "./pages/Administrador/AdminModificarCredito/AdminModificarCredito"
import AdminModificarInternalUser from "./pages/Administrador/AdminModificarInternalUser/AdminModificarInternalUser"
import AdminModificarUser from "./pages/Administrador/AdminModificarUser/AdminModificarUser"
import VisualizarUser from "./pages/Administrador/VisualizarUser/VisualizarUser";

//Pagina Inicio
import Login from "./pages/Login";

//Paginas Cliente
import ClienteAdministrador from "./pages/Clientes/ClienteAdministrador/ClienteAdministrador"
import ClienteCertificado from "./pages/Clientes/ClienteCertificado"
import ClienteSolicitudCredito from "./pages/Clientes/ClienteSolicitudCredito"
import ClienteSolicitudProrroga from "./pages/Clientes/ClienteSolicitudProrroga"

//Pagina Registro
import Registro from "./pages/Registro";

class App extends React.Component{

    render(){
        return(
            <div>
                    <Login/>
            </div>
        )
    }

}

export default App;