import "@nomiclabs/hardhat-ethers";
import { task } from "hardhat/config";
import config from '../config';

task("greeting",
  "Get the current greeting.")
  .setAction(async (_, { ethers }) => {

    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = Greeter.attach(config.GREETER_ADDRESS);
    const greeting = await greeter.greeting();

    console.log("Current greeting is '" + greeting + "'.");
  });

