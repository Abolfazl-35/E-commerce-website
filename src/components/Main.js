import React, { useEffect } from "react";
import "./main.css";
import Shipping_Logo from "../images/logo/pngtree-free-shipping-stamp-vector-png-image_4293922.png";
import ReturnPolicy_logo from "../images/logo/30-days-easy-returns-trusts-badge-logo-design-icons_526569-291.png";
import ContectUs_Logo from "../images/logo/trust logo.jpeg(2).png";




function Main() {
useEffect(()=>{
  const next_btn = document.getElementById("next-btn");
  const prev_btn = document.getElementById("prev-btn");
  const menu_list = document.querySelectorAll(".menu-list");
const show_case_section = document.getElementById("show-case-section");
  menu_list.forEach((i, index) => {
    i.addEventListener("click", (e) => {
      e.preventDefault();
      show_case_section.style.transform = `translateX(${-100 * index}vw)`;
    });
  });
  let index = 0;
  next_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (index < 4) {
      index += 1;
      show_case_section.style.transform = `translateX(${-100 * index}vw)`;
    } else {
      index = 4;
    }
  });
  prev_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (index > 0) {
      index -= 1;
      show_case_section.style.transform = `translateX(${-100 * index}vw)`;
    } else {
      index = 0;
    }
  });




})




  return (
    <>
      <div className="wrapper border-t relative h-[380px] overflow-hidden">
        <i id="next-btn" className="bi bi-arrow-right-circle text-3xl"></i>
        <i id="prev-btn" className="bi bi-arrow-left-circle text-3xl"></i>
        <div
          className="flex h-full w-[500vw] items-center justify-start"
          id="show-case-section"
        >
          <div className="show-case-item relative flex h-full w-[100vw]  items-center justify-center">
            <h2 className="brand-header sm:top[10%] absolute start-[5%] top-[5%] rounded bg-cyan-800 pb-3 pl-4 pr-4 pt-3 text-center font-serif text-sm font-semibold sm:start-[10%] sm:text-lg">
              jordan
              <br />
              new
              <br />
              season
            </h2>

            <h2 className="price-header absolute right-[5%] top-[5%] p-1 pl-2 pr-2 text-center font-serif text-sm font-semibold sm:right-[10%] sm:top-[10%] sm:text-lg">
              price:100$
            </h2>

            <button
              className="buy-btn absolute bottom-[2%] right-[5%] pb-1 pl-2 pr-2 pt-1 font-serif text-sm font-semibold sm:bottom-[10%] sm:right-[10%] sm:text-lg"
              type="button"
            >
              Buy Now
            </button>
          </div>
          <div className="show-case-item relative flex h-full w-[100vw] items-center justify-center">
            <h2 className="brand-header sm:top[10%] absolute start-[5%] top-[5%] rounded bg-cyan-800 pb-3 pl-4 pr-4 pt-3 text-center font-serif text-sm font-semibold sm:start-[10%] sm:text-lg">
              AirMax
              <br />
              new
              <br />
              season
            </h2>

            <h2 className="price-header absolute right-[5%] top-[5%] p-1 pl-2 pr-2 text-center font-serif text-sm font-semibold sm:right-[10%] sm:top-[10%] sm:text-lg">
              price:210$
            </h2>

            <button
              className="buy-btn absolute bottom-[2%] right-[5%] pb-1 pl-2 pr-2 pt-1 font-serif text-sm font-semibold sm:bottom-[10%] sm:right-[10%] sm:text-lg"
              type="button"
            >
              Buy Now
            </button>
          </div>
          <div className="show-case-item relative flex h-full w-[100vw] items-center justify-center">
            <h2 className="brand-header sm:top[10%] absolute start-[5%] top-[5%] rounded bg-cyan-800 pb-3 pl-4 pr-4 pt-3 text-center font-serif text-sm font-semibold sm:start-[10%] sm:text-lg">
              AirForce 1<br />
              new
              <br />
              season
            </h2>

            <h2 className="price-header absolute right-[5%] top-[5%] p-1 pl-2 pr-2 text-center font-serif text-sm font-semibold sm:right-[10%] sm:top-[10%] sm:text-lg">
              price:135$
            </h2>

            <button
              className="buy-btn absolute bottom-[2%] right-[5%] pb-1 pl-2 pr-2 pt-1 font-serif text-sm font-semibold sm:bottom-[10%] sm:right-[10%] sm:text-lg"
              type="button"
            >
              Buy Now
            </button>
          </div>
          <div className="show-case-item relative flex h-full w-[100vw] items-center justify-center">
            <h2 className="brand-header sm:top[10%] absolute start-[5%] top-[5%] rounded bg-cyan-800 pb-3 pl-4 pr-4 pt-3 text-center font-serif text-sm font-semibold sm:start-[10%] sm:text-lg">
              Dunk & Blazer
              <br />
              new
              <br />
              season
            </h2>

            <h2 className="price-header absolute right-[5%] top-[5%] p-1 pl-2 pr-2 text-center font-serif text-sm font-semibold sm:right-[10%] sm:top-[10%] sm:text-lg">
              price:125$
            </h2>

            <button
              className="buy-btn absolute bottom-[2%] right-[5%] pb-1 pl-2 pr-2 pt-1 font-serif text-sm font-semibold sm:bottom-[10%] sm:right-[10%] sm:text-lg"
              type="button"
            >
              Buy Now
            </button>
          </div>
          <div className="show-case-item relative flex h-full w-[100vw] items-center justify-center">
            <h2 className="brand-header sm:top[10%] absolute start-[5%] top-[5%] rounded bg-cyan-800 pb-3 pl-4 pr-4 pt-3 text-center font-serif text-sm font-semibold sm:start-[10%] sm:text-lg">
              New Balance
              <br />
              new
              <br />
              season
            </h2>

            <h2 className="price-header absolute right-[5%] top-[5%] p-1 pl-2 pr-2 text-center font-serif text-sm font-semibold sm:right-[10%] sm:top-[10%] sm:text-lg">
              price:100$
            </h2>

            <button
              className="buy-btn absolute bottom-[2%] right-[5%] pb-1 pl-2 pr-2 pt-1 font-serif text-sm font-semibold sm:bottom-[10%] sm:right-[10%] sm:text-lg"
              type="button"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-zinc-600 p-0" id="fetuers">
        <div className="mt-1  flex items-center justify-between pt-2">
          <div className="flex-col items-center justify-center p-1 font-serif text-sm">
            <img src={Shipping_Logo} 
            loading="lazy"
            className="w-24"
             alt="shiping-logo" />
            <h2 className="p-1 text-center">Free Shippment</h2>
          </div>
          <div className="flex-col items-center justify-center p-1 font-serif text-sm">
            <img
              src={ReturnPolicy_logo}
              className="w-24"
              alt="ReturnPolicy_logo"
              loading="lazy"
            />
            <h2 className="p-1 text-center">Return Policy</h2>
          </div>
          <div className=" flex-col   p-1 items-center justify-center  font-serif text-sm">
            <img src={ContectUs_Logo} 
            className="w-24 h-24 " 
            loading="lazy"
            alt="Contect_us" />
            <h2 className="p-1 text-center">Contect Us</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
