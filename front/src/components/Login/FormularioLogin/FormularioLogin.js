//React Library
import React from "react";
//Template css library
import "../../../style/css/bootstrap.min.css"
import "../../../style/css/bootstrap-icons.css"
import "../../../style/css/magnific-popup.css"
import "../../../style/css/aos.css"
import "../../../style/css/templatemo-nomad-force.css"
import "../../../style/css/custon.css"

const FormularioLogin = ({bus}) =>{

    const envioDatos = (e) =>{
        e.preventDefault();
        let datos={
            "correo":e.target.correo.value,
            "pass":e.target.pass.value,
        }

        bus(datos)
    }

    return(
        <div>
            <form onSubmit={envioDatos} className="text-center">
                <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                    <label for="email"></label>
                    <input type="email" className="form-control" placeholder="Ingrese correo electrónico" name="correo" required/>
                </div>
                <div className="mb-3 col-xs-2 col-md-4 center-block">
                    <label for="pwd"></label>
                    <input type="password" className="form-control" placeholder="Ingrese contraseña" name="pass" required/>
                </div>

                <div className="login-registro">
                    <input type="submit" className="btn btn-primary" value="Ingresar" name="Ingresar"/>
                </div>

                <div className="login-registro">
                    <button className="btn btn-danger">Recuperar contraseña</button>
                </div>
            </form>
        </div>
    )

}

export default FormularioLogin;