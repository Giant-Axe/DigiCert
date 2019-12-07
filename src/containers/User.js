import React, { Component } from 'react';
//import InstituteDashboard from '../components/InstituteDashboard.js';
//import AdminDashboard from '../components/AdminDashboard.js';
//import StudentDashboard from '../components/StudentDashboard.js';
import ThirdPersonDashboard from '../components/ThirdUserDashboard.js';

class User extends Component {
    componentDidMount(){

    }

    render() {
        return (
            <ThirdPersonDashboard />   
        );
    }
}


export default User;