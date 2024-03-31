import React, { useEffect } from "react";
import "./Section.css";
import { useState } from "react";
import JordanData from "../JordanShoesData";
import Card from "./Card";
import airmaxData from "../AirMaxShoesData";
import AllShoesData from "../AllShoesData";
import { colors } from "@mui/material";
import classNames from "classnames";
import Filter from "./Filter";
import FilterSection from "./FilterSection";
function Section(props) {
  // useEffect(() => {
  //   const sortBy_btn = document.getElementById("sortby-btn");
  //   const sortBy_list = document.getElementById("sort-by");
  //   sortBy_btn.addEventListener("click", (e) => {
  //     if (sortBy_btn.ariaExpanded === "false") {
  //       sortBy_list.classList.add("drop");
  //       sortBy_btn.ariaExpanded = true;
  //     } else if (sortBy_btn.ariaExpanded === "true") {
  //       sortBy_list.classList.remove("drop");
  //       sortBy_btn.ariaExpanded = false;
  //     }
  //   });

  //   const filter_btn = document.getElementById("filter-btn");
  //   const filter_col = document.getElementById("filter-col");

  //   filter_btn.addEventListener("click", (e) => {
  //     if (!filter_col.classList.contains("open")) {
  //       filter_col.classList.add("open");
  //     } else if (filter_col.classList.contains("open")) {
  //       filter_col.classList.remove("open");
  //     }
  //   });
  // },[ShoesData]);
  console.log();
  const [filterVisibility, setfilterVisibility] = useState(false);

  function openFilterSection(params) {
    setfilterVisibility((prevdata) => {
      return !prevdata;
    });
  }
const [sortByvisible,setsortByvisible]=useState(false)

function openSortBy(params) {
  setsortByvisible((prevdata) => {
    return !prevdata;
  });
}
const [bigFiltervisible,setbigFiltervisible]=useState(false)

function BigFilterF(params) {
  setbigFiltervisible((prevdata)=>{
return !prevdata
  })
}



  

  const cards = props.data.map((item) => {
    if (item.isexist) {
      return (
        <Card
          key={item.id}
          id={item.id}
          item={item}
          Handleclick={props.Handleclick}
          ImageHandleclick={props.HandleImage}
          HandleMiniBag={props.HandleMiniBag}
          HandleProduct={props.HandleProduct}
        />
      );
    }
    return null;
  });
  let HeadText;
  if (props.data === AllShoesData) {
    HeadText = "Nike";
  }
  if (props.data === JordanData) {
    HeadText = "Jordan";
  }

  // console.log("section render");
  return (
    <div className="">
      <div className=" relative flex  sm:p-4 flex-col mt-2">
        {/* Header and filter && sort btn */}
        <div className="flex p-3 justify-between w-full">
          {props.data && (
            <h1 className=" font-bold pl-2 p-5 text-nowrap  w-max text-lg  font-serif">
              {HeadText} Shoes & Sneakers({props.data.length})
            </h1>
          )}

          <div className="md:flex sm:text-lg hidden space-x-1 relative">
            <button
              className=" sm:flex    p-5 justify-between font-serif font-semibold text-nowrap w-max"
              id="filter-btn"
              onClick={openFilterSection}
            >
              Show Filter
              <span className="ml-2 ">
                <i className="bi bi-funnel-fill"></i>
              </span>
            </button>
            <button
              className="flex justify-between    p-5 font-serif font-semibold text-nowrap w-max"
              aria-expanded="false"
              aria-controls="sort-by"
              id="sortby-btn"
              onClick={openSortBy}
            >
              Sort By
              <span className="ml-2">
                <i className="bi bi-caret-down-fill sm:text-xl   "></i>
              </span>
            </button>

            <ul
              className={classNames( "bg-[#EFE9EB] flex flex-col space-y-2 sort-dropdown font-serif font-semibold text-center absolute right-[-20px] top-6 p-2 z-50 ",{"drop":sortByvisible})}
            
              id="sort-by"
            >
              <li>Featured</li>
              <li>Newest</li>
              <li
                className="cursor-pointer"
                onClick={() => props.HandlePriceHigh()}
              >
                Price:High-Low
              </li>
              <li
                className="cursor-pointer"
                onClick={() => props.HandlePriceLow()}
              >
                Price:Low-High
              </li>
            </ul>
          </div>
        </div>
        {/* filter section in small screens */}
        <div className="flex border-b border-t border-slate-850 p-3 pl-5 space-x-8 max-w-full overflow-x-scroll  flex-nowrap font-serif font-semibold text-nowrap md:hidden">
          <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
            Lifestyle
          </h1>
          <h1
            className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded"
            onClick={() => props.Handleset()}
          >
            {" "}
            Jordan
          </h1>
          <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
            Running
          </h1>
          <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
            {" "}
            Training & Gym
          </h1>
          <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
            Soccer
          </h1>
          <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
            Skateboarding
          </h1>
          <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
            Football
          </h1>
          <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
            Baseball
          </h1>
          <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
            Golf
          </h1>
          <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
            Nike By You
          </h1>
        </div>
        <div className="flex md:hidden w-full items-center justify-between pl-6 p-3 border-t mt-2 font-Roboto text-lg font-medium ">
          <h1>Results</h1>
          <button onClick={BigFilterF} className="border flex w-max space-x-2 p-2 rounded-lg">
            <span>Filter</span>
            <span><i className="bi bi-filter  text-black text-2xl font-semibold"></i></span>
          </button>
        </div>
        {/* product container */}
        <div className="flex relative mt-3 p-2 w-full" id="product-container">
          {/* filter section in big screens */}
          {/* <div
            className={classNames(
              " flex-col border-b border-slate-850 p-5 md:text-base pl-5 space-y-5   font-serif font-semibold  hidden md:flex sm:text-base",
              { open: filterVisibility }
            )}
            id="filter-col"
          >
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Lifestyle
            </h1>
            <h1
              className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded"
              onClick={() => props.Handleset()}
            >
              Jordan
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Running
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              {" "}
              Training & Gym
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Soccer
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Skateboarding
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Football
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Baseball
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Golf
            </h1>
            <h1 className=" cursor-pointer text-start font-serif hover:bg-slate-950 hover:text-white p-1 rounded">
              Nike By You
            </h1>
          </div> */}
<FilterSection
Handleset={props.Handleset}
filterVisibility={filterVisibility}


/>
          {/* product card */}

          <div
            className={classNames(
              "w-full mt-3 grid justify-center items-center    h-max     gap-5",
              { "grid-cols-1 md:grid-cols-1 lg:grid-cols-2": filterVisibility },
              { "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ": !filterVisibility }
            )}
            id="product-section"
          >
            {cards}
            {/* {ShoesData.map((shoe) => {
              return (
                <div className="flex-col border-2 h-max  shadow-lg  w-full">
                  <div className="h-1/2 max-h-1/2 min-h-1/2  w-full">
                    <img className="h-full w-full" src={shoe.image.mainimg} alt="" />
                  </div>
                  <div
                    className="product-dec  relative   text-sm flex h-max space-y-3 w-full flex-col items-start rounded bg-zinc-400 "
                    data-attribute="false"
                  >
                    <div className="product-dec-inner-1 w-full flex flex-col space-y-2  ">
                      <span className="w-full rounded bg-zinc-900">
                        <h1 className="card-brand animate-gradient  w-full rounded p-1">
                          <strong>{shoe.name}</strong>
                        </h1>
                      </span>
                      <h2 className="w-full p-1 font-serif text-zinc-800">
                        <strong>Brand:{shoe.brand}</strong>
                      </h2>
                      <p className="w-full p-2 text-gray-600">
                        {shoe.dec}
                      </p>
                    </div>
                    <div className="product-dec-inner-2 flex flex-col w-full max-h-max  gap-2   p-1">
                      <div>
                        <p className=" font-serif text-green-800 text-base font-semibold">
                          Best Seller
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img
                     
                          className=" justify-self-start rounded"
                          src={shoe.image.whiteimg}
                          alt=""
                          width="50"
                        />
                        <img
                          className=" justify-self-start rounded"
                          src={img}
                          alt=""
                          width="50"
                        />
                        <img
                          className=" justify-self-start rounded"
                          src={img}
                          alt=""
                          width="50"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <p className="w-full text-zinc-800 p-1 text-xl">
                        <strong>{shoe.price}$</strong>
                      </p>
                    </div>

                    <button className="w-full bg-slate-200 p-1 text-center font-serif text-slate-950 hover:bg-slate-950 hover:text-slate-200">
                      ADD To Cart
                    </button>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
      <Filter bigFiltervisible={bigFiltervisible} BigFilterF={BigFilterF}/>
    </div>
  );
}

export default Section;
