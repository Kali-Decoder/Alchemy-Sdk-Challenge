import React, { createContext, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
export const DataContext = createContext();
const NFTContext = ({ children }) => {
  const [network, setNetwork] = useState(1);

  const [net, setNet] = useState(Network.ETH_MAINNET);
 const setNetworkType=(id)=>{
    if (id === 2) {
        setNet(Network.ETH_GOERLI);
      } else if (id === 3) {
        setNet(Network.MATIC_MUMBAI);
      } else if (id === 4) {
        setNet(Network.MATIC_MAINNET);
      } else if (id === 5) {
        setNet(Network.ARB_GOERLI);
      } else if (id === 6) {
        setNet(Network.ASTAR_MAINNET);
      } else {
        setNet(Network.ETH_MAINNET);
      }
      const settings = {
        apiKey: "iSoLFoQDND_y0a4IOLotRoJ-ZPy2r5it", // Replace with your Alchemy API key.
        network: net, // Replace with your network.
      };
      const alchemy = new Alchemy(settings);
    
      console.log("id:",id,alchemy);
 }
  return (
    <DataContext.Provider value={{ network, setNetwork,setNetworkType }}>
      {children}
    </DataContext.Provider>
  );
};

export default NFTContext;
