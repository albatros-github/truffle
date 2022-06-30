import React, { useReducer, useCallback, useEffect, useState } from "react";
import Web3 from "web3";
import EthContext from "./EthContext";
import { reducer, actions, initialState } from "./state";

function EthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [userTokens, setInputs] = useState(0);

  
  const init = useCallback(
    async artifact => {
      if (artifact) {
        const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
        const accounts = await web3.eth.requestAccounts();
        const networkID = await web3.eth.net.getId();
        //this.networkId = await this.web3.eth.getChainId(); // for metamask
        //console.log(artifact[0]);
        const abiMyToken = artifact[0].abi;
        const abiMyTokenSale = artifact[1].abi;
        const abiKycContract = artifact[2].abi;
        let contract = [];
        let kycAddress = "0x567";
        //addressMyToken, addressMyTokenSale, addressKycContract, contractMyToken, contractMyTokenSale, contractKycContract ;
        let userTokens;
        setInputs(0);

        try {
          contract[0] = new web3.eth.Contract(abiMyToken, artifact[0].networks[networkID].address);
          contract[1] = new web3.eth.Contract(abiMyTokenSale, artifact[1].networks[networkID].address);
          contract[2] = new web3.eth.Contract(abiKycContract, artifact[2].networks[networkID].address);
          kycAddress = artifact[1].networks[networkID].address;


          //const updateUserTokens = async(contract, accounts) => {
          //  let _userTokens = await contract[0].methods.balanceOf(accounts[0]).call();
          //  setInputs(_userTokens);
          //}
        
          //const listenToTokenTransfer = async(contract, accounts) => {
          //  contract[0].events.Transfer({to: accounts[0]}).on("data", updateUserTokens(contract, accounts));
          //}


          //listenToTokenTransfer(contract, accounts);
          //updateUserTokens(contract, accounts);
          
        } catch (err) {
          console.error(err);
        }
        dispatch({
          type: actions.init,
          data: { artifact, web3, accounts, networkID, contract, kycAddress, userTokens }
        });
      }
    }, []); //updateUserTokens, listenToTokenTransfer

  
    //const updateUserTokens = useCallback(
    //  async(contract, accounts) => {
    //    let _userTokens = await contract[0].methods.balanceOf(accounts[0]).call();
    //    setInputs(_userTokens);
    //  }, []);
    //
    //const listenToTokenTransfer = useCallback(
    //  async(contract, accounts) => {
    //    contract[0].events.Transfer({to: accounts[0]}).on("data", updateUserTokens(contract, accounts));
    //  }, []);
  

  useEffect(() => {
    const tryInit = async () => {
      try {
        let artifact = [];
        artifact.push(require("../../contracts/MyToken.json"));
        artifact.push(require("../../contracts/MyTokenSale.json"));
        artifact.push(require("../../contracts/KycContract.json"));
        init(artifact);
      } catch (err) {
        console.error(err);
      }
    };

    tryInit();
  }, [init]);

  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    const handleChange = () => {
      init(state.artifact);
    };

    events.forEach(e => window.ethereum.on(e, handleChange));
    return () => {
      events.forEach(e => window.ethereum.removeListener(e, handleChange));
    };
  }, [init, state.artifact]);

  return (
    <EthContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </EthContext.Provider>
  );
}

export default EthProvider;
