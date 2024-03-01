import React, { useEffect, useState } from "react";
import "../components/ShoesMenu.css";
import { Style } from "@mui/icons-material";
function ShoesMenu() {
  // useEffect(() => {
  //   const nav_buttom = document.getElementById("nav-buttom");
  //   const msg_section = document.getElementById("msg-section");
  //   const msg = document.querySelectorAll(".msg");
  //   const menu_btn = document.getElementById("menu-btn");
  //   menu_btn.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     if (nav_buttom.classList.contains("open_menu")) {
  //       nav_buttom.classList.remove("open_menu");
  //     } else {
  //       nav_buttom.classList.add("open_menu");
  //     }
  //   });

  //   //     msg.forEach(msg,index => {
  //   //      msg.setAttribute("aria-hidden",true)
  //   //   const duplicat=msg.cloneNode(true)

  //   //  duplicat.setAttribute("aria-hidden",true)
  //   //    console.log(duplicat)
  //   //    console.log(msg.clientWidth)
  //   //     msg_section.appendChild(duplicat)
  //   //   let client_Width=msg.clientWidth
  //   // msg_section.style.transform(`translateX(${-client_Width * index}px)`)

  //   //         });
  //   let interval = "3000";
  //   let index = 0;

  //   const startmsg = () => {
  //     setInterval(() => {
  //       msg[index].ariaHidden = true;
  //       index++;
  //       msg_section.style.transform = `translateX(${-100 * index}vw)`;
  //       msg_section.style.transition = "0.7s";
  //       if (msg[msg.length - 1].ariaHidden === "true") {
  //         msg_section.style.transform = "none";
  //         index = 0;
  //         msg_section.style.transform = `translateX(${-100 * index}vw)`;
  //         msg.forEach((i) => {
  //           i.ariaHidden = false;
  //         });
  //       }
  //     }, interval);
  //   };
  //   startmsg();
  // });
  
  
  
  
  
  const [msg,setmsg]=useState(0)
  let msgTime=setTimeout(()=>{
    setmsg((prevdata)=>{
      if (prevdata<2) {
        return ++prevdata
      }
      if (prevdata===2) {
        clearTimeout(msgTime)
        return 0
      }
      
    })
  },"4000")

  const msgstyle={transform:`translateX(${-100 * msg}vw)`,transition:".7s"}

  return (
    <div>
      <div className="mt-2 flex w-full items-center justify-start">
       
        <div className="flex w-full overflow-hidden ">
          <ul style={msgstyle}
            className="flex relative justify-center w-max p-2"
            id="msg-section"
          >
            <li 
              className="msg  w-[100vw] flex-col   text-base  items-center"
              aria-hidden={msg===0?false:true}
              
            >
              <div  className="flex flex-wrap justify-center items-center">
                <p className="m-0 p-0 text-xs xs:text-sm sm:text-base  text-center text-wrap ">
                  New Year Kickoff Sale:Up to 50% Off🎉
                </p>
              </div>

              <div className="flex w-full p-1 items-center justify-center">
                <a href="#" className=" underline tracking-normal text-xs xs:text-sm sm:text-base">
                
                    Sign in and use code <strong>Letsgo</strong> for an extra
                    25% off
                 
                </a>
              </div>
            </li>
            <li
              className="msg  w-[100vw] flex-col font-normal     items-center"
              aria-hidden={msg===1?false:true}
            >
              <div className="flex justify-center items-center">
                <p className="m-0 p-0 text-xs xs:text-sm sm:text-base  text-center ">
                  Get Your Gear Fater
                </p>
              </div>

              <div className="flex w-full p-1 items-center justify-center">
                <a href="#" className="underline tracking-normal text-sm">
                 Look For Store Pickup at Checkout
                </a>
              </div>
            </li>
            <li
              className="msg  w-[100vw] flex-col    items-center"
              aria-hidden={msg===2?false:true}
            >
              <div className="flex justify-center items-center">
                <p className="m-0 p-0  text-center text-xs xs:text-sm sm:text-base ">
                  Members Free Shipping in Orders +50$
                </p>
              </div>

              <div className="flex w-full p-1 items-center justify-center">
                <a href="#" className="underline tracking-normal text-sm">
                 Sign Up
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex border-t p-1 w-full justify-center items-center">
          <button
          id="menu-btn"
          className="hidden cursor-pointer justify-self-center rounded bg-transparent p-1 pt-0 text-base uppercase tracking-wider hover:bg-slate-600 hover:text-white"
        >
          menu
        </button>
      </div>

      <div
        id="nav-buttom"
        className="w-full bg-slate-200 p-2 shadow-md sm:flex sm:shadow-none"
      >
       
        <div
          id="nav-buttom-inner"
          className="min-w-full flex-col items-center justify-between md:justify-evenly space-y-2 p-1 sm:flex sm:flex-row sm:space-y-0"
        >
          <li className="menu-list animate-gradient cursor-pointer border-sky-900 text-center text-base font-semibold uppercase text-white hover:text-amber-500">
            jordan
          </li>
          <li className="menu-list animate-gradient cursor-pointer text-center text-base font-semibold uppercase text-white hover:text-amber-500">
            AirMax
          </li>
          <li className="menu-list animate-gradient cursor-pointer text-center text-base font-semibold uppercase text-white hover:text-amber-500">
            AirForce 1
          </li>
          <li className="menu-list animate-gradient cursor-pointer text-center text-base font-semibold uppercase text-white hover:text-amber-500">
            Dunk & Blazer
          </li>
          <li className="menu-list animate-gradient cursor-pointer text-center text-base font-semibold uppercase text-white hover:text-amber-500">
            New Balance
          </li>
        </div>
      </div>
    </div>
  );
}

export default ShoesMenu;
