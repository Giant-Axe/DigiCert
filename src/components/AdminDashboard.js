import React, { Component } from 'react';


class AdminDashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            account:this.props.account,
            balance:this.props.balance,
            institutes:[],
            /*para agregar nuevas instituciones*/ 
            paddress:'',
            _name_organization:'',
            //para consultar certificados
            certificate:{},   
            ipfs_hash: '',     
        };
    }

    async componentDidMount(){
        
        this.setState({
            
        }, () => {
            this.load();//cargamos la aplicacion luego de obtener los elementos
        });
    }
    //metodo para añadir instituciones
    async addInstitutes(address,name){
        await this.props.cMethods.addInstitute(
            address, 
            name, 
            this.state.account
        );
    }
    //metodo para mostrar las instituciones
    async getInstitutes(){
        let institutes = await this.props.cMethods.getInstitutes();
        this.setState({
            institutes
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
        console.log(certificate);
    }

    //metodo para cargar los elementos del componente local
    async load(){
        this.getInstitutes();
    }
    //metodo para sincronizar los imputs con el estado del componente
    syncFormsChanges(value,property){
        let state = {};
        state[property] = value; 
        this.setState(state);
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
                                        <span className="name white-text"><b>Cuenta: </b>{this.state.account}</span>
                                        <span className="name white-text"><b>Balance: </b>{this.state.balance} Ether</span>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <a href="#v_organization" className="waves-effect waves-teal"><i className="material-icons sidenav-close">account_balance</i>Ver Instituciones</a>
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
                        <div id="v_organization" className="row scrollspy">
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
                                                {this.state.institutes.map((institute, i) => {
                                                    return <tr key={i}>
                                                        <td>{institute.name_organization}</td>
                                                        <td>{institute.organization_address}</td>
                                                        <td>{institute.added_timestamp}</td>
                                                    </tr>
                                                })}
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
                                                        <i className="material-icons prefix">public</i>
                                                        <input 
                                                            onChange = {(ev) =>{this.syncAddInstitutesChanges(ev.target.value, 'paddress')}}
                                                            id="institute_addres" 
                                                            type="text" 
                                                            className="validate" 
                                                            value={this.state.paddress}
                                                        />
                                                        <label htmlFor="institute_addres">Direccion Pública de la Institución</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="input-field col s6">
                                                        <i className="material-icons prefix">account_balance</i>
                                                        <input 
                                                            onChange={ (ev)=>{ this.syncAddInstitutesChanges(ev.target.value, '_name_organization') }}
                                                            id="institute_name" 
                                                            type="text" 
                                                            className="validate" 
                                                            value={this.state._name_organization} 
                                                        />
                                                        <label htmlFor="institute_name">Nombre de la Institución</label>
                                                    </div>
                                                </div>
                                                <button 
                                                onClick={ () => this.addInstitutes(this.state.paddress, this.state._name_organization) }
                                                className="btn waves-effect waves-light" type="submit">Enviar
                                                    <i className="material-icons right">send</i>
                                                </button>
                                            </form>
                                        </div>
                                        {/* <div>
                                            <pre>{ JSON.stringify(this.state._name_organization,
                                                this.state.paddress)}</pre>
                                        </div> */}
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
                                                <div className="input-field col s6">
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
                                            <button
                                                onClick = { () => this.askCertificateThird(this.state.paddress, this.state.ipfs_hash)}
                                                className="btn waves-effect waves-light" type="submit">Enviar
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