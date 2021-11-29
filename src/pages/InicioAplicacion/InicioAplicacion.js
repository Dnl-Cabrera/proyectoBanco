//React Library
import React, { Component } from "react";

//Bootstrap Library
//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

//Template css Library
import "../../style/css/bootstrap.min.css"
import "../../style/css/bootstrap-icons.css"
import "../../style/css/magnific-popup.css"
import "../../style/css/aos.css"
import "../../style/css/templatemo-nomad-force.css"
import "../../style/css/custon.css"

//video
import video from "../../style/videos/814dc43e870597176cad645798825c03.mp4"
import imagen from "../../style/videos/792bd98f3e617786c850493560e11c45.jpg"



class InicioAplicacion extends React.Component {

    render() {
        return (
            <div>
                <section className="hero" id="hero">
                    <div className="heroText">
                        <h1 className="text-white mt-5 mb-lg-4">
                            Colpatria
                        </h1>

                        <p className="text-secondary-white-color">
                            Solicite su credito de libre inversión <strong className="custom-underline"> <a href="login.html" target="">Aqui</a></strong>
                        </p>
                    </div>

                    <div className="videoWrapper">
                        <video autoplay="true" loop="true" muted="" className="custom-video" poster={imagen}>
                            <source src={video} type="video/mp4" />

                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="overlay"></div>
                </section>

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

export default InicioAplicacion;