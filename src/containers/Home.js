import React, { Component } from 'react';
import getWeb3 from '../getWeb3';
import DigiCertContract from "../digicert";
import M from 'materialize-css/dist/js/materialize.min.js'
//import InstituteDashboard from '../components/InstituteDashboard.js';
//import AdminDashboard from '../components/AdminDashboard.js';
import StudentDashboard from '../components/StudentDashboard.js';
//import ThirdPersonDashboard from '../components/ThirdUserDashboard.js';
import Footer from '../components/Footer';


const converter = (web3) => {
    return(value) => {
        return web3.utils.fromWei(value.toString(), 'ether');
    }
}

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            balance:0,
            account:undefined
        };
    }

    async componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            M.AutoInit();
            });

        this.web3 = await getWeb3();
        this.toEther = converter(this.web3);
        this.digicert = await DigiCertContract(this.web3.currentProvider);


        var account = (await this.web3.eth.getAccounts())[0];

        this.setState({
            account: account
        }, () => {
            this.load();
        });
    }

    async getBalance(){
        let weiBalance = await this.web3.eth.getBalance(this.state.account);
        this.setState({
            balance: this.toEther(weiBalance)
        });
    }

    async load(){
        this.getBalance();
    }

    render() {
        return (
            <React.Fragment>
                <StudentDashboard cuenta={this.state.account} balance={this.state.balance}/>
                <Footer />
            </React.Fragment>
        );  
    }
}

export default Home;