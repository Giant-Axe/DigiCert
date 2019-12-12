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


    //metodo para la obtencion las instituciones
    async getInstitutes(){
        let total = await this.getTotalInstitutes();
        let institutes = [];
        for (var i = 0; i < total; i++){
            let institute = await this.contract.institutes(i);
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
                organization_address: [0],
                name_organization:[1],
                phone:[2].toNumber(),
                email:[3],
                web_page:[4],
                added_timestamp: [7].toNumber()
            }
        });
    }
}