import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tooltip from "./components/TooltipFavorite";
import TooltipCart from "./components/TooltipCart";
import classNames from 'classnames';
import "./components/Navbar.css";
function SearchCart(props) {
    const [SearcWidth,setSearchWidth]=useState(false)
function SearchWidthF(params) {
    setSearchWidth((prevdata)=>{
     return !prevdata
    })
}

  return (
    <>
      <div
            className="h-max w-full flex-col rounded bg-transparent shadow-md"
            id="form-section"
          >
            <div className="bottom flex h-max w-full items-center justify-between p-1">
              <form
                action="submit"
                className="ml-2 flex w-max items-center justify-center rounded bg-transparent"
                id="form"
              >
                <i
                  className="bi bi-search ml-1 cursor-pointer p-1 text-2xl font-semibold text-slate-950 shadow-sm"
                  id="search-icon"
                  onClick={SearchWidthF}
                ></i>
                <label htmlFor="search"></label>
                <input
                  type="search"
                  id="search-input"
                  className={classNames("rounded border border-slate-600 bg-transparent p-1",{"expand":SearcWidth})}
                  placeholder="search"
                 
                />
              </form>
              <div className="mr-2 flex w-max space-x-2">
                <div className="flex items-center justify-start">
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
                <div className="bg-transparent flex justify-center items-center h-max relative  rounded ">
                  <Tooltip />
                </div>
                <div className="cart relative flex justify-center items-center h-max mr-1 rounded bg-gray-700">
                  <TooltipCart />
                  <span className="absolute right-[-4px] top-[-4px] rounded bg-red-950 pl-1 pr-1 text-sm text-white">
                    {props.CartAmount}
                  </span>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default SearchCart