import React, { Component } from 'react';

class ThirdUserDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            //para consultar certificados
            certificate:{},
            ipfs_hash:'',
        };
    }

    async componentDidMount(){    
        this.setState({
            
        }, () => {
            this.load();//cargamos la aplicacion luego de obtener los elementos
        });
    }

    //metodo para realizar la consulta de certificados
    async askCertificateThird(ipfs_hash)
    {
        let certificate = await this.props.cMethods.askCertificateThird(
            ipfs_hash,
            this.state.account
            )
        this.setState({
             certificate
        });
        this.showVerifiedCertificate();
    }

    //funcion para mostrar los datos de la consulta de certificados
    showVerifiedCertificate(){
        console.log(this.state.certificate)
    }
    //metodo para cargar los componentes de manera local
    async load(){
    }
 
    //metodo para sincronizar los imputs con el estado del componente
    syncFormsChanges(value,property){
        let state = {};
        state[property] = value; 
        this.setState(state);
    }

    render(){
        return (
            <React.Fragment>
                <header>
                    <div className="navbar-fixed">
                        <nav className="cyan darken-2">
                            <div className="nav-wrapper container">
                                <div className="brand-logo left" style={{paddingLeft: "20px"}}>DigiCert</div>
                            </div>
                        </nav>
                    </div>
                </header>
            
                <main>
                    <div className="container">
                        <div className="col s12">
                            <div style={{padding: "35px"}} align="center" className="card">
                                <div className="row">
                                    <div className="center card-title">
                                        <h4>Consultar Certificado</h4>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="row container" style={{paddingTop: "35px"}}>
                                    <div className="justify">
                                        <p>Para poder consultar un certificado, deberá iniciar sesión en Metamask además y proveer el Hash del certificado en cuestión.</p>
                                    </div>
                                </div>
                                <div className="row container" style={{padding: "35px"}}>
                                    <form action="" className="col s12">
                                        
                                        <div className="row">
                                            <div className="input-field">
                                                <i className="material-icons prefix">widgets</i>
                                                <input
                                                    onChange = { (ev) => {
                                                        this.syncFormsChanges(ev.target.value, 'ipfs_hash')
                                                    }}
                                                    id="institute_addres" 
                                                    type="text" 
                                                    className="validate"
                                                    value={this.state.ipfs_hash}
                                                />
                                                <label htmlFor="institute_addres">Hash IPFS del Certificado</label>
                                            </div>
                                        </div>
                                        <a
                                            onClick = { () => this.askCertificateThird(this.state.ipfs_hash)}
                                            className="btn waves-effect waves-light modal-trigger" href="#modal1">Consultar
                                                <i className="material-icons right">send</i>
                                        </a>
                                    </form>
                                </div>
                                
                                <div id="modal1" className="modal">
                                    <div className="modal-content">
                                    <h4>Correcto!</h4>
                                    <div className="divider"></div>
                                    <h5>El certificado fue verificado satisfactoriamente</h5>
                                    <div className="row container">
                                        <ul>
                                            <li>
                                                <span><b>Emitido Por: </b>{this.state.certificate.name_institute}</span>
                                            </li>
                                            <li>
                                                <span><b>Direccion Pública de la Institución: </b>{this.state.certificate.address_institute}</span>
                                            </li>
                                            <li>
                                                <span><b>Título: </b>{this.state.certificate.title}</span>
                                            </li>
                                            <li>
                                                <span><b>Propietario: </b>{this.state.certificate.student_name} {this.state.certificate.student_lastName}</span>
                                            </li>
                                            <li>
                                                <span><b>Fecha de Emisión: </b>{this.state.certificate.date}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="modal-footer">
                                    <a href="#!" className="modal-close waves-effect waves-green btn">ACEPTAR</a>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
};

export default ThirdUserDashboard;