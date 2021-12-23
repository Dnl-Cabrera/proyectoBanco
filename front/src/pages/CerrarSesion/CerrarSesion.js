//library React
import React, {useEffect } from "react";
import { useNavigate } from "react-router-dom";


const CerrarSesion = () => {

    let navigate=useNavigate()

    useEffect(() => {
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("cedula")
        window.localStorage.removeItem("nombre")
        window.localStorage.removeItem("rol")
        console.log("Ingreso")
        navigate("/")
    })

    return(
        <div>
            Redireccionando
        </div>
    )
}

export default CerrarSesion;