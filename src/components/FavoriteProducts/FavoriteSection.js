import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import FavoriteCard from "./FavoriteCard";
import Favoritecss from "./Favorite.css";
const FavoriteSection = () => {
  const { HandleFavoriteProducts, favoriteProducts } = useContext(AuthContext);

  const FavoriteCards = favoriteProducts.map((i) => {
    return <FavoriteCard key={i.id} item={i} />;
  });


  return (
    <div className=" bg-slate-100 p-3 h-[100vh]">
      <div className="p-3 font-Roboto  border container mx-auto rounded">
        <h1 className="mb-3 text-lg w-full border-b bg-transparent p-3 rounded">
          Your Favorite Products ({favoriteProducts.length})
        </h1>
        {favoriteProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-2  w-full h-full">
            {FavoriteCards}
          </div>
        ) : (
          <div className="flex w-full justify-center items-center p-5">
            <h2>Your Fvaorite products is Empty</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteSection;
