import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function MiniBag(props) {
const{lastItemAdded}=useContext(AuthContext)
  return (
    <>
      {props.MiniBagState === true && (
        <div
          className="sm:w-[360px] space-x-2 p-3 w-full h-max fixed sm:top-[.5rem] sm:right-[1%] top-0 right-0 bg-slate-100 z-[999] "
          style={{ transition: "fade-in", transitionDelay: "5ms" }}
        >
          <div className="flex w-full flex-col space-y-4 ">
            <div className="flex justify-start items-center">
              <p className=" text-lg font-serif">Added to Bag </p>
              <i class="bi bi-check-circle-fill text-base pt-[.05rem]  text-green-900"></i>
            </div>
            <div className="flex w-full p-3 min-w-full space-x-4 flex-row ">
              <img
                src={lastItemAdded[0].image}
                alt="product"
                width={100}
                height={100}
                
              />
             
                <div className="flex flex-1 flex-col space-y-14">
                  <p className="font-serif text-lg font-semibold">{lastItemAdded[0].dec}</p>
                  <div className="flex w-full justify-evenly">
                    <Link to={lastItemAdded?"/Bag":null}>
                                        <button className="bg-transparent border border-slate-950  text-black p-2 rounded-full">
                      View Bag
                    </button>
                    </Link>

                    <button className="bg-black border border-slate-950  text-white p-2 rounded-full">
                      Checkout
                    </button>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MiniBag;
