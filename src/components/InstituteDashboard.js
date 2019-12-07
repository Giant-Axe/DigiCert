import React, { Component } from 'react';

class InstituteDashboard extends Component {

    componentDidMount(){
        
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="navbar-fixed">
                        <nav className="cyan darken-2">
                            <div className="nav-wrapper container">
                                <div className="brand-logo left" style={{paddingLeft: "20px"}}>DigiCert</div>
                                <div className="right"><a className="waves-effect waves-green btn black">SALIR</a></div>
                            </div>
                            <div className="nav-wrapper cyan darken-3">
                                <div className="container">
                                    <a href="#" style={{marginLeft: "20px"}} className="breadcrumb sidenav-trigger" data-target="menu-side"><i className="material-icons">menu</i></a>
                                    <a className="breadcrumb" href="#!">Escritorio</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="container section">
                        <ul className="sidenav sidenav-fixed" id="menu-side">
                            <li>
                                <div className="user-view">
                                    <div className="background cyan darken-2">
                                    </div>
                                    <a href="#">
                                        <i className="material-icons large icon-navbar">account_balance</i>
                                    </a>
                                    <a>
                                        <span className="white-text"><b>Institución</b></span>
                                        <span className="name white-text"><b>Cuenta: </b>0x0sasd0asda0sdasd0wdg0dfgf</span>
                                        <span className="name white-text"><b>Balance: </b>99.9 Ether</span>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <a href="#d_institute" className="waves-effect waves-teal"><i className="material-icons sidenav-close">account_balance</i>Datos de la Institución</a>
                            </li>
                
                            <li>
                                <div className="divider"></div>
                            </li>

                            <li>
                                <a href="#a_student" className="waves-effect waves-teal"><i className="material-icons sidenav-close">school</i>Añadir Estudiante</a>
                            </li>

                            <li>
                                <div className="divider"></div>
                            </li>

                            <li>
                                <a href="#e_certificate" className="waves-effect waves-teal"><i className="material-icons sidenav-close">description</i>Emitir Certificado</a>
                            </li>
                            <li>
                                <div className="divider"></div>
                            </li>

                            <li>
                                <a href="#c_certificate" className="waves-effect waves-teal"><i className="material-icons sidenav-close">check</i>Consultar Certificado</a>
                            </li>
                            <li>
                                <div className="divider"></div>
                            </li>

                            <li>
                                <a href="#e_institute" className="waves-effect waves-teal"><i className="material-icons sidenav-close">mode_edit</i>Editar Datos de la Institución</a>
                            </li>
                            
                            <li>
                                <div className="divider"></div>
                            </li>

                            <li>
                                <a href="#" className="waves-effect waves-red"><i className="material-icons">settings_power</i>SALIR</a>
                            </li>
                        </ul>
                    </div>
                </header>

                <main>

                    <div className="container">
                        <div id="d_institute" className="row scrollspy">
                            <div className="col s12">
                                <div style={{padding: "35px"}} align="center" className="card">
                                    <div className="row">
                                        <div className="left card-title">
                                            <b>Datos de la Institución</b>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="row">
                                        <ul>
                                            <li>
                                                <span><b>Nonbre de la Institución: </b>Universidad Mayor de San Andrés</span>
                                            </li>
                                            <li>
                                                <span><b>Teléfono: </b>12345678</span>
                                            </li>
                                            <li>
                                                <span><b>Correo Electrónico: </b>umsa@gmail.com</span>
                                            </li>
                                            <li>
                                                <span><b>Página Web: </b>www.umsa.edu.bo</span>
                                            </li>
                                            <li>
                                                <span><b>Número de Certificados Emitidos: </b>39</span>
                                            </li>
                                            <li>
                                                <span><b>Fecha de Creación: </b>10/10/2019</span>
                                            </li>
                                            <li>
                                                <span><b>Última Actualización: </b>12/10/2019</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="a_student" className="row scrollspy">
                            <div className="col s12">
                                <div style={{padding: "35px"}} align="center" className="card">
                                    <div className="row">
                                        <div className="left card-title">
                                            <b>Añadir Estudiante</b>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="row">
                                        <form action="" className="col s12">
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">account_circle</i>
                                                    <input id="institute_name" type="text" className="validate" />
                                                    <label htmlFor="institute_name">Nombre del Estudiante</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">account_circle</i>
                                                    <input id="institute_name" type="text" className="validate" />
                                                    <label htmlFor="institute_name">Apellido del Estudiante</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">public</i>
                                                    <input id="institute_addres" type="text" className="validate" />
                                                    <label htmlFor="institute_addres">Direccion Pública del Estudiante</label>
                                                </div>
                                            </div>
                                            <button className="btn waves-effect waves-light" type="submit">Enviar
                                                <i className="material-icons right">send</i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="e_certificate" className="row scrollspy">
                            <div className="col s12">
                                <div style={{padding: "35px"}} align="center" className="card">
                                    <div className="row">
                                        <div className="left card-title">
                                            <b>Emitir Certificado</b>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="row">
                                        <form action="" className="col s12">
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">public</i>
                                                    <input id="institute_name" type="text" className="validate" />
                                                    <label htmlFor="institute_name">Direccion Pública del Estudiante</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">school</i>
                                                    <input id="institute_addres" type="text" className="validate" />
                                                    <label htmlFor="institute_addres">Nombre del Estudiante</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="file-field input-field col s6">
                                                    <div className="btn blue-grey">
                                                        <span>Archivo</span>
                                                        <input type="file" />
                                                    </div>
                                                    <div className="file-path-wrapper">
                                                        <input className="file-path validate" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn waves-effect waves-light" type="submit">Enviar
                                                <i className="material-icons right">send</i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="c_certificate" className="row scrollspy">
                            <div className="col s12">
                                <div style={{padding: "35px"}} align="center" className="card">
                                    <div className="row">
                                        <div className="left card-title">
                                            <b>Consultar certificado</b>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="row">
                                        <form action="" className="col s12">
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">public</i>
                                                    <input id="institute_name" type="text" className="validate" />
                                                    <label htmlFor="institute_name">Direccion Pública del Estudiante</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">widgets</i>
                                                    <input id="institute_addres" type="text" className="validate" />
                                                    <label htmlFor="institute_addres">Hash IPFS del Certificado</label>
                                                </div>
                                            </div>
                                            <button className="btn waves-effect waves-light" type="submit">Enviar
                                                    <i className="material-icons right">send</i>
                                                </button>
                                        </form>
                                    </div>
                                </div>   
                            </div>
                        </div>
                        <div id="e_institute" className="row scrollspy">
                            <div className="col s12">
                                <div style={{padding: "35px"}} align="center" className="card">
                                    <div className="row">
                                        <div className="left card-title">
                                            <b>Editar Datos</b>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="row">
                                        <form action="" className="col s12">
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">local_phone</i>
                                                    <input id="institute_name" type="text" className="validate" />
                                                    <label htmlFor="institute_name">Teléfono</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">email</i>
                                                    <input id="institute_addres" type="text" className="validate" />
                                                    <label htmlFor="institute_addres">Correo Electrónico</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">language</i>
                                                    <input id="institute_addres" type="text" className="validate" />
                                                    <label htmlFor="institute_addres">Página Web</label>
                                                </div>
                                            </div>
                                            <button className="btn waves-effect waves-light" type="submit">Enviar
                                                <i className="material-icons right">send</i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default InstituteDashboard;