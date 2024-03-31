import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

function Filter(props) {
  const autoscroll = useRef();

  const [FilterForm, setFilterForm] = useState({
    SortBy: "",
  });

  function HandleFilterForm(event) {
    setFilterForm((prevdata) => {
      return { ...prevdata, [event.target.name]: event.target.value };
    });
  }
 

  useEffect(() => {
    if (props.bigFiltervisible) {
       setTimeout((e) => {
      autoscroll.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, "500");
    }

  }, [props]);

  return (
    <>
      <div
        ref={autoscroll}
        style={{ transition: "all 250ms ease-in" }}
        className={classNames(
          "w-full p-6 font-medium font-Roboto min-h-[100vh] absolute top-0 left-0 z-[9999] bg-slate-200 ",
          {
            "block opacity-100 pointer-events-auto translate-y-0 ":
              props.bigFiltervisible,
          },
          {
            " pointer-events-none opacity-0 translate-y-[50vh]":
              !props.bigFiltervisible,
          }
        )}
      >
        <div className="flex  justify-between items-start">
          <h1>Filter</h1>
          <button
          onClick={props.BigFilterF}>close</button>
        </div>
        <div className="grid mt-3 grid-rows-8 max-h-max gap-3">
          {/* sort by */}
          <div className="flex flex-col p-2 space-y-3  w-full">
            <h1 className="mb-3">sort by</h1>
            <div className="flex w-1/2  space-x-2">
              <input
                value="Featured"
                name="SortBy"
                className="w-8 outline-slate-950"
                type="radio"
                id="Featured"
                onChange={HandleFilterForm}
                checked={FilterForm.SortBy === "Featured"}
              />
              <label htmlFor="Featured">Featured</label>
            </div>
            <div className="flex w-1/2  space-x-2">
              <input
                name="SortBy"
                value="Newest"
                className="w-8 outline-slate-950"
                type="radio"
                id="Newest"
                onChange={HandleFilterForm}
                checked={FilterForm.SortBy === "Newest"}
              />
              <label htmlFor="Newest">Newest</label>
            </div>
            <div className="flex w-1/2  space-x-2">
              <input
                value="PriceHighLow"
                name="SortBy"
                className="w-8 outline-slate-950"
                type="radio"
                id="PriceHigh-Low"
                onChange={HandleFilterForm}
                checked={FilterForm.SortBy === "PriceHighLow"}
              />
              <label htmlFor="PriceHigh-Low">Price: High-Low</label>
            </div>
            <div className="flex w-1/2  space-x-2">
              <input
                value="PriceLowHigh"
                name="SortBy"
                className="w-8 outline-slate-950"
                type="radio"
                id="PriceLow-High"
                onChange={HandleFilterForm}
                checked={FilterForm.SortBy === "PriceLowHigh"}
              />
              <label htmlFor="PriceLow-High">Price: Low-High</label>
            </div>
          </div>

          {/* sale & offer */}
          <div className="flex flex-col p-2 space-y-3  w-full">
            <h1 className="mb-3">Sale & Offers</h1>
            <div className="flex w-1/2  space-x-2">
              <input
                className="w-8 outline-slate-950"
                type="radio"
                id="womensweek"
              />
              <label htmlFor="womensweek">
                Women's Week Sale:Extra 25% Off
              </label>
            </div>
            <div className="flex w-1/2  space-x-2">
              <input
                className="w-8 outline-slate-950"
                type="radio"
                id="PriceBag"
              />
              <label htmlFor="PriceBag">See Price in Bag</label>
            </div>
            <div className="flex w-1/2  space-x-2">
              <input className="w-8 outline-slate-950" type="radio" id="Sale" />
              <label htmlFor="Sale">Sale</label>
            </div>
          </div>
          {/* gender */}
          <div className="flex flex-col p-2 space-y-3  w-full">
            <h1 className="mb-3">Gender</h1>
            <div className="flex w-1/2  space-x-2">
              <input className="w-8 outline-slate-950" type="radio" id="Men" />
              <label htmlFor="Men">Men</label>
            </div>
            <div className="flex w-1/2  space-x-2">
              <input
                className="w-8 outline-slate-950"
                type="radio"
                id="Women"
              />
              <label htmlFor="Women">Women</label>
            </div>
            <div className="flex w-1/2  space-x-2">
              <input
                className="w-8 outline-slate-950"
                type="radio"
                id="Unisex"
              />
              <label htmlFor="Unisex">Unisex</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
