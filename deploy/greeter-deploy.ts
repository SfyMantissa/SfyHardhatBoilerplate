import "@nomiclabs/hardhat-ethers";
import deploy from './utils';

deploy("Greeter", "Hi Everyone!").catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
