import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from 'ethers';
import { Greeter } from '../typechain/Greeter';
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import deploy from '../deploy/utils'

describe("Greeter", () => {

  let greeter: Contract;
  let deployer: SignerWithAddress;

  before(async () => {
    [deployer] = await ethers.getSigners();
    greeter = await deploy("Greeter", "Hello World!");
  });

  it("Should be able to get the greeting string", async () => {
    expect(await greeter.greeting()).to.equal("Hello World!");
  });

  it("Should be able to set the new greeting string", async () => {
    const newGreeting = "¡Hola mundo!";
    expect(await greeter.setGreeting(newGreeting)).to.emit("Greeter", "GreetingSet").withArgs(deployer.address, newGreeting);
  });

});
