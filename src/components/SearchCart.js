import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TooltipFavorite from "./Tooltips/TooltipFavorite";
import TooltipCart from "./Tooltips/TooltipCart";
import TooltipSearch from "./Tooltips/TooltipSearch";
import classNames from "classnames";
import "../components/Navbar.css";
import MiniCard from "./MiniCard";
import Logo from "../images/logo/trust-logo-4.png";
import { AuthContext } from "../context/AuthContext";
import TooltipDashBoard from "./Tooltips/TooltipDashBoard";

function SearchCart(props) {
  const {
    User,
    openDashboardf,
    Searchresult,
    searchState,
    openSearch,
    HandleSearch,
    CloseSearch,
    filterItem,
    cartLength,
  } = useContext(AuthContext);
  const minicards = filterItem.map((item) => {
    if (item) {
      return <MiniCard data={item} key={item.id} />;
    } else {
      return null;
    }
  });

  return (
    <div className="">
      <div className="h-max w-full justify-end  ">
        <div
          className="h-max relative flex  font-Roboto   w-full flex-col rounded bg-transparent shadow-md"
          id="form-section"
        >
          <div
            style={{ transition: "opacity 250ms ease-in" }}
            className={classNames(
              {
                "bg-overly-0 fixed top-0 w-[100vw] z-40 h-[100vh] pointer-events-none  opacity-0":
                  !Searchresult.Search,
              },
              {
                " bg-overly-0 fixed top-0 w-[100vw] z-40 pointer-events-all h-[100vh]":
                  Searchresult.Search,
              }
            )}
          ></div>
          <div className="bottom  flex h-max w-full items-center justify-between ">
            <form
              style={{ transition: "all ease-in 250ms" }}
              action="submit"
              className={classNames(
                {
                  "ml-2 flex w-max items-start justify-start rounded bg-transparent":
                    !searchState,
                },
                {
                  " fixed flex border shadow-lg  border-slate-950 flex-col top-0 justify-start items-center min-w-[100vw] bg-main-0 h-[75vh] min-h-[75vh] overflow-y-scroll  p-2 z-[999] ":
                    searchState,
                }
              )}
              id="form"
            >
              <div className="flex w-full  justify-between   space-x-2 items-center">
                <div
                  className={classNames(
                    { hidden: !searchState },
                    { "block   w-max": searchState }
                  )}
                >
                  <img alt="logo" src={Logo} width={100} height={100} />
                </div>
                <div
                  className={classNames("flex w-1/3 items-center ", {
                    "flex items-center relative   w-2/3": searchState,
                  })}
                >
                  <label
                    htmlFor="searchinput"
                    className="absolute justify-center items-center   left-7"
                  >
                    {searchState && (
                      <i
                        className="bi bi-search hover:text-greyish-0  cursor-pointer p-1 text-xl font-semibold text-slate-950"
                        id="search-icon"
                        onClick={openSearch}
                      ></i>
                    )}
                    {!searchState && <TooltipSearch />}
                  </label>
                  <input
                    name="Search"
                    onChange={HandleSearch}
                    value={Searchresult.Search}
                    type="search"
                    autoComplete="off"
                    className={classNames(
                      " border pl-10    p-2 outline-none sm:border-slate-600 rounded-2xl bg-transparent ",
                      { "w-[20px] border-none border-slate-600": !searchState },
                      { " w-full pl-16   ": searchState }
                    )}
                    placeholder="Search"
                  />
                </div>

                <button
                  type="button"
                  onClick={CloseSearch}
                  className={classNames(
                    { "hidden p-2": !searchState },
                    {
                      "block p-2   rounded-full border border-green-100 text-lg hover:bg-slate-950 hover:text-white":
                        Searchresult.Search || searchState,
                    }
                  )}
                >
                  Cancel
                </button>
              </div>
              <div
                className={classNames(
                  "p-2 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full  gap-2",
                  { "": !searchState }
                )}
              >
                {minicards}
              </div>
            </form>
            <div className="mr-2  w-max p-1 flex items-center space-x-2">
              <div className=" items-center hidden sm:flex  justify-start">
                <Link
                  to="/SignUp"
                  className="hedear-text cursor-pointer rounded p-1 text-xl text-slate-950 hover:text-slate-600 sm:text-2xl"
                  id="login-btn"
                >
                  Join us
                </Link>
                {!User && (
                  <Link
                    className="hedear-text border-separate cursor-pointer border-l border-slate-700 p-1 text-xl text-slate-950 hover:text-slate-600 sm:text-2xl"
                    id="login-btn"
                    to="/SignIn"
                  >
                    sign in
                  </Link>
                )}
              </div>
              {User && (
                <button
                  className="hedear-text border-separate cursor-pointer border-l border-slate-700  text-xl text-slate-950 hover:text-slate-600 sm:text-2xl"
                  onClick={() => openDashboardf()}
                >
                  <TooltipDashBoard />
                </button>
              )}
              <div className="bg-transparent  flex justify-center items-center h-max relative  rounded ">
                <Link to="/Favorite">
                  <TooltipFavorite />
                </Link>
              </div>
              <Link to={"/Bag"}>
                <div className=" relative pb-1 flex justify-center items-center mr-2 rounded ">
                  <TooltipCart />
                  {cartLength > 0 && (
                    <span className="absolute bg-gray-600 rounded-full right-[-3px] top-[-3px] font-Roboto font-semibold text-sm  pl-1 pr-1  text-red-900">
                      {cartLength}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex justify-end sm:flex-row font-Oswald w-full  items-center">
            {!User && (
              <>
                <p className="  w-max text-end  border-t border-gray-500  font-semibold p-2">
                  already have an a acount?
                </p>
                <p className="pb-1 font-semibold">
                  <Link
                    className=" underline mr-8   underline-offset-2 "
                    to={"/login"}
                  >
                    Log In
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCart;
