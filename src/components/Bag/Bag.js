import React, { useState } from "react";
import Massage from "./Massage";
import BagProduct from "./BagProduct";

function Bag(props) {
   
    
  return (
    <div className="md:container mx-auto">

      <div className="p-2">
        
      </div>
      <div>
        
       {props.CartItems?
        <BagProduct CartItems={props.CartItems} removeItem={props.removeItem} />:<p>Your Bag Is Empty</p>}
      </div>
    </div>
  );
}

export default Bag;
