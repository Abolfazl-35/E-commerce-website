import React, { useEffect, useState } from "react";
import TooltipFavorite from "../Tooltips/TooltipFavorite";
import TooltipDelete from "../Tooltips/TooltipDelete";


function BagCard(props) {
  const [bagstate, setbagstate] = useState();
  useEffect(() => {
    setbagstate(props.item);
  }, [props]);
  let { image, count, dec, price, selectedColor, selectedSize, type } =
    props.item;

  console.log(props);
  return (
    <>
      <div className="flex w-full">
        <div className="min-w-max h-[200px] w-[200px]">
          <img alt="" src={image} className="w-full h-full " />
        </div>
        <div className="flex p-2 flex-col justify-between w-full">
          <h1>{dec}</h1>
          <p className=" text-greyish-0">{type}</p>
          <p className="text-greyish-0">Size {selectedSize}</p>
          <p className=" text-greyish-0">{selectedColor} </p>
          <div className="flex w-full space-x-2 justify-start items-center">
            <span className="">Quantity </span>

            <select
              name="count"
              className="w-10"
              onChange={(event) =>
                props.addcount(event, props.item.id, props.item.selectedSize)
              }
              value={count}
            >
              <option defaultValue value={count}>
                {count}
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="flex items-center space-x-3 ">
             <TooltipFavorite />
          <TooltipDelete/>
          </div>
         
        </div>
        <p className=" font-bold p-2 mr-2 ">${price}</p>
      </div>
    </>
  );
}

export default BagCard;
