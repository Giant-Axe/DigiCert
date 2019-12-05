import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

class AdminDashboard extends Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav','.scrollspy');
            var instances = M.Sidenav.init(elems);
            var instances = M.ScrollSpy.init(elems);
            });
    }

    render() {
        return (
            <body>
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
                                        <i className="material-icons large icon-navbar">next_week</i>
                                    </a>
                                    <a>
                                        <span className="white-text"><b>Admin</b></span>
                                        <span className="name white-text"><b>Cuenta: </b>0x0sasd0asda0sdasd0wdg0dfgf</span>
                                        <span className="name white-text"><b>Balance: </b>99.9 Ether</span>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <a href="#organization" className="waves-effect waves-teal"><i className="material-icons sidenav-close">account_balance</i>Ver Instituciones</a>
                            </li>
                            <li>
                                <div className="divider"></div>
                            </li>

                            <li>
                                <a href="#a_organization" className="waves-effect waves-teal"><i className="material-icons sidenav-close">add</i>Añadir Institución</a>
                            </li>
                            <li>
                            <div className="divider"></div>
                            </li>

                            <li>
                                <a href="#a_organization" className="waves-effect waves-teal"><i className="material-icons sidenav-close">check</i>Consultar Certificado</a>
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
                        <div id="organization" className="row scrollspy">
                            <div className="col s12">
                                <div style={{padding: "35px"}} align="center" className="card section ">
                                    <div className="row">
                                        <div className="left card-title">
                                            <b>Instituciones</b>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="row">
                                        <table className="centered striped responsive-table">
                                            <thead>
                                            <tr>
                                                <th>Nonbre de la Institución</th>
                                                <th>Dirección</th>
                                                <th>Fecha de Emisión</th>
                                                </tr>
                                            </thead>
                                        
                                            <tbody>
                                                <tr>
                                                    <td>Alvin</td>
                                                    <td>Eclair</td>
                                                    <td>$0.87</td>
                                                </tr>
                                                <tr>
                                                    <td>Alan</td>
                                                    <td>Jellybean</td>
                                                    <td>$3.76</td>
                                                </tr>
                                                <tr>
                                                    <td>Jonathan</td>
                                                    <td>Lollipop</td>
                                                    <td>$7.00</td>
                                                </tr>
                                            </tbody>
                                        </table>    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="a_organization" className="row scrollspy">
                                <div className="col s12">
                                    <div style={{padding: "35px"}} align="center" className="card">
                                        <div className="row">
                                            <div className="left card-title">
                                                <b>Añadir Institución</b>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="row">
                                            <form action="" className="col s12">
                                                <div className="row">
                                                    <div className="input-field col s6">
                                                        <i className="material-icons prefix">account_balance</i>
                                                        <input id="institute_name" type="text" className="validate" />
                                                        <label for="institute_name">Nombre de la Institución</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="input-field col s6">
                                                        <i className="material-icons prefix">public</i>
                                                        <input id="institute_addres" type="text" className="validate" />
                                                        <label for="institute_addres">Direccion Pública de la Institución</label>
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
                                                    <label for="institute_name">Direccion Pública del Estudiante</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">widgets</i>
                                                    <input id="institute_addres" type="text" className="validate" />
                                                    <label for="institute_addres">Hash IPFS del Certificado</label>
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
                

                <footer className="page-footer cyan darken-3">
                    <div className="container">
                        <div className="row">
                            <div className="col 16 s12">
                                <h3 className="white-text">Créditos</h3>
                                <p>DigiCert es un proyecto que combina la tecnologia blockchain e IPFS para la emision y verificacion de certificados academicos de manera descentralizada.</p>
                                <p>Las tecnologías usadas en el presente proyecto de manera directa o indirecta son: <b>IPFS, Ethereum, Metamask, Babel, ReactJs, Materialize(CSS)</b></p>
                            </div>
                            <div className="col 14 offset-12 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a href="#" className="grey-text text-lighten-3">Codigo Fuente</a></li>
                                    <li><a href="#" className="grey-text text-lighten-3">Smart Contract</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2019 Contenido Open Source
                        </div>
                    </div>
                </footer>
            </body>
        );
    }
}


export default AdminDashboard;