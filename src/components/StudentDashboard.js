import React, { Component } from 'react';

class StudentDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            account: this.props.account,
            balance: this.props.balance,
            //datos del estudiante
            student:{},
        }
    }
    
    componentDidMount(){
        this.setState({
            
        }, () => {
            this.load();//cargamos la aplicacion luego de obtener los elementos
        });
    }
    
    //metodo para obtener los datos del estudiante
    async getStudentData(){
        let student = await this.props.cMethods.getStudentData(this.state.account);
        this.setState({
            student
        });
    }

    //metodo para cargar los componentes de manera local
    async load(){
        this.getStudentData();
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="navbar-fixed">
                        <nav className="cyan darken-2">
                            <div className="nav-wrapper container">
                                <div className="brand-logo left" style={{paddingLeft: "20px"}}>DigiCert</div>
                                {/* <div className="right"><a className="waves-effect waves-green btn black">SALIR</a></div> */}
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
                                        <i className="material-icons large icon-navbar">school</i>
                                    </a>
                                    <a href="#!">
                                        <span className="white-text"><b>Estudiante</b></span>
                                        <span className="name white-text"><b>Cuenta: </b>{this.state.account}</span>
                                        <span className="name white-text"><b>Balance: </b>{this.state.balance} Ether</span>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <a href="#d_student" className="waves-effect waves-teal"><i className="material-icons sidenav-close">school</i>Datos del Estudiante</a>
                            </li>
                            <li>
                                <div className="divider"></div>
                            </li>

                            <li>
                                <a href="#e_student" className="waves-effect waves-teal"><i className="material-icons sidenav-close">mode_edit</i>Editar Datos del Estudiante</a>
                            </li>
                            <li>
                                <div className="divider"></div>
                            </li>

                            <li>
                                <a href="#c_student" className="waves-effect waves-teal"><i className="material-icons sidenav-close">description</i>Certificados del Estudiante</a>
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

                            {/* <li>
                                <a href="#!" className="waves-effect waves-red"><i className="material-icons">settings_power</i>SALIR</a>
                            </li> */}
                        </ul>
                    </div>
                </header>

                <main>

                    <div className="container">
                        <div id="d_student" className="row scrollspy">
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
                                                <span><b>Nombre del Estudiante: </b> {this.state.student.name_student}</span>
                                            </li>
                                            <li>
                                                <span><b>Correo Electrónico: </b>{this.state.student.email}</span>
                                            </li>
                                            <li>
                                                <span><b>Teléfono: </b>{this.state.student.phone}</span>
                                            </li>
                                            <li>
                                                <span><b>Número de Certificados : </b>{this.state.student.qt_certificates}</span>
                                            </li>
                                            <li>
                                                <span><b>Fecha de Incorporación: </b>{this.state.student.added_timestamp}</span>
                                            </li>
                                            <li>
                                                <span><b>Última Actualización: </b>{this.state.student.updated_timestamp}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div id="e_student" className="row scrollspy">
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
                                                    <i className="material-icons prefix">email</i>
                                                    <input id="institute_addres" type="text" className="validate" />
                                                    <label htmlFor="institute_addres">Correo Electrónico</label>
                                                </div>
                                            </div>
                
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">local_phone</i>
                                                    <input id="institute_name" type="text" className="validate" />
                                                    <label htmlFor="institute_name">Teléfono</label>
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
                
                        <div id="c_student" className="row scrollspy">
                            <div className="col s12">
                                <div style={{padding: "35px"}} align="center" className="card">
                                    <div className="row">
                                        <div className="left card-title">
                                            <b>Certificados Del Estudiante</b>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="row">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Organización</th>
                                                <th>Título</th>
                                                <th>Fecha de Emisión</th>
                                            </tr>
                                            </thead>
                                    
                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>UMSA</td>
                                                <td>Licenciado en Informatica</td>
                                                <td>05/08/2002</td>
                                                <td><button className="btn-small waves-effect waves-light" type="submit" name="action">
                                                        <i className="material-icons right">file_download</i>Descargar
                                                    </button></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>UMSA</td>
                                                <td>Maestria en Ciencias de la Computacion</td>
                                                <td>10/09/2008</td>
                                                <td><button className="btn-small waves-effect waves-light" type="submit" name="action">
                                                        <i className="material-icons right">file_download</i>Descargar
                                                    </button></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Universidad Católica San Pablo</td>
                                                <td>Licenciado en Derecho</td>
                                                <td>10/10/2013</td>
                                                <td><button className="btn-small waves-effect waves-light" type="submit" name="action">
                                                        <i className="material-icons right">file_download</i>Descargar
                                                    </button></td>
                                            </tr>
                                            </tbody>
                                        </table>    
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

export default StudentDashboard;