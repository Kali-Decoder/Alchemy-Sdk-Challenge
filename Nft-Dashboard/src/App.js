import React, { useContext, useState } from "react";

import Navbar from "./Components/Navbar";
import { DataContext } from "./utils/NFTContext";
const App = () => {



  return (
    <>
      <div className="container p-2">
        <Navbar />
      </div>
    </>
  );
};

export default App;
