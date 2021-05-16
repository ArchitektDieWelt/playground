const Box = artifacts.require("Box");

module.exports = async function (_deployer) {
  await _deployer.deploy(Box);
  // Use deployer to state migration tasks.
};
