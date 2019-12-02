/*
    @author: Jaime Jesus Alvarado Perez
    @version: 1.0.0
    @date: 10/08/2019
*/
pragma solidity 0.4.24;

contract DigiCert{
    
   //Estructuras de los usuarios
    struct Organization {
        string name_organization;//nombre de la organizacion
        uint256 phone;//telefono
        string email;//correo de la institucion
        string web_page;//pagina web de la organizacion
        uint256 qt_certificates_issued;//cantidad de certificados emitidos
        address added_by;//añadido por...
        uint256 added_timestamp;//fecha que fue añadido
        uint256 updated_timestamp;//fecha en la que se actualizo la informacion
    }

    struct Student {
        string name_student;//nombre del Estudiante
        string lastname_student;//apellido del Estudiante
        string email;//correo
        uint256 phone;//telefono
        mapping (uint256 => Certificate) certificates;//mapping de los certificados que posee
        uint256 qt_certificates;//cantidad de certificados que posee el estudiante
        address added_by;//añadido por...
        uint256 added_timestamp;//fecha en que se añadio al estudiante
        uint256 updated_timestamp;//ultima fecha de actualizacion
    }
    
    struct Certificate {
        uint256 id;//id del certificado
        string organization; //nombre de la organizacion
        string title;//descripcion del certificado
        //string certificate_owner;//propietario del significado
        string ipfs_hash;//hash del protocolo ipfs donde se alojo
        address added_by;//añadido por ...
        uint256 added_timestamp;//fecha en la que se añadio el certificado
    }
  
    // Constantes
    bytes1 public constant T_ADMIN = 0x01;//administrador
    bytes1 public constant T_ORGANIZATION = 0x02;//organizacion
    bytes1 public constant T_STUDENT = 0x03;//estudiante
    bytes10 public constant VERSION = "1.0.0";//version del contrato

    address public _owner;//persona que desplego el contrato
    uint256 public _created_timestamp;//fecha de creacion del contrato
    uint256 public _qt_users = 0;//cantidad de usuarios que posee el contrato
    
    //mapeo de usuarios: 1-Admin, 2-Organizaciones, 3-Estudiantes
    
    mapping (address => bytes1) public _users;//mapping de usuarios
    mapping (address => Organization) public _organizations;//mapping de organizaciones
    mapping (address => Student) public _students;//mapping de estudiantes
    
    Certificate[] public certificates_hashes;
    
    //Constructor
    
    constructor() public payable
    {
        _owner = msg.sender;
        _created_timestamp = block.timestamp;

        _users[msg.sender] = T_ADMIN;
        _qt_users++;
    }
    
    /*
    addOrganization:
    Metodo para insertar una nueva organizacion.
    El administrador solo puede añadir organizaciones
    @parametros: address -> paddress  (Clave publica del usuario),
                 string  -> _name_organization (nombre de la organizacion),
                 string  -> _web_page (direccion de la pagina web de la organizacion)
    */
    function addOrganization(address paddress, string _name_organization) public payable
    {
      
      require(_users[msg.sender]==T_ADMIN && _users[paddress]== 0x00);
      
      bytes1 user_type;
      
      user_type = T_ORGANIZATION;

      Organization memory objOrganization;

      objOrganization.name_organization=_name_organization;
      objOrganization.qt_certificates_issued = 0;
      objOrganization.added_by = msg.sender;
      objOrganization.added_timestamp = block.timestamp;

      _organizations[paddress] = objOrganization;
      
      _users[paddress] = user_type;
      _qt_users += 1;
    }
    
    /*
    addStudent:
    Metodo para insertar un nuevo Estudiante.
    Solo la organizacion puede añadir Estudiantes
    @parametros: address -> paddress  (Clave publica del Estudiante),
                 string  -> _name_student (nombre del Estudiante),
                 string  -> _web_page (direccion de la pagina web de la organizacion)
    */
    
    function addStudent(address paddress, string _name_student, string _lastname_student)public payable
    {
      require(_users[msg.sender]==T_ORGANIZATION && _users[paddress]== 0x00);
    
      bytes1 user_type;
        
      user_type = T_STUDENT;

      Student memory objStudent;

      objStudent.name_student=_name_student;
      objStudent.lastname_student=_lastname_student;
      objStudent.qt_certificates = 0;
      objStudent.added_by = msg.sender;
      objStudent.added_timestamp = block.timestamp;

      _students[paddress] = objStudent;
      
      _users[paddress] = user_type;
      _qt_users += 1;
    }
    
    /*
    Añadir Certificado: addCertificate:
    Metodo para insertar un nuevo certificado de un Estudiante.
    Solo las organizaciones pueden añadir certificados.

    @parametros:    address ->  pstudent(clave publica del Estudiante),    
                    string  ->  _description(descripcion del certificado),
                    string  ->  ipfs_hash (Hash IPFS del certificado .pdf)
    */
    
    
  function addCertificate(address pstudent, string _title, string ipfs_hash) public payable
  {
    require(_users[msg.sender] == T_ORGANIZATION && _users[pstudent] == T_STUDENT);

    Student storage objStudent = _students[pstudent];
    Certificate memory objCertificate;

    objCertificate.id = objStudent.qt_certificates + 1;
    objCertificate.organization =_organizations[msg.sender].name_organization;
    objCertificate.title = _title;
    objCertificate.ipfs_hash = ipfs_hash;
    objCertificate.added_by = msg.sender;
    objCertificate.added_timestamp = block.timestamp;

    objStudent.certificates[objStudent.qt_certificates] = objCertificate;
    objStudent.qt_certificates += 1;
    
    objCertificate.id=certificates_hashes.length+1;
    certificates_hashes.push(objCertificate);

    Organization storage objOrganization = _organizations[msg.sender];
    objOrganization.qt_certificates_issued += 1;

    _students[pstudent] = objStudent;
    _organizations[msg.sender] = objOrganization;
  }
  
  /* setStudent / setOrganization:
    Method to update the information of a organization or a student.
    Only the organization or the student can update their details.

    @param string pipfs_hash IPFS hash with the details of the student*/
  
  function setStudent(string _email, uint256 _phone) public payable
  {
    require(_users[msg.sender] == T_STUDENT);

    Student memory objStudent = _students[msg.sender];

    objStudent.email = _email;
    objStudent.phone = _phone;
    objStudent.updated_timestamp = block.timestamp;

    _students[msg.sender] = objStudent;
  }

  function setOrganization(uint256 _phone, string _email, string _web_page) public payable
  {
    require(_users[msg.sender] == T_ORGANIZATION);

    Organization memory objOrganization = _organizations[msg.sender];

    objOrganization.phone = _phone;
    objOrganization.email = _email;
    objOrganization.web_page = _web_page;
    objOrganization.updated_timestamp = block.timestamp;

    _organizations[msg.sender] = objOrganization;
  }
  
  /*
    getCertificateEstudent:
    Metodo para conseguir un especifico certificado de un Estudiante.

    @parametros: address ->pstudent (clave publica del Estudiante)

    @return:    uint256 ->  Numero de certificado.
                string  ->  Nombre de la organizacion.
                string  ->  IPFS Hash.
                string  ->  Nombre del propietario
                string  ->  Apellido del propietario.
                string  ->  titulo del Certificado.
                address ->  Direccion de la organizacion.
                uint256 ->  Fecha en la que el Certificado fue Emitido.
    */  
  function getCertificateEstudent(address pstudent, uint256 pcertificate) public view returns (uint256, string, string, string, string, string, address, uint256)
  {
    require(_users[pstudent] == T_STUDENT);
    Certificate memory objCertificate = _students[pstudent].certificates[pcertificate];
    Student memory objStudent = _students[pstudent];
    return (objCertificate.id, objCertificate.organization, objCertificate.ipfs_hash, objStudent.name_student, objStudent.lastname_student, objCertificate.title, objCertificate.added_by, objCertificate.added_timestamp);
  }
  
  /*
    getCertificateThird
    Metodo para corroborar la autenticidad de un certificado por terceros
    @parametros:    string ->  pcertificate (clave publica del certificado)
    
    @return:        string  ->  nombre de la institucion que emitio el certificado
                    address ->  direccion publica de la institucion
                    string  ->  nombre del Estudiante al que pertenece el certificado
                    string  ->  apellido del Estudiante
                    string  ->  titulo del certificado
                    uint256 ->  fecha en la que se emitio el certificado
  */
  function getCertificateThird(address pstudent, string _ipfs_hash) public view returns (string, address, string, string, string, uint256)
  {
      for(uint i=0; i<=certificates_hashes.length; i++){
          Certificate memory objCertificate = certificates_hashes[i];
          if(keccak256(abi.encodePacked(objCertificate.ipfs_hash)) == keccak256(abi.encodePacked(_ipfs_hash)))
          {
              Student memory objStudent = _students[pstudent];
              return (objCertificate.organization, objCertificate.added_by, objStudent.name_student, objStudent.lastname_student, objCertificate.title, objCertificate.added_timestamp);
          }
      }
  }
}