import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue }) {
  const { state: { contract, accounts, kycAddress, userTokens } } = useEth();
  const [inputsSet, setInputs] = useState({
    kyc: "0x321",
    userTokens: 0
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log("value: "+value);
    //kycAddress = contract[1].address;
    setInputs({
      ...inputsSet, kyc: value
    });
    console.log(inputsSet);
  }


  const handleKycSubmit = async () => {
    //const {kycAddress} = state;
    console.log("inputKycAddress: "+inputsSet.kyc);
    
    await contract[2].methods.setKycCompleted(inputsSet.kyc).send({from: accounts[0]});
    alert("Account "+inputsSet.kyc+" is now whitelisted");
  }

  const handleBuyToken = async () => {
    await contract[1].methods.buyTokens(accounts[0]).send({from: accounts[0], value: 1});

    let _userTokens = await contract[0].methods.balanceOf(accounts[0]).call();
    //this.setState({userTokens: userTokens});
    setInputs({
      ...inputsSet, userTokens: _userTokens
    });
  }


  return (
    <div className="btns">
      <h1>Capuccino Token for StarDucks</h1>  

      <h2>Enable your account</h2>
      
      Address to allow: <input type="text" name="kycAddress" value={inputsSet.kyc} onChange={handleInputChange} />
      
      <button type="button" onClick={handleKycSubmit}>Add Address to Whitelist</button>
      
      <h2>Buy tokens</h2>
      <p>To buy tokens sent eth to this address: {kycAddress}</p>
      <p>You have: {inputsSet.userTokens}</p>
        <button type="button" onClick={handleBuyToken}>Buy more tokens</button>
    </div>
  );
}

export default ContractBtns;
