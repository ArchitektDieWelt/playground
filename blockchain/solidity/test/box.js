const { accounts, contract } = require("@openzeppelin/test-environment");
const { expect } = require("chai");
const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");

const Box = contract.fromArtifact("Box");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
describe("Box", function () {
  const value = new BN("42");
  const [owner, other] = accounts;

  beforeEach(async function () {
    this.box = await Box.new({ from: owner });
  });

  it("retrieve returns a value previously stored", async function () {
    await this.box.store(value, { from: owner });

    expect(await this.box.retrieve()).to.be.bignumber.equal(value);
  });

  it("store emits an event", async function () {
    const receipt = await this.box.store(value, { from: owner });

    expectEvent(receipt, "ValueChanged", { newValue: value });
  });

  it("non owner cannot store a value", async function () {
    await expectRevert(
      this.box.store(value, { from: other }),
      "Ownable: caller is not the owner",
    );
  });
});
