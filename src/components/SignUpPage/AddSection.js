import React from 'react'
import { useEffect } from 'react';

function AddSection() {
    useEffect(() => {
      
        const msg_section = document.getElementById("msg-section");
        const msg = document.querySelectorAll(".msg");

        //     msg.forEach(msg,index => {
        //      msg.setAttribute("aria-hidden",true)
        //   const duplicat=msg.cloneNode(true)
    
        //  duplicat.setAttribute("aria-hidden",true)
        //    console.log(duplicat)
        //    console.log(msg.clientWidth)
        //     msg_section.appendChild(duplicat)
        //   let client_Width=msg.clientWidth
        // msg_section.style.transform(`translateX(${-client_Width * index}px)`)
    
        //         });
        let interval = "3000";
        let index = 0;
    
        const startmsg = () => {
          setInterval(() => {
            msg[index].ariaHidden = true;
            index++;
            msg_section.style.transform = `translateX(${-100 * index}vw)`;
            msg_section.style.transition = "0.7s";
            if (msg[msg.length - 1].ariaHidden === "true") {
              msg_section.style.transform = "none";
              index = 0;
              msg_section.style.transform = `translateX(${-100 * index}vw)`;
              msg.forEach((i) => {
                i.ariaHidden = false;
              });
            }
          }, interval);
        };
        startmsg();
      });

  return (
    <>
        <div className="mt-2 flex w-full items-center justify-start">
       
       <div className="flex w-full overflow-hidden  ">
         <ul
           className="flex relative justify-center w-max p-2"
           id="msg-section"
         >
           <li
             className="msg  w-[100vw] flex-col   text-base  items-center"
             aria-hidden="false"
           >
             <div className="flex flex-wrap justify-center items-center">
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
             aria-hidden="false"
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
             aria-hidden="false"
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
    </>
  )
}

export default AddSection
