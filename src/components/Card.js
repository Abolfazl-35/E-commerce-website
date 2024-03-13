import React, { useEffect, useRef } from "react";
import Cardcss from "./Card.css";
import ShoesData from "../JordanShoesData";
import img from "../images/shoes/Airmax/airmax-1.webp";
import { useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  let { images } = props.item;
  // console.log(images[0].image);
  useEffect(() => {
    const product_dec = document.querySelectorAll(".product-dec");

    const product_dec_inner_2 = document.querySelectorAll(
      ".product-dec-inner-2"
    );
    const product_dec_inner_1 = document.querySelectorAll(
      ".product-dec-inner-1"
    );
    product_dec.forEach((i) => {
      i.addEventListener("mouseenter", (e) => {
        i.firstChild.nextSibling.classList.add("is_hover");
        i.firstChild.classList.add("not_show");
      });

      i.addEventListener("mouseleave", (e) => {
        i.firstChild.nextSibling.classList.remove("is_hover");
        i.firstChild.classList.remove("not_show");
      });
    });
  });
  let imagesIn = useRef();
imagesIn.current=images.map((i)=>{
  if (i) {
    return i.image
  }
})

  // imagesIn.current=images.map((i)=>{
  //   console.log(i)
  // })

  const [imgIndex, setimgIndex] = useState(0);

  // console.log(imagesIn.current);
  //   const product_dec = document.querySelectorAll(".product-dec");

  //   const product_dec_inner_2 = document.querySelectorAll(".product-dec-inner-2");
  //   const product_dec_inner_1 = document.querySelectorAll(".product-dec-inner-1");

  // function Handler(params) {
  //   product_dec.forEach((i)=>{
  // i.firstChild.nextSibling.classList.add("is_hover");
  // i.firstChild.classList.add("not_show")
  //   })

  // }
  function imageIndexf(index) {
    setimgIndex(() => {
      return index;
    });
  }
  let color = [];

  Object.values(props.item.images).map((i) => {
    if (i !== "") {
      return color.push(i);
    } else return true;
  });

  console.log();
  return (
    <>
      <div className="card rounded flex-col w-full border-2 h-max  shadow-lg ">
        <div className="h-[460px] rounded   ">
          <Link to="./product">
            <img
              className="h-full w-full rounded object-cover "
              src={images[imgIndex].image}
              alt="productimage"
              loading="lazy"
              onClick={() => props.HandleProduct(props.item)}
            />
          </Link>
        </div>
        <div
          className="product-dec  relative    text-sm flex h-max space-y-4 w-full flex-col items-start rounded bg-zinc-400 "
          data-attribute="false"
        >
          <div className="product-dec-inner-1 w-full font-serif flex flex-col  text-lg space-y-2  ">
            <span className="w-full rounded bg-zinc-900">
              <h1 className="card-brand animate-gradient font-Roboto text-base  tracking-wide    w-full rounded p-2">
                <strong>{props.item.name}</strong>
              </h1>
            </span>
            <h2 className="w-full p-2  text-zinc-800">
              <strong>Brand:{props.item.brand}</strong>
            </h2>
            <p className="w-full p-2 text-gray-600">{props.item.dec}</p>

            <p className="w-full flex p-2 text-gray-600"><span className="">{images.length}</span> <span className="mt-[.2rem] ml-1">Color</span></p>
          </div>
          <div className="product-dec-inner-2 flex flex-col w-full max-h-max  gap-2   p-1">
            <div>
              <p className=" font-serif text-green-800 text-base font-semibold">
                Best Seller
              </p>
            </div>
            <div className="flex gap-1">

              <img
                className=" cursor-pointer object-contain justify-self-start rounded"
                src={images[0].image}
                alt=""
                width="50"
                onMouseEnter={() => imageIndexf(0)}
              />
              {imagesIn.current[1] && (
       <img
                className=" cursor-pointer justify-self-start rounded"
                src={imagesIn.current[1]}
                alt=""
                width="50"
                onMouseEnter={() => imageIndexf(1)}
              />

              )}
       {imagesIn[2] &&(
   <img
                className=" cursor-pointer justify-self-start rounded"
                src={imagesIn[2]}
                alt=""
                width="50"
                onMouseEnter={() => imageIndexf(2)}
              />

       )}
           
            </div>
          </div>
          <div className="flex pb-2 pl-2  text-lg font-Oswald tracking-wider ">
            <p className="price w-full p-1   ">{props.item.price}$</p>
          </div>
        </div>
        <Link to="/Product" >
        <button
          className="w-full bg-slate-200 p-1 text-center font-serif text-slate-950 hover:bg-slate-950 hover:text-slate-200"
          onClick={() => props.HandleProduct(props.item)}
        >

          ADD To Cart
        </button>
        </Link>
        
       
      </div>
    </>
  );
}

export default Card;
