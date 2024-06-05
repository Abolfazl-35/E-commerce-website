import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
    <div className=" font-Roboto border-t ">
      <div className=" top-0  p-3">
        <div className="flex    flex-col justify-start items-start  min-w-full space-y-3 sm:space-y-0 sm:flex-row  relative  p-4   ">
          <div className=" relative   ">
          <h1 className="  p-2 block sm:absolute text-base text-nowrap  xs:text-2xl  font-semibold">
           Trust MemberShip
          </h1>
          </div>
          <div className="signup-link flex w-full   justify-start sm:justify-center">
            <Link to="/SignIn" className="w-max   p-2  text-base xs:text-2xl text-start font-semibold ">SignUp</Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Header;
