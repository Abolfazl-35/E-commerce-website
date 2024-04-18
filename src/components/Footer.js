import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <>
      <div className=" grid grid-cols-1  md:grid-cols-4 lg:grid-cols-5 justify-center text-sm items-center font-Roboto p-4 bg-slate-950  gap-3 text-white">
        <div className=" font-semibold p-2 space-y-4">
          <h2>RESOURCES</h2>
          <h2>GIFT CARDS</h2>
          <h2>FIND A SRORE</h2>
          <h2>BECOME A MEMBER</h2>
          <h2>TRSUST X NBA</h2>
          <h2>TRUST JOURNAL</h2>
          <h2>Site Feedback</h2>
        </div>
        <div className="p-2 space-y-5 border-t md:border-none pt-4 md:pt-2">
          <h1 className="font-semibold"> Help</h1>
          <div className="space-y-5 text-greyish-0 text-xs">
            <h2>get Help</h2>
            <h2>FIND A SRORE</h2>
            <h2>BECOME A MEMBER</h2>
            <h2>TRSUST X NBA</h2>
            <h2>TRUST JOURNAL</h2>
            <h2>Site Feedback</h2>
          </div>
        </div>
        <div className="space-y-5 p-2 border-t md:border-none pt-4 md:pt-2">
          <h1 className="font-semibold">COMPANY</h1>
          <div className="space-y-5 text-greyish-0 text-xs">
            <h2>GIFT CARDS</h2>
            <h2>FIND A SRORE</h2>
            <h2>BECOME A MEMBER</h2>
            <h2>TRSUST X NBA</h2>
            <h2>TRUST JOURNAL</h2>
            <h2>Site Feedback</h2>
          </div>
        </div>
        <div className="p-2 space-y-5 md:order-5 lg:order-4 border-t md:border-none pt-4 md:pt-2">
          <h1 className=" font-semibold">PROMOTIONS & DISCOUNTS</h1>
          <div className="space-y-5 text-greyish-0  text-xs">
            <h2>GIFT CARDS</h2>
            <h2>FIND A SRORE</h2>
            <h2>BECOME A MEMBER</h2>
            <h2>TRSUST X NBA</h2>
            <h2>TRUST JOURNAL</h2>
            <h2>Site Feedback</h2>
          </div>
        </div>
        <div className="flex p-2 items-start md:order-4 lg:order-5  justify-between h-full pt-4 md:pt-2 ">
          <TwitterIcon fontSize="large" />
          <FacebookIcon fontSize="large" />
          <YouTubeIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
        </div>
      </div>
    </>
  );
}

export default Footer;
