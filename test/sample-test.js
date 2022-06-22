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

    // deploy new contract version
    const MyToken2 = await ethers.getContractFactory("MyToken2");
    const MyToken2Contract = await upgrades.upgradeProxy(
      MyTokenContarct,
      MyToken2
    );
    await MyToken2Contract.deployed();

    expect(await MyToken2Contract.getVersion()).to.equal("MyTokenV2");
  });
});
