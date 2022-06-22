const { expect } = require("chai");
const { upgrades, ethers } = require("hardhat");

describe("MyToken", function () {
  it("", async function () {
    const MyToken = await ethers.getContractFactory("MyToken");
    const MyTokenContarct = await upgrades.deployProxy(MyToken, {
      kind: "uups",
    });
    await MyTokenContarct.deployed();

    expect(await MyTokenContarct.name()).to.equal("MyToken");
  });
});
