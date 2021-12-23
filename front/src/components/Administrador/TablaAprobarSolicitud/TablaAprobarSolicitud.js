//React library
import React from "react";

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';

//Bootstrap library
import Style from "./TablaAprobarSolicitud.module.css"

class TablaAprobarSolicitud extends React.Component {

    render() {
        return (
          

            <div className="row p-1">
                <div className="row justify-content-center text-center" >
                    <div className="col" id={Style['celda-titulo']}>
                        {this.props.titulo1}
                    </div>
                    <div className="col" id={Style['celda-titulo']}>
                        {this.props.titulo2}
                    </div>
                    <div className="col" id={Style['celda-titulo']}>
                        {this.props.titulo3}
                    </div>
                    <div className="col" id={Style['celda-titulo']}>
                        {this.props.titulo4}
                    </div>
                    <div className="col" id={Style['celda-titulo']}>
                        {this.props.titulo5}
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col" id={Style['celda-contenido']}>
                        <input disabled id={Style['celda-input']} className="form-control" name={this.props.contenido1} ref={this.props.referencia1}/>
                    </div>
                    <div className="col" id={Style['celda-input']}>
                        <input disabled id={Style['celda-input']} className="form-control" name={this.props.contenido2} ref={this.props.referencia2}/>
                    </div>
                    <div className="col" id={Style['celda-input']}>
                        <input disabled id={Style['celda-input']} className="form-control" name={this.props.contenido3} ref={this.props.referencia3}/>
                    </div>
                    <div className="col" id={Style['celda-input']}>
                        <select id={Style['celda-input']} className="form-control" name={this.props.contenido4} ref={this.props.referencia4}>
                            <option value="Pendiente"selected>Pendiente</option>
                            <option value="Aprobado" >Aprobado</option>
                            <option value="Rechazado">Rechazado</option>
                        </select>
                        
                    </div>
                    <div className="col" id={Style['celda-input']}>
                        <input disabled id={Style['celda-input']} className="form-control" name={this.props.contenido5} ref={this.props.referencia5}/>
                    </div>
                </div>
            </div>

        )
    }

}

export default TablaAprobarSolicitud;