import React, { useContext, useState } from "react";
import Massage from "./Massage";
import BagProduct from "./BagProduct";
import { AuthContext } from "../../context/AuthContext";

function Bag(props) {
   const {removeitem,Cart}=useContext(AuthContext)
    
  return (
    <div className="md:container mx-auto">

      <div className="p-2">
        
      </div>
      <div>
        
       {Cart?
        <BagProduct />:<p>Your Bag Is Empty</p>}
      </div>
    </div>
  );
}

export default Bag;
