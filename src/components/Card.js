import React, { useEffect, useRef } from "react";
import Cardcss from "./Card.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  let { images } = props.item;

  let imagesIn = useRef();
imagesIn.current=images.map((i)=>{
  if (i) {
    return i.image
  }else return null
})


  const [imgIndex, setimgIndex] = useState(0);


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


  return (
    <> 
    <Link to={`/product/${props.item.id}`}>

      <div className="card w-full rounded flex-col items-center sm:justify-self-center   border-2 h-max   shadow-lg ">
        <div className="md:[w-full]  rounded   ">
            <img
              className="h-[340px] sm:h-[440px] max-w-full w-full rounded object-cover "
              src={images[imgIndex].image}
              alt="productimage"
              loading="lazy"
            />
        
        </div>
        <div
          className="product-dec  relative    text-sm flex   h-max space-y-4 w-full flex-col items-start rounded bg-zinc-400 "
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

        
       
      </div>
      </Link>
    </>
  );
}

export default Card;
