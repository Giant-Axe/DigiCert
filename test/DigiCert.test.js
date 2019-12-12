const DigiCert = artifacts.require('DigiCert');

let instance;

beforeEach(async () => {
    instance = await DigiCert.new();
});

contract('DigiCert', accounts => {

    //evalua quien es el dueño del contrato desplegado
    it('should have an contract´s user', async() => {
        let contractOwner = await instance._owner();
        
        assert.equal(contractOwner,accounts[0]);
    });
    //evalua si existe usuarios registrados en el contrato
    it('should have available users', async() => {
        let user = await instance._qt_users();
        
        assert(user > 0);
    });

    //evalua los tipos de usuario que esxisten en el contrato
    it ('should have users type', async() => {
        let userA = await instance.T_ADMIN();
        let userO = await instance.T_ORGANIZATION();
        let userS = await instance.T_STUDENT();
        
        assert(userA==='0x01' && userO==='0x02' && userS==='0x03');
    });

    //evalua el tipo de usuario que esta interactuando con el contrato
    it('shoul reconize the user type insteracting with the contarct', async() => {
        let user = await instance.userType(accounts[0]);
        let user2 = await instance.userType(accounts[1]);
        
        assert.equal (user.toNumber(),101);
        assert.equal (user2.toNumber(),100);
    });

    //evalua la funcion de agregado de nuevas instituciones
    it('should allow to add new institutes', async() => {
        await instance.addOrganization(accounts[1],'umsa');
        let newOrganization = await instance._organizations(accounts[1]);
        let name = await instance.organizations_added(0);
        
        assert.equal (newOrganization[0], accounts[1]);
        assert.equal (name[1],newOrganization[1]);
        assert(await instance.totalOrganizations()>0);
    });

    //evalua la funcion de seteo de datos de la institucion
    it('should allow set institute´s personal data', async() => {
        await instance.addOrganization(accounts[1],'umsa');
        let _phone = 75840194;
        let _email = 'umsa@gmail.com';
        let _web_page = 'umsa.com.bo';
        await instance.setOrganization(_phone, _email, _web_page,{ from: accounts[1]} );
        let organizationSettedUp = await instance.organizations_added(0);
        
        assert(await instance.totalOrganizations()>0);
        assert.equal (await organizationSettedUp[1],'umsa');
    });

    //evalua la funcion de agregado de alumnos
    it('should allow add new students by institutes', async() => {
        await instance.addOrganization(accounts[1],'umsa');
        await instance.addStudent(accounts[2], 'Jaime Jesus', 'Alvarado Perez', {from:accounts[1]});
        let student = await instance._students(accounts[2]);
        
        assert.equal(student[0],accounts[2]);
        assert (await instance._users(accounts[2]==='0x03'));
        assert.equal (await instance.userType(accounts[2]), 103);
    });

    //evalua la funcion de emision de certificados
    it('should allow institutes to emit a certificate for a student', async() => {
        await instance.addOrganization(accounts[1],'umsa');
        await instance.addStudent(accounts[2], 'Jaime Jesus', 'Alvarado Perez', {from:accounts[1]});
        await instance.addCertificate(accounts[2], 'licenciado en informatica', '0x014249110', { from: accounts[1]});

        let certificate = await instance.getCertificateEstudent(accounts[2],0);
        let student = await instance._students(accounts[2]);
        let organization = await instance._organizations(accounts[1]);

        assert.equal(certificate[6],accounts[1]);
        assert (student[5].toNumber()>0);
        assert (organization[5].toNumber()>=1);
    });

    //evalua la funcion e corroboracion de certificados por parte de una tercera persona interesada
    it('should allow a third interested person to validate a certificate', async() => {
        await instance.addOrganization(accounts[1],'umsa');
        await instance.addStudent(accounts[2], 'Jaime Jesus', 'Alvarado Perez', {from:accounts[1]});
        await instance.addCertificate(accounts[2], 'licenciado en informatica', '0x014249110', { from: accounts[1]});

        let certificate = await instance.getCertificateThird(accounts[2], '0x014249110',{ from:accounts[3]});
        assert.equal(certificate[0], 'umsa');
        assert.equal(certificate[1], accounts[1]);
        assert.equal(certificate[4], 'licenciado en informatica');
        
    });
});
