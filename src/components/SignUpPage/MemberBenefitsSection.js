import React, { useState } from "react";
import MemberBenefitCard from "./MemberBenefitCard";

import Slider from "react-slick";
import MemberShipCss from "../SignUpPage/MemberShipSection.css";
import MemberShipData from "../../MembershipBenefitData";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { toBeEnabled } from "@testing-library/jest-dom/matchers";
import { DisabledByDefault } from "@mui/icons-material";



function MemberBenefitsSection() {
  let [MemberShipCard, setMemberShipCard] = useState(MemberShipData);
  let [activeindex, setactiveindex] = useState(0);
  let [windowwidth, setwindowwidth] = useState(window.innerWidth);


  

















  


  function UpdateIndex(newactiveindex) {
    console.log(newactiveindex);
    if (newactiveindex < 0) {
      newactiveindex = 0;
    } else if (newactiveindex > 0) {
    }

    setactiveindex(newactiveindex);
  }
  const disableBtnProps = {};
  if (activeindex >= 4 && windowwidth < 640) {
    disableBtnProps.disabled = true;
  } else if (activeindex >= 3 && windowwidth > 640) {
    disableBtnProps.disabled = true;
  } else if (activeindex >= 2 && windowwidth > 950) {
    disableBtnProps.disabled = true;
  } else {
    disableBtnProps.disabled = false;
  }

  return (
    <>
      <div className="p-4 pr-0 mt-[84px] ml-[24px] ">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl  font-semibold font-Oswald text-black">
            Member Benefits
          </h1>

          <div className="flex  space-x-6 pr-3">
            {activeindex === 0 && (
              <button
                className=""
                onClick={() => {
                  UpdateIndex(activeindex - 1);
                }}
                disabled
              >
                <i class="bi bi-arrow-left-circle text-3xl"></i>
              </button>
            )}

            {activeindex > 0 && (
              <button
                className=" "
                onClick={() => {
                  UpdateIndex(activeindex - 1);
                }}
              >
                <i class="bi bi-arrow-left-circle-fill text-3xl"></i>
              </button>
            )}
            {activeindex < 4 && (
              <button
                onClick={() => {
                  UpdateIndex(activeindex + 1);
                }}
                {...disableBtnProps}
              >
                <i class="bi bi-arrow-right-circle-fill text-3xl"></i>
              </button>
            )}

            {activeindex >= 4 && (
              <button
                onClick={() => {
                  UpdateIndex(activeindex + 1);
                }}
                className="next-btn"
                {...disableBtnProps}
              >
                <i class="bi bi-arrow-right-circle text-3xl"></i>
              </button>
            )}
          </div>
        </div>
        <div className="flex  mt-4 w-full overflow-hidden pr-0">
          <ul
            className="w-max p-2  flex space-x-2  "
            id="members-section"
            style={{
              transform: `translateX(-${activeindex * 400}px)`,
              transition: ".5s",
            }}
          >

            {/* <li className=" relative w-max">
              <img
                alt="Membershipimage"
                src={MemberShipData[0].image}
                width={380}
                className="min-w-[380px] max-w-[380px]"
              />
              <div className="membership-benefits flex  flex-col space-y-5 justify-center items-center">
                <p className="w-max font-medium text-white text-2xl font-Oswald tracking-wider">
                  Member Product
                </p>
                <h1 className="w-max font-semibold text-3xl text-white font-Oswald tracking-wider">
                  Your Exlusive Access
                </h1>
                <button className=" w-max bg-slate-100 p-3 rounded-full text-xl font-medium hover:bg-slate-500">
                  Shop
                </button>
              </div>
            </li>
            <li className="relative w-max">
              <img
                alt="Membershipimage"
                src={MemberShipData[1].image}
                width={380}
                className="min-w-[380px]  max-w-[380px]"
              />
              <div className="membership-benefits flex  flex-col space-y-5 justify-center items-center">
                <p className="w-max font-medium text-white text-2xl font-Oswald tracking-wider">
                  Sports & Wellness Apps
                </p>
                <h1 className="w-max font-semibold text-3xl text-white font-Oswald tracking-wider">
                  Movement Wher You're At
                </h1>
                <button className=" w-max bg-slate-100 p-3 rounded-full text-xl font-medium hover:bg-slate-500">
                  Move
                </button>
              </div>
            </li>
            <li className="relative w-max">
              <img
                alt="Membershipimage"
                src={MemberShipData[2].image}
                width={380}
                className="min-w-[380px] max-w-[380px]"
              />
              <div className="membership-benefits flex  flex-col space-y-5 justify-center items-center">
                <p className="w-max font-medium text-white text-2xl font-Oswald tracking-wider">
                  Member Rewards
                </p>
                <h1 className="w-max font-semibold text-3xl text-white font-Oswald tracking-wider">
                  How We Say Thank You
                </h1>
                <button className=" w-max bg-slate-100 p-3 rounded-full text-xl font-medium hover:bg-slate-500">
                  Celebrate
                </button>
              </div>
            </li>
            <li className="relative w-max">
              <img
                alt="Membershipimage"
                src={MemberShipData[3].image}
                width={380}
                className="min-w-[380px] max-w-[380px]"
              />
              <div className="membership-benefits flex  flex-col space-y-5 justify-center items-center">
                <p className="w-max font-medium text-white text-2xl font-Oswald tracking-wider">
                  Nike By You
                </p>
                <h1 className="w-max font-semibold text-3xl text-white font-Oswald tracking-wider">
                  Your Customization Service
                </h1>
                <button className=" w-max bg-slate-100 p-3 rounded-full text-xl font-medium hover:bg-slate-500">
                  Explore
                </button>
              </div>
            </li>
            <li className="relative w-max">
              <img
                alt="Membershipimage"
                src={MemberShipData[3].image}
                width={380}
                className="min-w-[380px] max-w-[380px]"
              />
              <div className="membership-benefits flex  flex-col space-y-5 justify-center items-center">
                <p className="w-max font-medium text-white text-2xl font-Oswald tracking-wider">
                  SNKRS
                </p>
                <h1 className="w-max font-semibold text-3xl text-white font-Oswald tracking-wider">
                  Your Ultimate Sneaker Community
                </h1>
                <button className=" w-max bg-slate-100 p-3 rounded-full text-xl font-medium hover:bg-slate-500">
                  Celebrate
                </button>
              </div>
          </li> */}
          
          </ul>
        </div>
      </div>
    </>
  );
}

export default MemberBenefitsSection;
