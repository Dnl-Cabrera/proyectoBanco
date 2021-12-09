//React library

import React from "react";

//Template css Library
import "../../style/css/bootstrap.min.css"
import "../../style/css/bootstrap-icons.css"
import "../../style/css/magnific-popup.css"
import "../../style/css/aos.css"
import "../../style/css/templatemo-nomad-force.css"
import "../../style/css/custon.css"

class Registro extends React.Component{

    nombre=React.createRef();
    tipoCedula=React.createRef();
    numeroCedula=React.createRef();
    fechaExpedicion=React.createRef();
    valorIngresos=React.createRef();
    valorEgresos=React.createRef();
    correo=React.createRef();
    confirmarCorreo=React.createRef();
    pass=React.createRef();
    confirmarPass=React.createRef();
    tipoUsuario=React.createRef();


    envioDatos = (e) =>{
        e.preventDefault();
        alert(this.tipoUsuario.current.value)
    }


    render(){

        return(
            <div>
                <nav className="navbar navbar-expand-lg bg-light shadow-lg">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <strong>Colpatria</strong>
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#hero">Inicio</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#about">Nuestra historia</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Portafolio</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#news">Noticias</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contactenos</a>
                                </li>


                                <button type="button" className="btn btn-danger "><a className="text-btn" href="login.html">Ingresar</a> </button>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section class="login p-3">
                <div class="container">
                    <div class="login-title">
                        <p><h1 class="text-center text-dark">Registro</h1></p>
                    </div>
                </div>
            </section>

                <section className="registro">
                <div className="container mt-3">

                    <form onSubmit={this.envioDatos} className="text-center">
                        <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                            <label for="Username"></label>
                            <input type="text" className="form-control" placeholder="Nombres y apellidos" aria-label="Username" aria-describedby="basic-addon1" ref={this.nombre}/>
                        </div>
                        <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                            <select className="col-xs-2 col-md-12 placeholder= Tipo de documento" ref={this.tipoCedula}>
                                <option>Cedula</option>
                                <option>Cedula de extranjeria</option>
                                <option>Pasaporte</option>
                            </select>
                        </div>
                        <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                            <label for="NumeroDocumento"></label>
                            <input type="Text" className="form-control" placeholder="Número de documento" aria-label="NumeroDocumento" aria-describedby="basic-addon1" ref={this.numeroCedula}/>
                        </div>
                      
                        <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                            <div className="input-group date" id="datepicker">
                                <input type="date" className="form-control" ref={this.fechaExpedicion}/>
                            </div>
                        </div>

                        <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                            <label for="Username"></label>
                            <input type="number" className="form-control" placeholder="Valor ingresos" ref={this.valorIngresos}/>
                        </div>

                        <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                            <label for="Username"></label>
                            <input type="number" className="form-control" placeholder="Valor egresos" ref={this.valorEgresos}/>
                        </div>

                        <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                            <label for="email"></label>
                            <input type="email" className="form-control" placeholder="Ingrese correo electrónico" ref={this.correo}/>
                        </div>
                        <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                            <label for="email"></label>
                            <input type="email" className="form-control" placeholder="Confirme correo electrónico" ref={this.confirmarCorreo}/>
                        </div>
                        <div className="mb-3 col-xs-2 col-md-4 center-block">
                            <label for="pwd"></label>
                            <input type="password" className="form-control" placeholder="Ingrese contraseña" ref={this.pass}/>
                        </div>
                        <div className="mb-3 col-xs-2 col-md-4 center-block">
                            <label for="pwd"></label>
                            <input type="password" className="form-control" placeholder="Confirme contraseña" ref={this.confirmarPass}/>
                        </div>

                        <select className="mb-3 col-xs-2 col-md-4 center-block" ref={this.tipoUsuario}>
                            <option>Cliente</option>
                            <option>Usuario interno</option>
                            <option>Administrador</option>
                        </select>
                       
                        <div className="login-registro">
                            <input type="submit" className="btn btn-danger" value="Registrar"/>
                        
                        </div>

                    </form>
                </div>
            </section>

                <footer className="site-footer">
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                <h5 className="text-white">
                                    <i className="bi-geo-alt-fill me-2"></i>
                                    Colombia
                                </h5>

                                <a href="mailto:info@company.com" className="custom-link mt-3 mb-5">
                                    info@colpatria.com
                                </a>
                            </div>

                            <div className="col-6">
                                <p className="copyright-text mb-0">Copyright © 2021</p>


                            </div>

                            <div className="col-lg-3 col-5 ms-auto">
                                <ul className="social-icon">
                                    <li><a href="#" className="social-icon-link bi-facebook"></a></li>

                                    <li><a href="#" className="social-icon-link bi-twitter"></a></li>

                                    <li><a href="#" className="social-icon-link bi-whatsapp"></a></li>

                                    <li><a href="#" className="social-icon-link bi-instagram"></a></li>

                                    <li><a href="#" className="social-icon-link bi-youtube"></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </footer>
            </div>
        )

    }

}

export default Registro;