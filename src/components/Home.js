import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <body>
                <header>
                    <div classNameName="navbar-fixed">
                        <nav className="cyan darken-2">
                            <div className="nav-wrapper container">
                                <div className="brand-logo left" style={{paddingLeft: "20px"}}>DigiCert</div>
                                <div className="right"><a href="#" className="waves-effect waves-green btn black">INGRESAR</a></div>
                            </div>
                        </nav>
                    </div>
                </header>


                <main>
                    <div id="c_certificate" className="row scrollspy">
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

export default Home;