//clase para manejo de funciones del administrador
export class ContractFunctions{
    constructor(contract){
        //guardamos dentro de la instancia el valor de contract
        this.contract = contract;
    }


    /********metodo para la obtencion del tipo de usuario*********/
    async getUserType(account){
        let user = (await this.contract.userType(account)).toNumber();
        return user;
    }


    /********metodo para añadir nuevas instituciones*************/
    async addInstitute(addres, name, from){
        return this.contract.addOrganization(addres, name, { from });
    }

    /********metodo para la obtencion las instituciones***********/
    async getInstitutes(){
        let total = await this.getTotalInstitutes();
        let institutes = [];
        for (var i = 0; i < total; i++){
            let institute = await this.contract.organizations_added(i);
            institutes.push(institute);
        }
        return this.mapInstitutes(institutes);
    }
    //funcion para devolver la cantidad de instituciones
    async getTotalInstitutes(){
        return (await this.contract.totalOrganizations()).toNumber();
    }

    //fucion de mapeo para el array de las instituciones
    mapInstitutes(institutes){
        return institutes.map(institute => {
            return {
                organization_address: institute[0],
                name_organization: institute[1],
                added_timestamp: institute[7].toNumber()
            }
        });
    }

    /*******metodo para obtener los datos de la institucion que inicia session *********/
    async getInstituteData(address){
        let institute = await this.contract._organizations(address);
        return this.mapInstituteData(institute);
    }
    //metodo para el mapeo de los datos de la institucion
    mapInstituteData(institute){
        let nInstitute = {
            name_organization: institute[1],
            phone: institute[2].toNumber(),
            email: institute[3],
            web_page: institute[4],
            qt_certificates_issued: institute[5].toNumber(),
            added_timestamp: institute[7].toNumber(),
            updated_timestamp: institute[8].toNumber(),
        }; 
        return nInstitute;
    }

    /*********************metodo para añadir nuevo estudinate ************************/
    async addNewStudent(address, name, lastName, from){
        return this.contract.addStudent(address, name, lastName, { from });
    }

    /********************metodo para añadir nuevos certificados **********************/
    async addNewCertificate(address, title, hash, from){
        return this.contract.addCertificate(address, title, hash, { from });
    }

    /*********************metodo para editar los datos de la institucion***************/
    async editInstituteData(phone, email, web_page, from){
        return this.contract.setOrganization(phone, email, web_page, { from });
    }

    /**********************metodo para consulta de certificados***********************/
    async askCertificateThird(address, hash, from){
        let certificate = await this.contract.getCertificateThird(address, hash, {from});
        return this.mapCertificateThird(certificate);
    }

    //metodo para el mapeo de certificados
    mapCertificateThird(certificate){
        let nCertificate = {
            name_institute:certificate[0],
            address_institute:certificate[1],
            student_name:certificate[2],
            student_lastName:certificate[3],
            title:certificate[4],
            date:certificate[5].toNumber(),
        };
        return nCertificate;
    }

    /********************metodo para obtener los datos del estudiante**************** */
    async getStudentData(address){
        let student = await this.contract._students(address);
        return this.mapStudentData(student);
    }
    //metodo para el mapeo de los datos de la institucion
    mapStudentData(student){
        let nStudent = {
            name_student: student[1],
            lastname_student: student[2],
            email: student[3],
            phone: student[4].toNumber(),
            qt_certificates: student[5].toNumber(),
            added_timestamp: student[7].toNumber(),
            updated_timestamp: student[8].toNumber(),
        }; 
        return nStudent;
    }

    /*********************metodo para editar los datos del estudiante***************/
    async editStudentData(email, phone, from){
        return this.contract.setStudent(email, phone, { from });
    }

    /*********************metodo para recuperar los certificados del Estudiante***************/
    async studentCertificates(address){

        let student = await this.contract._students(address);
        let ncert = student[5].toNumber();
        let certificates = [];
        for (var i = 0; i < ncert; i ++){
            let certificate = await this.contract.getCertificateEstudent(address, i);
            certificates.push(certificate);
        }
        return this.mapStudentCertificates(certificates);
    }
    //metodo para el mapeo de los certificados del estudiante
    mapStudentCertificates(certificates){
        return certificates.map(certificate => {
            return{
                id_c: certificate[0].toNumber(),
                name_u: certificate[1],
                hash_c: certificate[2],
                name_student: certificate[3],
                lastName_student: certificate[4],
                description: certificate[5],
                address_u: certificate[6],
                date: certificate[7].toNumber()
            }
        });
    }
}