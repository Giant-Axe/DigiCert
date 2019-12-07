import React from 'react';

const Footer = () => {
    return (
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
                            <li><a href="#!" className="grey-text text-lighten-3">Codigo Fuente</a></li>
                            <li><a href="#!" className="grey-text text-lighten-3">Smart Contract</a></li>
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
    );
};


export default Footer;