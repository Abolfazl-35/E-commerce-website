import React from "react";
import { useState } from "react";
import AllShoesData from "../AllShoesData";
function MiniBag(props) {

  return (
    <>
    {props.MiniBagState===true &&
    <div className="sm:w-[360px] p-3 w-full h-max absolute sm:top-[100%] sm:right-[1%] top-0 right-0 bg-slate-100 z-[999] "
    style={{transition:"fade-in", transitionDelay:"5ms"}}>
        <div className="flex flex-col space-y-4 ">
            <div className="flex space-x-3 justify-start items-center">
        <p className=" text-lg font-serif">Added to Bag </p>
       <i class="bi bi-check-circle-fill text-base pt-[.05rem]  text-green-900"></i>
            </div>
            <div className="flex flex-row space-x-3">
          <img
            src={props.item.images.mainimg}
            alt="product"
            width={100}
            height={100}
          />
          <div>
            <div className=" flex flex-col space-y-14">
          <p className=" font-serif text-lg font-semibold">{AllShoesData[0].dec}</p>
        <div className="flex w-full justify-between">
            <button className="bg-transparent border border-slate-950  text-black p-2 rounded-full">
View Bag
            </button>
            <button className="bg-black border border-slate-950  text-white p-2 rounded-full">
Checkout
            </button>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>}
      
    </>
  );
}

export default MiniBag;
