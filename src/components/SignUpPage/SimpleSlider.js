import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MemberShipCss from "../SignUpPage/MemberShipSection.css";
import MemberShipData from "../../MembershipBenefitData";
import MemberBenefitCard from "./MemberBenefitCard";

function DynamicSlides() {
  const [slides, setSlides] = useState(MemberShipData);
  const handleClick = () => {
    setSlides(
      slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
    );
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <i
        className="prev-btn bi bi-arrow-right-circle-fill opacity-0 sm:opacity-100 pointer-events-none sm:pointer-events-auto "
        style={{
          ...style,
          position: "absolute",
          top: "-10%",
          left: "95%",
          fontSize: "2rem",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <i
        className="prev-btn bi bi-arrow-left-circle-fill opacity-0 sm:opacity-100 pointer-events-none sm:pointer-events-auto "
        style={{
          ...style,
          position: "absolute",
          top: "-10%",
          left: "90%",
          fontSize: "2rem",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-auto overflow-hidden  h-full mb-10     ">
     
      <div className="mt-16    ">
        <Slider {...settings}>
          {slides.map((slide) => {
            return (
              <div
                key={slide}
                className="card-item relative p-2       "
              >
               <div className="w-full">

              
                <img
                  alt="Membershipimage"
                  src={slide.image}
                  className="w-full max-w-full max-h-[500px] h-[500px] "
                /> 
                 </div>
                
                <div className="membership-benefits  flex  flex-col space-y-5 justify-center items-start sm:items-center">
                  <p className="w-full tex font-medium text-wrap text-white text-lg  md:text-2xl font-Oswald tracking-wider">
                    {slide.description}
                  </p>
                  <h1 className="w-full text-wrap font-semibold text-lg sm:text-xl md:text-2xl text-white font-Oswald tracking-wider">
                    {slide.description_2}
                  </h1>
                  <button className=" w-max bg-slate-100 pr-2 pl-2 pb-2 pt-1 rounded-full text-xl font-medium hover:bg-slate-500">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default DynamicSlides;
