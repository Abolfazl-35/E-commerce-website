import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo/trust-logo-4.png";
import "../components/Navbar.css";
import UserDashBoard from "./Dashboards/UserDashBoard";
import MiniBag from "./MiniBag";
import classNames from "classnames";
import SearchCart from "./SearchCart";
import { AuthContext } from "../context/AuthContext";

function Navbar(props) {
  useEffect(() => {
    const men_women_menu = document.querySelector(".men-women-menu");
    const kids_menu = document.getElementById("kids-menu");
    const kids_item = document.getElementById("kids-item");
    const men_item = document.getElementById("men-item");
    const women_item = document.getElementById("women-item");
    const new_featured_item = document.getElementById("new-featured");
    const new_featured_menu = document.getElementById("new-featured-menu");
    const accessories_menu = document.getElementById("accessories-menu");
    const accessories_item = document.getElementById("accessories-item");

    function dropdown_hover() {
      men_item.addEventListener("mouseenter", (e) => {
        men_item.ariaExpanded = true;
        showdropdown_men_women_dropdown(men_item.ariaExpanded);
      });
      men_item.addEventListener("mouseleave", (e) => {
       

        men_item.ariaExpanded = false;
        showdropdown_men_women_dropdown(men_item.ariaExpanded);
      });
      women_item.addEventListener("mouseenter", (e) => {
        women_item.ariaExpanded = true;
        showdropdown_men_women_dropdown(women_item.ariaExpanded);
      });
      women_item.addEventListener("mouseleave", (e) => {
        women_item.ariaExpanded = false;
        showdropdown_men_women_dropdown(women_item.ariaExpanded);
      });
      men_women_menu.addEventListener("mouseenter", (e) => {
        men_item.ariaExpanded = true;
        women_item.ariaExpanded = true;
        showdropdown_men_women_dropdown(
          women_item.ariaExpanded,
          men_item.ariaExpanded
        );
      });
      men_women_menu.addEventListener("mouseleave", (e) => {
        men_item.ariaExpanded = false;
        women_item.ariaExpanded = false;
        showdropdown_men_women_dropdown(
          women_item.ariaExpanded,
          men_item.ariaExpanded
        );
      });

      kids_item.addEventListener("mouseenter", (e) => {
        kids_item.ariaExpanded = true;
        showdropdown_kids_dropdown(kids_item.ariaExpanded);
      });
      kids_item.addEventListener("mouseleave", (e) => {
        e.preventDefault();
        kids_item.ariaExpanded = false;

        showdropdown_kids_dropdown(kids_item.ariaExpanded);
      });

      kids_menu.addEventListener("mouseenter", (e) => {
        kids_item.ariaExpanded = true;
        showdropdown_kids_dropdown(kids_item.ariaExpanded);
      });
      kids_menu.addEventListener("mouseleave", (e) => {
        kids_item.ariaExpanded = false;
        showdropdown_kids_dropdown(kids_item.ariaExpanded);
      });
      kids_item.addEventListener("mouseenter", (e) => {
        kids_item.ariaExpanded = true;
        showdropdown_kids_dropdown(kids_item.ariaExpanded);
      });

      new_featured_item.addEventListener("mouseenter", (e) => {
        new_featured_item.ariaExpanded = true;
        showdropdown_new_featured_dropdown(new_featured_item.ariaExpanded);
      });
      new_featured_item.addEventListener("mouseleave", (e) => {
        new_featured_item.ariaExpanded = false;
        showdropdown_new_featured_dropdown(new_featured_item.ariaExpanded);
      });
      new_featured_menu.addEventListener("mouseenter", (e) => {
        new_featured_item.ariaExpanded = true;
        showdropdown_new_featured_dropdown(new_featured_item.ariaExpanded);
      });

      new_featured_menu.addEventListener("mouseleave", (e) => {
        new_featured_item.ariaExpanded = false;
        showdropdown_new_featured_dropdown(new_featured_item.ariaExpanded);
      });

      accessories_item.addEventListener("mouseenter", (e) => {
        accessories_item.ariaExpanded = true;
        showdropdown_accessories_dropdown(accessories_item.ariaExpanded);
      });
      accessories_item.addEventListener("mouseleave", (e) => {
        accessories_item.ariaExpanded = false;
        showdropdown_accessories_dropdown(accessories_item.ariaExpanded);
      });
      accessories_menu.addEventListener("mouseenter", (e) => {
        accessories_item.ariaExpanded = true;
        showdropdown_accessories_dropdown(accessories_item.ariaExpanded);
      });
      accessories_menu.addEventListener("mouseleave", (e) => {
        accessories_item.ariaExpanded = false;
        showdropdown_accessories_dropdown(accessories_item.ariaExpanded);
      });
    }
    dropdown_hover();
    function showdropdown_kids_dropdown(ariaparam) {
      if (ariaparam === "true") {
        kids_menu.classList.add("show");
      } else if (ariaparam === "false") {
        kids_menu.classList.remove("show");
      }
    }
    function showdropdown_men_women_dropdown(ariaparam, ariaparam2) {
      if (ariaparam === "true" || ariaparam2 === "true") {
        men_women_menu.classList.add("show");
      } else if (ariaparam === "false" || ariaparam2 === "false") {
        men_women_menu.classList.remove("show");
      }
    }

    function showdropdown_new_featured_dropdown(ariaparam) {
      if (ariaparam === "true") {
        new_featured_menu.classList.add("show");
      } else if (ariaparam === "false") {
        new_featured_menu.classList.remove("show");
      }
    }

    function showdropdown_accessories_dropdown(ariaparam) {
      if (ariaparam === "true") {
        accessories_menu.classList.add("show");
      } else if (ariaparam === "false") {
        accessories_menu.classList.remove("show");
      }
    }
    return ()=>{
      
    }
  }, []);
  console.log(props);
  const { searchState, User } = useContext(AuthContext);
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

  const [openNav, setopenNav] = useState(false);

  function Navtoggle(params) {
    setopenNav((prevdata) => {
      return !prevdata;
    });
  }

  return (
    <div className="   w-[100vw] relative ">
      <div className="w-full   ">
        <div className=" w-full overflow-hidden   ">
          {User && <UserDashBoard />}
        </div>
      </div>
      <div className="navbar  sticky top-0 left-0 z-40 flex h-max w-full max-w-full items-center  justify-between shadow-md">
        <div
          id="nav"
          className="relative h-max w-full flex-col items-start justify-between bg-slate-200"
        >
          <MiniBag MiniBagState={props.MiniBagState} item={props.item} />

          <div
            onClick={Navtoggle}
            className={classNames("overly", { active: openNav })}
          ></div>
          {/* logo and navbar lists */}
          <div
            id="nav-top"
            className="relative  flex h-max max-h-max w-full border-separate justify-between border-b "
          >
            <Link className="p-1" to="/">
              <div
                className="mt-1 flex h-[70px] w-[80px] items-center justify-center  pr-1"
                id="logo"
              >
                <img src={Logo} className="h-full w-full" alt="logo" />
              </div>
            </Link>
            {/* navbar btn in small screens */}
            <div
              className={classNames(
                {
                  "absolute z-[999]  right-[15px] top-5 w-max cursor-pointer":
                    !searchState,
                },
                { hidden: searchState }
              )}
              id="open-menu-btn"
              onClick={Navtoggle}
            >
              <div
                className={classNames(
                  "flex p-1 justify-center w-max  items-center reletive"
                )}
              >
                <div
                  className={classNames("toggle", { "aria-active": openNav })}
                >
                  <span className=""></span>
                  <span className=""></span>
                  <span className=""></span>
                </div>
              </div>
            </div>

            <ul
              className=" flex w-full  items-start   space-y-6 p-3 text-lg text-slate-950 sm:space-x-5 sm:space-y-0 sm:text-base"
              id="nav-list-container"
            >
              <div
                className={classNames(
                  "relative sm:space-x-1 md:space-x-8  sm:space-y-0 sm:text-xl  justify-start md:justify-center flex flex-col sm:flex-row w-full items-center  space-y-6 p-3 text-lg sm:mt-0",
                  { active: openNav }
                )}
                id="nav-list"
              >
                <button
                  className="nav-item flex w-full cursor-pointer items-center justify-between p-1 text-start font-serif sm:h-full mt-20 sm:mt-0 sm:w-max sm:border-none"
                  id="new-featured"
                  aria-expanded="false"
                  aria-controls="new-featured-menu"
                >
                  <h2 className="h-max sm:pl-4 pb-2 sm:pr-4">New & Featured</h2>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-right-circle sm:hidden"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                    />
                  </svg>
                </button>

                <button
                  className="nav-item flex w-full cursor-pointer items-center justify-between p-1 text-start font-serif sm:h-full sm:w-max sm:border-none"
                  id="men-item"
                  aria-expanded="false"
                  aria-controls="men-menu"
                >
                  <h2 className="h-max sm:pl-4 pb-2 sm:pr-4">Men</h2>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-right-circle sm:hidden"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                    />
                  </svg>
                </button>
                <button
                  className="nav-item flex w-full cursor-pointer items-center justify-between p-1 text-start font-serif sm:h-full sm:w-max sm:border-none"
                  id="women-item"
                  aria-expanded="false"
                  aria-controls="men-menu"
                >
                  <h2 className="h-max sm:pl-4 pb-2 sm:pr-4">Women</h2>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-right-circle sm:hidden"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                    />
                  </svg>
                </button>
                <button
                  className="nav-item flex w-full cursor-pointer items-center justify-between p-1 text-start font-serif sm:h-full sm:w-max sm:border-none"
                  id="kids-item"
                  aria-expanded="false"
                  aria-controls="kids-menu"
                >
                  <h2 className="sm:pr-4 pb-2 sm:pl-4">kids</h2>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-right-circle sm:hidden"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                    />
                  </svg>
                </button>

                <button
                  className="nav-item flex w-full cursor-pointer items-center justify-between p-1 text-start font-serif sm:h-full sm:w-max sm:border-none"
                  id="accessories-item"
                  aria-expanded="false"
                  aria-controls="accessories-menu"
                >
                  <h2 className="pb-2">Accessories</h2>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-right-circle sm:hidden"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                    />
                  </svg>
                </button>
                <li className="sm:hidden">
                  <p className="text-sm font-serif">
                    Become a Member for the best products,inspiration and
                    stories in sport.
                    <a
                      href="#"
                      className="font-semibold text-sm hover:text-gray-700"
                    >
                      Learn More
                    </a>
                  </p>
                </li>
                <div className="sm:hidden flex w-full justify-evenly items-center">
                  <button className="bg-slate-950 text-white border rounded-2xl border-slate-100 p-1">
                    Join Us
                  </button>
                  <button className="bg-slate-100 border border-slate-900 rounded-2xl text-slate-950 p-1">
                    Sign In
                  </button>
                </div>
              </div>
            </ul>
          </div>
          {/* men-women-hover-menu */}
          <div
            className="men-women-menu absolute grid h-max grid-cols-3 gap-2 rounded bg-[#EFE9EB] p-2 font-sans text-sm text-zinc-500 shadow-md shadow-neutral-700 sm:grid-cols-3"
            id="men-menu"
          >
            <div className="men-menu-inner-1 flex w-full flex-col items-start space-y-2 p-1">
              <h1 className="text-start font-serif font-semibold text-slate-950">
                New & Featured
              </h1>

              <h2 className="text-start">New Arrivals</h2>
              <h2 className="text-start">Best Sellers</h2>
              <h2 className="text-start">Costomized Whit Nike By You</h2>
              <h2 className="text-start">Best Of Fleece</h2>
              <div className="offer">
                <h1 className="mt-3 text-start font-serif font-semibold text-slate-950">
                  Limeted Time
                </h1>
                <h2 className="text-start">Last Chance Sale:Up to 40% Off</h2>
              </div>
            </div>

            <div className="men-menu-inner-2 flex h-full w-full flex-col space-y-2">
              <h1 className="text-start font-serif font-semibold text-slate-950">
                All Shoes
              </h1>

              <h2 className="text-start">Life Style</h2>
              <h2 className="text-start">Jordan</h2>
              <h2 className="text-start">AirForce 1</h2>
              <h2 className="text-start">AirMax</h2>
              <h2 className="text-start">Dunk & Blazer</h2>
              <h2 className="text-start">Training & Gyme</h2>
              <h2 className="text-start">BsketBall</h2>
              <h2 className="text-start">Runing</h2>
              <h2 className="text-start">Nike SB</h2>
              <h2 className="text-start">Sandals & Slides</h2>
            </div>
            <div className="men-menu-inner-3 flex w-full flex-col items-start space-y-2">
              <h1 className="text-start font-serif font-semibold text-slate-950">
                All Clothing
              </h1>

              <h2 className="text-start">Jordan</h2>
              <h2 className="text-start">Matching Sets</h2>
              <h2 className="text-start">Big & Tall</h2>
              <h2 className="text-start">Tech Fleece</h2>
              <h2 className="text-start">BsketBall</h2>
              <h2 className="text-start">Hoodies & SweatShirts</h2>
              <h2 className="text-start">Pants & Tights</h2>
              <h2 className="text-start">OuterWear & Jackets</h2>
              <h2 className="text-start">Tops & T-Shirts</h2>
              <h2 className="text-start">Matching Sets</h2>
              <h2 className="text-start">Shorts</h2>
              <h2 className="text-start">UnderWear</h2>
              <h2 className="text-start">Socks</h2>
              <h2 className="text-start">Clothing $50 & Under</h2>
            </div>
          </div>
          {/* kids hover menu */}
          <div
            className="kids-menu  absolute grid h-max grid-cols-3 gap-2 rounded bg-[#EFE9EB] p-2 text-sm text-zinc-500 shadow-md shadow-neutral-700 sm:grid-cols-3"
            id="kids-menu"
          >
            <div className="kids-menu-inner-1 flex w-full flex-col items-start space-y-2 p-1">
              <h1 className="text-start font-serif font-semibold text-slate-950">
                New & Featured
              </h1>

              <h2 className="text-start">New Arrivals</h2>
              <h2 className="text-start">Best Sellers</h2>
              <h2 className="text-start">Teen Girls Essential</h2>
              <h2 className="text-start">Best Of Kids Fleece</h2>

              <h2 className="text-start">Cozy Colection</h2>
              <h2 className="text-start">Sale:Up to 40% Off</h2>
            </div>

            <div className="kids-menu-inner-2 flex h-full w-full flex-col space-y-2">
              <h1 className="text-start font-serif font-semibold text-slate-950">
                Shoes By Sizes
              </h1>

              <h2 className="text-start">Big Kids (1Y-7Y)</h2>
              <h2 className="text-start">LIttke Kids (8C-3Y)</h2>
              <h2 className="text-start">Bby & Toddler (1C-10C)</h2>
              <h1 className="text-start font-serif font-semibold text-slate-950">
                All Shoes
              </h1>

              <h2 className="text-start">Life Style</h2>
              <h2 className="text-start">Jordan</h2>
              <h2 className="text-start">AirForce 1</h2>
              <h2 className="text-start">AirMax</h2>
              <h2 className="text-start">Dunk & Blazer</h2>
              <h2 className="text-start">Training & Gyme</h2>
              <h2 className="text-start">BsketBall</h2>
              <h2 className="text-start">Runing</h2>
              <h2 className="text-start">Nike SB</h2>
              <h2 className="text-start">Sandals & Slides</h2>
            </div>
            <div className="kids-menu-inner-3 flex w-full flex-col items-start space-y-2">
              <h1 className="text-start font-serif font-semibold text-slate-950">
                All Clothing
              </h1>

              <h2 className="text-start">Jordan</h2>
              <h2 className="text-start">Matching Sets</h2>
              <h2 className="text-start">Big & Tall</h2>
              <h2 className="text-start">Tech Fleece</h2>
              <h2 className="text-start">BsketBall</h2>
              <h2 className="text-start">Hoodies & SweatShirts</h2>
              <h2 className="text-start">Pants & Tights</h2>
              <h2 className="text-start">OuterWear & Jackets</h2>
              <h2 className="text-start">Tops & T-Shirts</h2>
              <h2 className="text-start">Matching Sets</h2>
              <h2 className="text-start">Shorts</h2>
              <h2 className="text-start">UnderWear</h2>
              <h2 className="text-start">Socks</h2>
              <h2 className="text-start">Clothing $50 & Under</h2>
            </div>
          </div>
          {/* new Featured hover menu */}
          <div
            className="new-featured-menu absolute grid h-max grid-cols-4 gap-2 rounded bg-[#EFE9EB] p-2 text-sm text-zinc-500 shadow-md shadow-neutral-700 sm:grid-cols-4"
            id="new-featured-menu"
            aria-expanded="false"
          >
            <div className="new-featured-inner-1 flex w-full flex-col items-start space-y-2 p-1">
              <h1 className="text-start font-serif font-semibold text-slate-950">
                New & Featured
              </h1>

              <h2 className="text-start">New Arrivals</h2>
              <h2 className="text-start">Best Sellers</h2>
              <h2 className="text-start">Only at Nike</h2>
              <h2 className="text-start">New & Upcomig Drops</h2>
              <h2 className="text-start">Snkrs Launch Calender</h2>
              <h2 className="text-start">New in Runing</h2>
              <div className="offer">
                <h1 className="mt-3 text-start font-serif font-semibold text-slate-950">
                  Limeted Time
                </h1>
                <h2 className="text-start">Last Chance Sale:Up to 40% Off</h2>
              </div>
            </div>
            <div className="new-featured-inner-2 flex h-full w-full flex-col space-y-2">
              <h1 className="text-start font-serif font-semibold text-slate-950">
                Shop Icons
              </h1>

              <h2 className="text-start">Air Jordan 1</h2>
              <h2 className="text-start">Air Force</h2>
              <h2 className="text-start">Dunk</h2>
              <h2 className="text-start ">Air Max</h2>

              <h2 className="text-start">Blazer</h2>
              <h2 className="text-start">Pegasus</h2>
              <h2 className="text-start">Metcon</h2>
              <h2 className="text-start">LeBron</h2>
            </div>
            <div className="new-featured-inner-3 flex h-full w-full flex-col space-y-3">
              <div className="new-for-men flex flex-col space-y-2">
                <h1 className="text-start font-serif font-semibold text-slate-950">
                  New For Men
                </h1>

                <h2 className="text-start">Shoes</h2>
                <h2 className="text-start">Clothing</h2>
              </div>
              <div className="new-for-women flex flex-col space-y-2">
                <h1 className="text-start  font-serif font-semibold text-slate-950">
                  New For WoMen
                </h1>
                <h2 className="text-start">Shoes</h2>
                <h2 className="text-start">Clothing</h2>
              </div>
              <div className="new-for-kids flex flex-col space-y-2">
                <h1 className="text-start  font-serif font-semibold text-slate-950">
                  New For Kids
                </h1>
                <h2 className="text-start">Shoes</h2>
                <h2 className="text-start">Clothing</h2>
              </div>
            </div>
            <div className="new-featured-inner-4 flex h-full w-full flex-col space-y-2">
              <h1 className="text-start font-serif font-semibold text-slate-950">
                Jordan
              </h1>

              <h2 className="text-start">Shop All</h2>
              <h2 className="text-start">Latest in Jordan</h2>
              <h2 className="text-start">Complete the Fit With Jordan</h2>
              <h1 className="text-start ">Men</h1>

              <h2 className="text-start">Women</h2>
              <h2 className="text-start">Kids</h2>
              <h2 className="text-start">Basketball</h2>
            </div>
          </div>
          {/* accesseries menu */}
          <div
            className="accessories-menu absolute grid h-max grid-cols-4 gap-2 rounded bg-[#EFE9EB] p-2  text-sm text-zinc-500 shadow-md shadow-neutral-700 sm:grid-cols-4"
            id="accessories-menu"
          >
            <div className="accessories-menu-inner-1 flex w-full flex-col items-start space-y-4 p-1">
              <h1 className="text-start font-serif font-semibold text-slate-950">
                Featured
              </h1>

              <h2 className="text-start">New Releases</h2>

              <div className="flex flex-col space-y-2">
                <h1 className="text-start font-serif font-semibold text-slate-950">
                  Limited Time
                </h1>
                <h2 className="text-start">New Year Sake:UP To 50%</h2>

                <h2 className="text-start">Cozy Colection</h2>
                <h2 className="text-start">Sale:Up to 40% Off</h2>
              </div>
            </div>

            <div className="accessories-menu-inner-2 flex h-full w-full flex-col space-y-2">
              <h1 className="text-start font-serif font-semibold text-slate-950">
                All Accessories
              </h1>

              <h2 className="text-start">Socks</h2>
              <h2 className="text-start">Bags &Backpacks</h2>
              <h2 className="text-start">Hats & Headwear</h2>

              <h2 className="text-start">Sunglasses & Eyewear</h2>
              <h2 className="text-start">Water Bottles & Hydration</h2>
              <h2 className="text-start">Watches</h2>
              <h2 className="text-start">Gloves</h2>
              <h2 className="text-start">Jordan</h2>
            </div>
            <div className="accessories-menu-inner-3 flex w-full flex-col items-start space-y-2">
              <h1 className="text-start font-serif font-semibold text-slate-950">
                Shop By Gender
              </h1>

              <h2 className="text-start">Men</h2>
              <h2 className="text-start">Women</h2>
              <h2 className="text-start">Kids</h2>
            </div>
            <div className="accessories-menu-inner-4 flex w-full flex-col items-start space-y-2">
              <h1 className="text-start font-serif font-semibold text-slate-950">
                Shop By Sport
              </h1>

              <h2 className="text-start">Basketball</h2>
              <h2 className="text-start">Golf</h2>
              <h2 className="text-start">Soccer</h2>
              <h2 className="text-start">Running</h2>
              <h2 className="text-start">Tennis</h2>
              <h2 className="text-start">Baseball</h2>
              <h2 className="text-start">Football</h2>
              <h2 className="text-start">Volleyball</h2>
              <h2 className="text-start">Cheerleading</h2>
              <h2 className="text-start">Training $ Gym</h2>
            </div>
          </div>
          {/* search and cart */}
          <SearchCart />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
