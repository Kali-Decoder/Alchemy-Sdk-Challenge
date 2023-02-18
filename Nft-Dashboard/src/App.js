import React, { useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import {Button, IconButton} from "@mui/material";
const App = () => {
  const [network,setNetwork]=useState(1);
  const settings = {
    apiKey: "iSoLFoQDND_y0a4IOLotRoJ-ZPy2r5it", // Replace with your Alchemy API key.
    network: Network.ETH_MAINNET, // Replace with your network.
  };
  const alchemy = new Alchemy(settings);
  
  return <>
    <IconButton>Hello World</IconButton>
  </>;
};

export default App;
