
## CONFIGURE PROJECT SOURCE CODE

1. start from "truffle unbox react", boilerplate code and replace files found in here

2. add the solc compiler version in "truffle-config.js"

// ...
},

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0", 
}

// ...


## INSTALL CHAI FOR TESTING

npm install --save chai chai-bn chai-as-promised

## INSTALL OPENZEPPELIN AND .ENV FILES VARIABLES

npm install --save @openzeppelin/contracts

npm install --save dotenv


***in visual studio code generates an error, solved:
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
Right click on the error.
Select "Change the default workspace..."  and use lo0cal files

  
  
  ------------------------------------  INFORMATIVE ONLY -----------------------------------[[
  *****   prerrequisite for start building the ezxistent contract crowdsales.sol DO NOT DO IT, THE CONTRACT ALREADY WAS REFACTORED
### CLONE SPECIFIC DIRECTORY FROM OPENZEPPELIN BRANCH release-v2.5.0 OF CROWDSALE (NOT SUPPORTED IN LATEST VERESIONS)

git init

git remote add OpenZeppelin https://github.com/OpenZeppelin/openzeppelin-contracts.git

git fetch OpenZeppelin

git checkout OpenZeppelin/release-v2.5.0 -- contracts/crowdsale
------------------------------------  INFORMATIVE ONLY -----------------------------------]]
