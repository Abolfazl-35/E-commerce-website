import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function MiniCard(filtereditems) {
  const { CloseSearch } = useContext(AuthContext);
  return (
    <>
      <div className="w-full h-max ">
        <Link to={`/product/${filtereditems.data.id}`}>
          <div onClick={CloseSearch}>
            <img
              alt="searchitem"
              src={filtereditems.data.images[0].image}
              className="w-full cursor-pointer h-[380px] rounded-lg"
              loading="lazy"
            />
          </div>
        </Link>

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
