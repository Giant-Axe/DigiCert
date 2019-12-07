import React from 'react';

const ThirdUserDashboard = props => {
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
                                            <input id="institute_name" type="text" className="validate" />
                                            <label htmlFor="institute_name">Direccion Pública del Estudiante</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field">
                                            <i className="material-icons prefix">widgets</i>
                                            <input id="institute_addres" type="text" className="validate" />
                                            <label htmlFor="institute_addres">Hash IPFS del Certificado</label>
                                        </div>
                                    </div>
                                    <button className="btn waves-effect waves-light black" type="submit">Consultar
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
};

export default ThirdUserDashboard;