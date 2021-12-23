import React from "react";

class NavBar extends React.Component {
    render() {
        return (
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
                                    <a className="nav-link" href="/">Inicio</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="index.html#about">Nuestra historia</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="index.html#portfolio">Portafolio</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="index.html#news">Noticias</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="index.html#contact">Contactenos</a>
                                </li>

                                <a className="btn btn-primary" id="btn-login" href="/login" role="button">Ingresar</a>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;