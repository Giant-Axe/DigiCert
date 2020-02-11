import React, { Component } from 'react';

class ThirdUserDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            //para consultar certificados
            paddress:'',
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
    async askCertificateThird(address, ipfs_hash)
    {
        let certificate = await this.props.cMethods.askCertificateThird(
            address,
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
                                {/* <div className="right"><a className="waves-effect waves-green btn black">INGRESAR</a></div> */}
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
                                <div className="row">
                                    <div className="justify">
                                        <p>Para poder consultar un certificado, deberá iniciar sesión en Metamask además, proveer la dirección publica del Estudiante al que pertenece el certificado en cuestión, así como el Hash perteneciente al certificado.</p>
                                    </div>
                                </div>
                                <div className="row container">
                                    <form action="" className="col s12">
                                        <div className="row">
                                            <div className="input-field">
                                                <i className="material-icons prefix">public</i>
                                                <input 
                                                    onChange = { (ev) => {
                                                        this.syncFormsChanges(ev.target.value, 'paddress')
                                                    }}
                                                    id="institute_name" 
                                                    type="text" 
                                                    className="validate"
                                                    value = {this.state.paddress}
                                                />
                                                <label htmlFor="institute_name">Direccion Pública del Estudiante</label>
                                            </div>
                                        </div>
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
                                        <div id="modal1" className="modal">
                                            <div className="modal-content">
                                            <h4>Modal Header</h4>
                                            <p>A bunch of text</p>
                                            </div>
                                            <div className="modal-footer">
                                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                                            </div>
                                        </div>
                                        <button
                                            onClick = { () => this.askCertificateThird(this.state.paddress, this.state.ipfs_hash)}
                                            className="btn waves-effect waves-light" type="submit" data-target="modal1">Consultar
                                                <i className="material-icons right">send</i>
                                        </button>
                                    </form>
                                    
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