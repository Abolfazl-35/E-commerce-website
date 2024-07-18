import React, { useCallback, useEffect, useMemo } from "react";
import { createContext, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";
import AllShoesData from "../AllShoesData";
import JordanData from "../JordanShoesData";
import { json } from "react-router-dom";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [User, setUser] = useState(null);

  const [error, setError] = useState(null);

  const [isRegisterloading, setisRegisterloading] = useState(false);

  const [registerInfo, setRegisterinfo] = useState();

  const [loginInfo, setLoginInfo] = useState(null);

  const [isLoginloading, setIsLoginLoading] = useState(false);

  // Getting user from local storage and set the state
  useMemo(() => {
    const User = localStorage.getItem("User");

    setUser(JSON.parse(User));
  }, []);

  // Getting register info from singn in form
  const updateRegisterInfo = useCallback((info) => {
    setRegisterinfo(info);
  }, []);

  // update function for verify email
  const updateUser = useCallback((response) => {
    localStorage.setItem("User", JSON.stringify(response));
    setUser(response);
   
  }, []);

  // SENDING SIGNUP INFO TO DATABASE AND SERVER

  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();

      setisRegisterloading(true);
      setError(null);
      const response = await postRequest(
        `${baseUrl}/users/register`,
        JSON.stringify(registerInfo)
      );

      setisRegisterloading(false);

      if (response.error) {
        setisRegisterloading(false);
        setError(response);
        return setTimeout(() => {
          setError(null);
        }, 3000);
      }

      setisRegisterloading(false);
      localStorage.setItem("User", JSON.stringify(response));

      setUser(response);
    },
    [registerInfo]
  );

  // GETTING LOGIN INFO FROM LOGIN FORM AND SETTING LOGIN STATE

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);

  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();

      setIsLoginLoading(true);
      setError(null);
      const response = await postRequest(
        `${baseUrl}/users/login`,
        JSON.stringify(loginInfo)
      );

      setIsLoginLoading(false);

      if (response.error) {
        setIsLoginLoading(false);
        setError(response);
        return setTimeout(() => {
          setError(null);
        }, 3000);
      }

      setIsLoginLoading(false);

      localStorage.setItem("User", JSON.stringify(response));

      setUser(response);
    },
    [loginInfo]
  );



  const logoutUser = useCallback(() => {
    localStorage.removeItem("User");
    setUser(null);
  }, []);

  const [ShoesData, setShoesData] = useState(AllShoesData);

  function setJordan() {
    setShoesData((prevdata) => JordanData);
  }

  const [openDashboard, setOpenDashboard] = useState(false);
  const openDashboardf = () => {
    setOpenDashboard((prevdata) => {
      return !prevdata;
    });
  };

  const [Searchresult, setSearchresult] = useState({
    Search: "",
  });

  function HandleSearch(event) {
    const { name, value } = event.target;
    setSearchresult((prevdata) => {
      return { ...prevdata, [name]: value };
    });
    if (!value) return setShoesData(AllShoesData);
  }

  const [filterItem, setfilterItem] = useState([]);
  useEffect(() => {
    if (Searchresult.Search) {
      const resultArray = ShoesData.filter((i) => {
        return i.dec
          .toLowerCase()
          .replace(/ /g, "")
          .includes(Searchresult.Search.toLowerCase());
      });

      setfilterItem(resultArray.slice(1, 6));
    } else if (!Searchresult.Search) {
      setfilterItem([]);
    }
  }, [Searchresult.Search, Searchresult]);

  const [searchState, setsearchState] = useState(false);
  useEffect(() => {
    setsearchState(() => {
      if (Searchresult.Search) {
        return true;
      } else {
        return false;
      }
    });
  }, [Searchresult]);
  function openSearch(params) {
    setsearchState((prevdata) => {
      return true;
    });
  }
  function CloseSearch(params) {
    setSearchresult((prevdata) => {
      return { ...prevdata, Search: "" };
    });
  }

  // cart functions
  const [Cart, Setcart] = useState([]);
  useEffect(() => {
  const cart=localStorage.getItem("Cart")?localStorage.getItem("Cart"):null
  if (cart) {
      Setcart(JSON.parse(cart))
  }


},[])
  
  useEffect(() => {
    localStorage.setItem("Cart",JSON.stringify(Cart))

  
    
    },[Cart])


  function AddToCart(product) {
     localStorage.setItem("Cart",JSON.stringify(Cart)); 
    const NewProduct = Cart.find((i) => {
      return (
        i.selectedSize === product.selectedSize &&
        i.selectedColor === product.selectedColor
      );
    });
  
    if (NewProduct) {
      Setcart((prevdata) => {
        return Cart.map((i) => {
          return i.selectedSize === NewProduct.selectedSize &&
            i.selectedColor === product.selectedColor
            ? { ...NewProduct, count: NewProduct.count + 1 }
            : i;
        });
      });
    } else if (product.selectedSize) {
      Setcart([...Cart, { ...product, count: 1 }]);
    }
 
  }

  

  const [lastItemAdded, setlastItemAdded] = useState(null);
  useMemo(() => {
    return setlastItemAdded(() => {
      return Cart.slice(-1);
    });
  }, [Cart]);

  function removeitem(item) {
    console.log(item);
    const removedProduct = Cart.find((i) => {
      return (
        i.selectedColor === item.selectedColor &&
        i.selectedSize === item.selectedSize &&
        i.id === item.id
      );
    });
    Setcart(() => {
      return Cart.filter((i) => {
        return i !== removedProduct;
      });
    });
  }
  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    setCartLength(Cart.length);
  }, [Cart]);



  const [chatPageOpen, setChatPageOpen] = useState(false);

  function HandleChatPage() {
    setChatPageOpen((prevdata) => {
      return !prevdata;
    });
  }

  // FAvorite section functions And State

  const [favoriteProducts, setFavoriteProducts] = useState([]);
  useEffect(() => {
  

  const favorite = localStorage.getItem("favoriteProducts")?localStorage.getItem("favoriteProducts"):null
 if (favorite) {
   setFavoriteProducts(JSON.parse(favorite));
 }
 
    



}, []);
  useEffect(() => {
   
 

    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));


  }, [favoriteProducts]);






  
const HandleFavoriteProducts=useCallback((product)=>{
 
  try {
      const isexsist = favoriteProducts.some((i) => i.id === product.id);

  if (!isexsist) {
    setFavoriteProducts((prevdata) => {

      return [...prevdata, product] 
     
    })

  

    
  }
  } catch (error) {

  }
  finally{

  }



  


},[favoriteProducts])


function removeFvoriteProduct(product){
const removedproduct=favoriteProducts.find((i)=>{
  return i.id === product.id;
})
setFavoriteProducts((prevdata)=>{
  return favoriteProducts.filter((i)=>{
    return i!==removedproduct
  })
})

}




 

  return (
    <AuthContext.Provider
      value={{
        User,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        error,
        isRegisterloading,
        updateUser,
        openDashboardf,
        openDashboard,
        Searchresult,
        searchState,
        openSearch,
        HandleSearch,
        CloseSearch,
        filterItem,
        AddToCart,
        Cart,
        lastItemAdded,
        removeitem,
        Setcart,
        cartLength,
        logoutUser,
        updateLoginInfo,
        loginUser,
        isLoginloading,
        HandleChatPage,
        chatPageOpen,
        ShoesData,
        setJordan,
        setShoesData,
        favoriteProducts,
        HandleFavoriteProducts,
        removeFvoriteProduct
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
