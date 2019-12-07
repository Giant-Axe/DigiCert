import DigiCertContract from "./build/contracts/DigiCert.json";
import contract from "truffle-contract";

export default async(provider) => {
    const digicert = contract(DigiCertContract);
    digicert.setProvider(provider);

    let instance = await digicert.deployed();
    return instance;
};