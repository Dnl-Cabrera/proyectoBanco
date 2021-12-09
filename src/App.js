//library React
import React from "react"

//Pages inicio aplicacion
import InicioAplicacion from "./pages/InicioAplicacion/"

//Pages administrador
import AdminInicio from "./pages/Administrador/AdminInicio/AdminInicio";
import NavAdministrador from "./components/Administrador/NavAdministrador/NavAdministrador"
import AdminModificarCredito from "./pages/Administrador/AdminModificarCredito/AdminModificarCredito"
import AdminModificarInternalUser from "./pages/Administrador/AdminModificarInternalUser/AdminModificarInternalUser"
import AdminModificarUser from "./pages/Administrador/AdminModificarUser/AdminModificarUser"
import VisualizarUser from "./pages/Administrador/VisualizarUser/VisualizarUser";

//Paginas Cliente
import ClienteAdministrador from "./pages/Clientes/ClienteAdministrador/ClienteAdministrador"

//Pagina Registro
import Registro from "./pages/Registro";

class App extends React.Component{

    render(){
        return(
            <div>
                    <Registro/>
            </div>
        )
    }

}

export default App;