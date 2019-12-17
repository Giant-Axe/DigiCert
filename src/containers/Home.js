import React, { Component } from 'react';
import getWeb3 from '../getWeb3';
import DigiCertContract from '../digicert';
import M from 'materialize-css/dist/js/materialize.min.js';
import { ContractFunctions } from '../digicertMethods';//importamos los metodos del contrato
import ThirdUserDashboard from '../components/ThirdUserDashboard';
import AdminDashboard from '../components/AdminDashboard';
import InstituteDashboard from '../components/InstituteDashboard';
import StudentDashboard from '../components/StudentDashboard';
import Footer from '../components/Footer';


//funcion para convertir wei a ether
const converter = (web3) => {
    return (value) => {
        return web3.utils.fromWei(value.toString(), 'ether');
    }
}

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            user:100,
            account: undefined,
            balance: 0
        }
    }

    async componentDidMount(){

        document.addEventListener('DOMContentLoaded', function() {
            M.AutoInit();
        });

        //hacemos uso de la instancia de web3 que importamos
        this.web3 = await getWeb3();
        //creamos la funcion para pasarle la instancia web3
        this.toEther = converter(this.web3);
        //instanciamos para trabajar con el proyecto
        this.digicert = await DigiCertContract(this.web3.currentProvider);
        //creamos una instancia de adminFunctions
        this.digicertMethods = new ContractFunctions(this.digicert);
        //recuperamos la cuenta con la que estamos trabajando
        var account = (await this.web3.eth.getAccounts())[0];
        
        //guardamos la cuenta en el estado de react
        this.setState({
            account
        }, () => {
            this.load();//cargamos la aplicacion luego de obtener los elementos
        });
    }

    //metodo para recuperar el tipo de usuario dependiendo de metamask y el contrato
    async getUser(){
        let user = await this.digicertMethods.getUserType(this.state.account)
        this.setState({
            user
        });
    }
    //metodo para recuperar el balance de la cuenta actual de metamask
    async getBalance(){
        //recuperamos el balance de la cuenta en Wei
        let weiBalance = await this.web3.eth.getBalance(this.state.account);
        //guardamos el balance dentro de balance
        this.setState({
            balance: this.toEther(weiBalance)
        });
    }
    
    //metodo para cargar los elementos
    async load(){
        //llamamos la funcion getBalance
        this.getBalance();
        //llamamos al metodo getUser
        this.getUser();
    }

    render() {
        if(this.state.user===101){
            return (
                <React.Fragment>
                    <AdminDashboard account={this.state.account} balance={this.state.balance} cMethods={this.digicertMethods}/>
                    <Footer />
                </React.Fragment>
            );  
        }if(this.state.user===102){
            return (
                <React.Fragment>
                    <InstituteDashboard account={this.state.account} balance={this.state.balance} cMethods={this.digicertMethods}/>
                    <Footer />
                </React.Fragment>
            );  
        }if(this.state.user===103){
            return (
                <React.Fragment>
                    <StudentDashboard account={this.state.account} balance={this.state.balance} cMethods={this.digicertMethods}/>
                    <Footer />
                </React.Fragment>
            );  
        }else{
            return (
                <React.Fragment>
                    <ThirdUserDashboard />
                    <Footer />
                </React.Fragment>
            );
        }    
    }
}

export default Home;