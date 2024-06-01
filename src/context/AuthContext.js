import React, { useCallback, useEffect, useMemo } from "react";
import { createContext, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";
import AllShoesData from "../AllShoesData";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [error, setError] = useState(null);

  const [isRegisterloading, setisRegisterloading] = useState(false);

 const [registerInfo, setRegisterinfo] = useState();

const [loginInfo,setLoginInfo]=useState(null);

const [isLoginloading, setIsLoginLoading] = useState(false);

// Getting user from local storage and set the state
useEffect(() => {
const user=localStorage.getItem("User");

setUser(JSON.parse(user));
},[])

// Getting register info from singn in form
  const updateRegisterInfo = useCallback((info) => {
    setRegisterinfo(info);
  }, []);

  // update function for verify email
  const updateUser=useCallback((response) => {
  localStorage.setItem("User", JSON.stringify(response));
  setUser(response)
  console.log(response)

  },[])

// SENDING SIGNUP INFO TO DATABASE AND SERVER

  const registerUser = useCallback(async (e) => {
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
     return setTimeout(()=>{
setError(null)
     },3000)
    }
  
setisRegisterloading(false);
       localStorage.setItem("User", JSON.stringify(response));
  
setUser(response);

  }, [registerInfo]);


// GETTING LOGIN INFO FROM LOGIN FORM AND SETTING LOGIN STATE

const updateLoginInfo=useCallback((info) => {
setLoginInfo(info);

},[])

const loginUser=useCallback(async (e) => {
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
   return setTimeout(()=>{
setError(null)
   },3000)
  }

  setIsLoginLoading(false);
  console.log(response)
     localStorage.setItem("User", JSON.stringify(response));

setUser(response);

},[loginInfo])



const logoutUser=useCallback(()=>{
localStorage.removeItem("User");
setUser(null);




},[])




  const [openDashboard,setOpenDashboard]=useState(false);
  const openDashboardf =()=>{
  setOpenDashboard((prevdata)=>{
    return !prevdata
  })
  }
  const [ShoesData, setShoesData] = useState(AllShoesData);

  const[Searchresult,setSearchresult]=useState({
    Search:""
  })



  function HandleSearch(event) {
    const {name,value}=event.target
        setSearchresult((prevdata)=>{
        return {...prevdata,[name]:value}
         })
    if (!value) return setShoesData(AllShoesData)

  }

const [filterItem,setfilterItem]=useState([])
  useEffect(()=>{
    if (Searchresult.Search) {
      const resultArray=ShoesData.filter((i)=>{
    return i.dec.toLowerCase().replace(
      / /g,
      ""
  ).includes(Searchresult.Search.toLowerCase())
     })

     setfilterItem(resultArray.slice(1,6))
    }else if (!Searchresult.Search) {
      setfilterItem([])
    }
 
    



    },[Searchresult.Search,Searchresult])

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
      setSearchresult((prevdata)=>{
        return{...prevdata,Search:""}
      })
    }


    const [Cart, Setcart] = useState([]);

    function AddToCart(product) {
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
      }}

      const [lastItemAdded,setlastItemAdded] = useState(null);
useMemo(()=>{
  return setlastItemAdded(()=>{
    return Cart.slice(-1)
  })
},[Cart])

function removeitem(item) {
console.log(item)
  const removedProduct = Cart.find((i) => {
    return (
      i.selectedColor === item.selectedColor 
      && i.selectedSize===item.selectedSize
      && i.id===item.id
     
    )
  })
  Setcart(()=>{
    return Cart.filter((i)=>{
      return i!==removedProduct
    })
  })
}
const [cartLength,setCartLength]=useState(0)
useEffect(()=>{
  setCartLength(Cart.length)
},[Cart])


const [chatPageOpen,setChatPageOpen] = useState(false)

function HandleChatPage() {
 setChatPageOpen((prevdata)=>{
  return !prevdata
 })
}
console.log(chatPageOpen)
  return (
    <AuthContext.Provider
      value={{ user,
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
          Setcart,cartLength,
          logoutUser,updateLoginInfo,loginUser,
          isLoginloading,
        HandleChatPage,chatPageOpen
        }}
    >
      {children}
    </AuthContext.Provider>
  );
};
