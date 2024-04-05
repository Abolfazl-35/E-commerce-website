import React, { useEffect, useMemo, useState } from "react";
import dummyimage from "../../images/shoes/jordan/jordan-1.jpg";
import TooltipFavorite from "../Tooltips/TooltipFavorite";
import BagProductcss from "./Bagproduct.css";
import classNames from "classnames";
import Massage from "./Massage";
import BagCard from "./BagCard";
import TooltipDropdown from "../Tooltips/TooltipDropdown";
function BagProduct(props) {
  const [Cartitems, setCartitems] = useState(props.CartItems);
  function addcount(event, id, selectedSize) {
    setCartitems((prevdata) => {
      return prevdata.map((i) => {
        if (i.id === id) {
          return { ...i, [event.target.name]: event.target.value };
        } else {
          return i;
        }
      });
    });

  }
  useEffect(()=>{
    setCartitems(props.CartItems)
  },[props.CartItems])

  const [Subtotal, setSubtotal] = useState(null);
  
  console.log(props)
  console.log(Cartitems);
  const [promocodeVisible, setpromocodeVisible] = useState(false);

  function promocodeopen(params) {
    setpromocodeVisible((prevdata) => {
      return !prevdata;
    });
  }
  const itemCards = Cartitems.map((i,index) => {
    return <BagCard key={index} item={i} addcount={addcount} removeItem={props.removeItem} />;
  });
  useEffect(() => {
    const subtotalArray = Cartitems.map((i) => {
      return i.price * i.count;
    });
    const Subtotal = subtotalArray.reduce((a, b) => {
      return a + b;
    }, 0);
    setSubtotal(Subtotal);
  }, [Cartitems]);

  return (
    <>
      <div className="flex justify-center items-center font-Roboto flex-col space-y-2 p-10 pt-5">
        <h1 className=" font-semibold text-2xl">Bag</h1>
        <p className=" text-greyish-0 text-base">
        {Cartitems.length} items <span className="border-l border-gray-500 pl-1">$ {Subtotal}</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row  font-Roboto w-full p-4 border-t mt-3">
        {/* Bag products images and details */}

        <div className="flex flex-col md:pr-4 space-y-2 w-full md:w-2/3">
          <Massage />
          {itemCards}
        </div>
        {/* bag summery */}
        <div className="w-full mt-3 pl-2 pt-3 md:mt-0 md:pt-2 md:pl-5 md:w-1/3 flex p-2">
          <div className="flex flex-col space-y-7 w-full justify-start items-center relative">
            <h1 className="text-center font-bold text-3xl">Summary</h1>
            {/* form for promo code */}
            <p className="flex justify-center items-center">
              Do you have a Promo Code?
              <button  onClick={promocodeopen}><TooltipDropdown/></button>
            </p>
            <form
              className={classNames("promocode-form ", {
                open: promocodeVisible,
              })}
            >
              <div className="promocode--input--field">
                <input
                  type="text"
                  name="PromoCode"
                  id="PromoCode"
                  value=""
                  className="h-10 border border-gray-600 rounded-xl p-3"
                />
                <button className="p-2 ml-1 pl-3 pr-3 border rounded-3xl border-gray-600">
                  Apply
                </button>
              </div>
            </form>
            {/* price and shipping details */}
            <div className="flex w-full p-2 justify-between font-semibold text-lg ">
              <p>Subtotal</p>
              <p>${Subtotal}</p>
            </div>
            <div className="flex w-full p-2 justify-between font-semibold text-lg ">
              <p>Estimated Shipping &Handling</p>
              <p>$7.00</p>
            </div>
            <div className="flex w-full p-2 justify-between font-semibold text-lg ">
              <p>Estimated Task</p>
              <p>_</p>
            </div>
            <div className="flex w-full justify-between font-semibold text-lg  border-t border-b p-2 border-gray-600">
              <p>Total</p>
              <p>_</p>
            </div>
            <div className="w-full pt-4 hidden md:block ">
              <button className="p-4 w-full text-center rounded-3xl bg-slate-950 text-white">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 p-3 bg-main-0 w-full md:hidden ">
        <button className="w-full text-center p-4 border border-gray-600 bg-black text-white rounded-3xl text-xl font-bold font-Roboto">
          Checkout
        </button>
      </div>
    </>
  );
}

export default BagProduct;
