var DigiCert = artifacts.require("./DigiCert.sol");

module.exports = function(deployer) {
  deployer.deploy(DigiCert);
};
