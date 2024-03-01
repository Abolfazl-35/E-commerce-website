import React from "react";
import { Link } from "react-router-dom";
import Headercss from "../SignUpPage/Header.css"
function Header() {
  return (
    <>
    <div className="">
      <div className=" top-0  p-3">
        <div className="flex    flex-col justify-start items-start  min-w-full space-y-3 sm:space-y-0 sm:flex-row  relative  p-4   ">
          <div className="w-max relative   ">
          <h1 className="w-max font-Oswald tracking-wider p-2 block sm:absolute text-base  xs:text-4xl  font-semibold">
            Nike MemberShip
          </h1>
          </div>
          <div className="signup-link flex w-full   justify-start sm:justify-center">
            <Link className="w-max font-Oswald tracking-wider p-2  text-base xs:text-4xl text-start font-semibold ">SignUp</Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Header;
