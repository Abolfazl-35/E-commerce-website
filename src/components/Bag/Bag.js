import React, { useState } from "react";
import Massage from "./Massage";
import BagProduct from "./BagProduct";

function Bag(props) {
   
    console.log("bag",props)
  return (
    <div className="md:container mx-auto">
      <div className="flex justify-center items-center font-Roboto flex-col space-y-2 p-10">
        <h1 className=" font-semibold text-2xl">Bag</h1>
        <p className=" text-greyish-0 text-base">
          2 Items <span className="border-l border-gray-500 pl-1">$237.00</span>
        </p>
      </div>
      <div className="p-2">
        
      </div>
      <div>
        
        <BagProduct CartItems={props.CartItems} />
      </div>
    </div>
  );
}

export default Bag;
