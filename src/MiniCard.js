import React from "react";

function MiniCard(filtereditems) {
  return (
    <>
      <div className="w-full h-max ">
        <div>
          <img
            alt="searchitem"
            src={filtereditems.data.images[0].image}
            className="w-full h-[380px] rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col space-y-2 mt-1">
          <h1 className=" text-sm sm:text-base">{filtereditems.data.dec}</h1>
          <p className="text-sm sm:text-base text-greyish-0">
            {filtereditems.data.name}
          </p>
          <p>{filtereditems.data.price}$</p>
        </div>
      </div>
    </>
  );
}

export default MiniCard;
