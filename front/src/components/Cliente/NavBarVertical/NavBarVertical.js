//library Reac
import React from "react";
import {Link} from "react-router-dom";

const NavBarVertical = () =>{


    return(

        <div className="clienteAdministradorBotones btn-group-vertical" role="group" aria-label="Vertical button group">
                            <button type="button" className="btn btn-primary"><Link style={{color:"white"}} to="/inicioCliente">Solicitar credito</Link></button>
                            <button type="button" className="btn btn-primary"><Link style={{color:"white"}} to="/ClienteSolicitudProrroga">Solicitar una prorroga</Link></button>
                            <button type="button" className="btn btn-primary"><Link style={{color:"white"}} to="/ClienteCertificado">Generar certificado</Link></button>
                            <button type="button" className="btn btn-primary"><Link style={{color:"white"}} to="/cerrarSesion">Salir</Link></button>
                            
        </div>
    )

}

export default NavBarVertical;