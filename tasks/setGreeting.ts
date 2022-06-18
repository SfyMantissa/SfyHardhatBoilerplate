import "@nomiclabs/hardhat-ethers";
import { task } from "hardhat/config";
import config from '../config';

task("setGreeting",
  "Set the greeting.")
  .addParam("greeting", "The new greeting.")
  .setAction(async (args, { ethers }) => {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = Greeter.attach(config.GREETER_ADDRESS);
    const receipt = await (await greeter.setGreeting(args.greeting)).wait();

    const caller = receipt.events?.[0].args?.[0];
    const greeting = receipt.events?.[0].args?.[1];

    console.log(caller + " set the greeting to '" + greeting + "'.");
  });

