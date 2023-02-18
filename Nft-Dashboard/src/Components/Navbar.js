import {
  Button,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext } from "../utils/NFTContext";

const Navbar = () => {
  const { network, setNetwork,setNetworkType } = useContext(DataContext);
  const handleChange = (e) => {
    setNetwork(e.target.value);
    setNetworkType(e.target.value);
  };

  return (
    <>
      <div className="d-flex justify-content-between py-4">
        <h1 className="text-white text-2xl">Hello World NFT's</h1>
        <div className="d-flex">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={network}
              label="Age"
              onChange={handleChange}
              fullWidth
              color="primary"
              defaultValue={1}
            >
              <MenuItem value={1}>ETH_MAINNET</MenuItem>
              <MenuItem value={2}>ETH_GOERLI</MenuItem>
              <MenuItem value={3}>MATIC_MUMBAI</MenuItem>
              <MenuItem value={4}>MATIC_MAINNET</MenuItem>
              <MenuItem value={5}>ARB_GOERLI</MenuItem>
              <MenuItem value={6}>ASTAR_MAINNET</MenuItem>
            </Select>
          </FormControl>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            className="mx-3"
            style={{ width: "100%" }}
            
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
