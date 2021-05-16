// scripts/index.js
module.exports = async function main(callback) {
  try {
    // Our code will go here

    const Box = artifacts.require("Box");
    const box = await Box.deployed();

    box.store(23);

    value = await box.retrieve();
    console.log("Box value is: " + value.toString());

    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};
