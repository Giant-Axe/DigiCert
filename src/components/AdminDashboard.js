import React, { Component } from 'react';


class AdminDashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            institutes:[]
        }
    }
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="navbar-fixed">
                        <nav className="cyan darken-2">
                            <div className="nav-wrapper container">
                                <div className="brand-logo left" style={{paddingLeft: "20px"}}>DigiCert</div>
                                {/* <div className="right"><a href="#!" className="waves-effect waves-green btn black">SALIR</a></div> */}
                            </div>
                            <div className="nav-wrapper cyan darken-3">
                                <div className="container">
                                    <a href="#!" style={{marginLeft: "20px"}} className="breadcrumb sidenav-trigger" data-target="menu-side"><i className="material-icons">menu</i></a>
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
                                    <a href="#!">
                                        <i className="material-icons large icon-navbar">next_week</i>
                                    </a>
                                    <a href="#!">
                                        <span className="white-text"><b>Admin</b></span>
                                        <span className="name white-text"><b>Cuenta: </b>{this.props.account}</span>
                                        <span className="name white-text"><b>Balance: </b>{this.props.balance} Ether</span>
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

                            {/* <li>
                                <a href="#!" className="waves-effect waves-red"><i className="material-icons">settings_power</i>SALIR</a>
                            </li> */}
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
                                                        <label htmlFor="institute_name">Nombre de la Institución</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="input-field col s6">
                                                        <i className="material-icons prefix">public</i>
                                                        <input id="institute_addres" type="text" className="validate" />
                                                        <label htmlFor="institute_addres">Direccion Pública de la Institución</label>
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
                    </div>
                </main>
            </React.Fragment>
        );
    }
}


export default AdminDashboard;