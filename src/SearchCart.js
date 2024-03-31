import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tooltip from "./components/Tooltips/TooltipFavorite";
import TooltipCart from "./components/Tooltips/TooltipCart";
import classNames from "classnames";
import "./components/Navbar.css";
import MiniCard from "./MiniCard";
import Logo from "./images/logo/trust-logo-4.png";
function SearchCart(props) {
  // const [searchState, setsearchState] = useState(false);
  // useEffect(() => {
  //   setsearchState(() => {
  //     if (props.searchresult.Search) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // }, [props]);
  // function openSearch(params) {
  //   setsearchState((prevdata) => {
  //     return true;
  //   });
  // }
console.log(props)
  // function SearchWidthF(params) {
  //   setSearchWidth((prevdata) => {
  //     return !prevdata;
  //   });
  // }
  const minicards = props.data.map((searchdata) => {
    if (props.data) {
      return <MiniCard data={searchdata} key={searchdata.id} />;
    } else {
      return null;
    }
  });

  // useEffect(()=>{
  //    if (props.searchresult.Search) {
  //   document.body.classList.add("container")
  //   console.log("object",props)
  //  }else{
  //   document.body.classList.remove("container")
  //  }
  // },[props])

  return (
    <div className="h-max">
      <div
        className="h-max  font-Roboto  w-full flex-col rounded bg-transparent shadow-md"
        id="form-section"
      >
        <div
          style={{ transition: "opacity 250ms ease-in" }}
          className={classNames(
            {
              "bg-overly-0 fixed top-0 w-[100vw] z-40 h-[100vh] pointer-events-none  opacity-0":
                !props.searchstate,
            },
            {
              " bg-overly-0 fixed top-0 w-[100vw] z-40 pointer-events-all h-[100vh]":
                props.searchstate,
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
                  !props.searchstate,
              },
              {
                " fixed flex border shadow-lg  border-slate-950 flex-col top-0 justify-start items-center min-w-[100vw] bg-main-0 h-[75vh] min-h-[75vh] overflow-y-scroll  p-2 z-[999] ":
                  props.searchstate,
              }
            )}
            id="form"
          >
            <div className="flex w-full  justify-between   space-x-2 items-center">
              <div
                className={classNames(
                  { hidden: !props.searchstate },
                  { "block   w-max": props.searchstate }
                )}
              >
                <img alt="logo" src={Logo} width={100} height={100} />
              </div>
              <div
                className={classNames("flex w-1/3 items-center", {
                  "flex items-center relative   w-2/3": props.searchstate,
                })}
              >
                <label htmlFor="searchinput" className="absolute left-7">
                  <i
                    className="bi bi-search hover:text-greyish-0  cursor-pointer p-1 text-xl font-semibold text-slate-950"
                    id="search-icon"
                    onClick={props.openSearch}
                  ></i>
                </label>
                <input
                  name="Search"
                  onChange={props.HandleSearch}
                  value={props.searchresult.Search}
                  type="search"
                  id="searchinput"
                  autoComplete="off"
                  className={classNames(
                    " border pl-10  ml-2 p-2 outline-none  border-slate-600 w-[200px] rounded-2xl bg-transparent ",
                    { " w-full pl-16  ": props.searchstate }
                  )}
                  placeholder="Search"
                />
              </div>

              <button
                type="button"
                onClick={props.CloseSearch}
                className={classNames(
                  { "hidden p-2": !props.searchstate },
                  {
                    "block p-2   rounded-full border border-green-100 text-lg hover:bg-slate-950 hover:text-white":
                      props.searchresult.Search || props.searchstate,
                  }
                )}
              >
                Cancel
              </button>
            </div>
            <div
              className={classNames(
                "p-2 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full  gap-2",
                { "": !props.searchstate }
              )}
            >
              {minicards}
            </div>
          </form>
          <div className="mr-2  w-max p-2 flex space-x-2">
            <div className=" items-center hidden sm:flex justify-start">
              <Link
                to="/SignUp"
                className="hedear-text cursor-pointer rounded p-1 text-xl text-slate-950 hover:text-slate-600 sm:text-2xl"
                id="login-btn"
              >
                Join us
              </Link>
              <Link
                className="hedear-text border-separate cursor-pointer border-l border-slate-700 p-1 text-xl text-slate-950 hover:text-slate-600 sm:text-2xl"
                id="login-btn"
                to="/SignIn"
              >
                sign in
              </Link>
            </div>
            <div className="bg-transparent p-1 flex justify-center items-center h-max relative  rounded ">
              <Tooltip />
            </div>
            <Link to={"/Bag"}>
              <div className=" relative p-1 flex bg-gray-400 justify-center items-center mr-1 rounded ">
                <TooltipCart />
                <span className="absolute right-[-6px] top-[-6px] rounded bg-slate-500 pl-1 pr-1 text-sm text-white">
                  {props.CartAmount}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCart;
