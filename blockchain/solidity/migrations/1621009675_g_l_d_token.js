const GLDToken = artifacts.require("GLDToken");
const web3 = require("web3");

module.exports = async function (_deployer) {
  // Use deployer to state migration tasks.
  await _deployer.deploy(GLDToken, web3.utils.toWei("5000000", "ether"));
};
