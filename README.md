# truffle

1. Install node version manager, taking care of "important notes" appart:

https://github.com/nvm-sh/nvm#important-notes

"If you're running a system without prepackaged binary available, which means you're going to install nodejs or io.js from its source code, you need to make sure your system has a C++ compiler. For OS X, Xcode will work, for Debian/Ubuntu based GNU/Linux, the build-essential and libssl-dev packages work."

2. Install node and  node package manager with nvm 

nvm intall node 12

3. install truffle:

npm install -g truffle

4. install Visual Studio code and extentions: solidity and "solidity visual developer"

5. unbox react/solidity boilerplate::

truffle unbox react

6. the unboxed project dir structure:

_ client
|_ public   (index.html and web accessed files)
|_ src      (App.js, getWeb3.js, etc javascript react src files)
  |_ contracts    (migrated solidity contract files to .json ABI, Network "web3/blockchain", metadata i.e truffle development => migrate)
| package.json    (config react scripts, dependencies, browserlist "browsers allowed"  i.e react script called for run react web server => npm start)
|_ contracts    (solidity fileas with src contracts)
|_ migrations
  |2_deploy_contracts.js    (name of the solidity contracty  file to be mighrated to the selected truffle blockchain)
| truffle-config.js     (configure default port 8545 from truffle development console blockchain environment and add the compilers vbersion)


****** add compiler version at the end in truffle-config.js:

...
},
  compilers: {
    solc: {
      version: "0.8.1 "
    }
  }
...

7. init truffle project and enter truffle development console:

truffle init

truffle develop

8. migrate solidity files contracts to truffle dev blockchain:

//inside trufdfle dev console
truffle(develop)> migrate

9. start react web server in another terminal:

trufflePojectDir/client> npm start

10. access default react web server port 3000:

http://localhost:3000/

**** PRERREQUISITE: 
Install Metamask and configuire localhost network at port 8545 (provided by default by truffle development environment)

# INSTALL CHAI FOR TESTING

npm install --save chai chai-bn chai-as-promised

# INSTALL OPENZEPPELIN 

npm install --save @openzeppelin/contracts@v3.0.0

in visual studio code generates an error, solved:
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
Right click on the error.
Select "Change the default workspace..." 

### CLONE SPECIFIC DIRECTORY FROM OPENZEPPELIN BRANCH release-v2.5.0 OF CROWDSALE (NOT SUPPORTED IN LATEST VERESIONS)

git init

git remote add OpenZeppelin https://github.com/OpenZeppelin/openzeppelin-contracts.git

git fetch OpenZeppelin

git checkout OpenZeppelin/release-v2.5.0 -- contracts/crowdsale

