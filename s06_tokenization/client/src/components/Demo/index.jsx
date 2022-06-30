import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import Cta from "./Cta";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import Desc from "./Desc";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

function Demo() {
  const { state } = useEth();
  const [value, setValue] = useState("?");

  const demo =
    <>
      <Cta />
      <div className="contract-container">
       
        <ContractBtns setValue={setValue} />
      </div>
      <p/>
      <Desc />
    </>;

  return (
    <div className="appdemo">
      <Title />
      {
        //!state.artifact ? <NoticeNoArtifact /> :
          //!state.contract ? <NoticeWrongNetwork /> :
            demo
      }
    </div>
  );
}

export default Demo;
