import React, { useContext, useEffect } from "react";
import { useState, useRef, useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Section from "./components/Section";
// import ShopHeader from "./components/ShopHeader";
// import ShoesMenu from "./components/ShoesMenu";
// import SignIn from "./components/SignInPage/SignIn";
// import SignUp from "./components/SignUpPage/AddSection";
// import Header from "./components/SignUpPage/Header";
// import VideoSection from "./components/SignUpPage/VideoSection";
// import SimpleSlider from "./components/SignUpPage/SimpleSlider";
// import Product from "./components/SingleproductComponents/Product";
// import SignInForm from "./components/SignInPage/SignInForm";
import classNames from "classnames";
// import Bag from "./components/Bag/Bag";
import VerifyEmail from "./components/SignInPage/VerifyEmail";
import { AuthContext } from "./context/AuthContext";
// import Footer from "./components/Footer";
// import Login from "./components/LoginPage/Login";
// import SendVerify from "./components/SignInPage/SendVerify";
import Chat from "./components/Chat/Chat";
import MainChat from "./components/Chat/MainChat";
import { ChatContextProvider } from "./context/ChatContext";

const LazySection=React.lazy(() =>import("./components/Section"))

const LazyFooter=React.lazy(() =>import("./components/Footer"))

const LazyMain=React.lazy(() =>import("./components/Main"))

const LazyShopHeader=React.lazy(() =>import("./components/ShopHeader"))

const LazyShoesMenu=React.lazy(() =>import("./components/ShoesMenu"))

const LazySignUp =React.lazy(() =>import("./components/SignUpPage/AddSection"))

const LazyHeader=React.lazy(() =>import("./components/SignUpPage/Header"))

const LazyVideoSection=React.lazy(() =>import("./components/SignUpPage/VideoSection"))

const LazySimpleSlider=React.lazy(() =>import("./components/SignUpPage/SimpleSlider"))

const LazyProduct=React.lazy(() =>import("./components/SingleproductComponents/Product"))

const LazySignInForm =React.lazy(() =>import("./components/SignInPage/SignInForm"))

const LazySignIn =React.lazy(() =>import("./components/SignInPage/SignIn"))

const LazyBag =React.lazy(() =>import("./components/Bag/Bag"))

const LazySendVerify =React.lazy(() =>import("./components/SignInPage/SendVerify"))

const LazyChat =React.lazy(() =>import("./components/Chat/Chat"))

const LazyMainChat =React.lazy(() =>import("./components/Chat/MainChat"))

const LazyLogin =React.lazy(() =>import("./components/LoginPage/Login"))


function App() {
  const { User,ShoesData,setJordan,setShoesData } = useContext(AuthContext);

  const [sortbyprice, setsort] = useState([
    { sorted: "price", reversed: false },
  ]);


  // function changeimage(id, newimage) {
  //   console.log(newimage);
  //   const copyData = [...ShoesData];
  //   setShoesData((prevdata) => {
  //     return copyData.map((data) => {
  //       return data.id === id
  //         ? { ...data, images: { ...data.images, mainimg: newimage } }
  //         : data;
  //     });
  //   });
  // }

  function PriceHighLow() {
    const copyitems = [...ShoesData];
    setsort({ sortbyprice: "price", reversed: !sortbyprice.reversed });
    ShoesData.sort((a, b) => {
      if (sortbyprice.reversed) {
        return b.price - a.price;
      }
      return b.price - a.price;
    });

    setShoesData(ShoesData);
  }
  function PriceLowHigh() {
    const copyitems = [...ShoesData];
    setsort({ sortbyprice: "price", reversed: !sortbyprice.reversed });
    ShoesData.sort((a, b) => {
      if (sortbyprice.reversed) {
        return a.price - b.price;
      }
      return a.price - b.price;
    });
    setShoesData(ShoesData);
  }

  // const [Cart, Setcart] = useState([]);

  // function AddToCart(product) {
  //  const NewProduct = Cart.find((i) => {
  //     return (
  //       i.selectedSize === product.selectedSize &&
  //       i.selectedColor === product.selectedColor
  //     );
  //   });

  //   if (NewProduct) {
  //     Setcart((prevdata) => {
  //       return Cart.map((i) => {
  //         return i.selectedSize === NewProduct.selectedSize &&
  //           i.selectedColor === product.selectedColor
  //           ? { ...NewProduct, count: NewProduct.count + 1 }
  //           : i;
  //       });
  //     });
  //   } else if (product.selectedSize) {
  //     Setcart([...Cart, { ...product, count: 1 }]);
  //   }
  //   // const Basket={...NewProduct}
  // }

  const [MiniBagState, setMiniBag] = useState(false);

  function MiniBag(item) {
    if (item.selectedSize && item.selectedColor) {
      setMiniBag((prevdata) => {
        return true;
      });
      setTimeout(() => {
        setMiniBag((prevdata) => {
          return false;
        });
      }, "3000");
    }
  }

  const [product, setproduct] = useState([]);
  function HandleProduct(newProduct) {
    setproduct((prevdat) => newProduct);
  }

  const [EmailData, setEmailData] = useState({ Email: "" });

  function HandleEmail(event) {
    console.log(event);
    setEmailData((prevformdata) => {
      return { ...prevformdata, [event.target.name]: event.target.value };
    });
  }

  // const searchkeys=["dec","brand","name"]

  //   const search=(data)=>{
  //     return data.filter((i)=>{
  //       return searchkeys.some((item)=>{
  //         return i[item].toLowerCase().trim().replace(" ","").includes(Searchresult.Search.trim().replace(" ","").toLowerCase())
  //       })

  //     })

  //   }

  console.log("app render");

  return (
    <ChatContextProvider User={User}>
    
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Chat />
                <MainChat/>
                <Navbar MiniBagState={MiniBagState} />
                {/* <MainChat/> */}
               <React.Suspense fallback="Loading"><LazyShoesMenu /></React.Suspense> 
                <React.Suspense fallback="Loading"><LazyMain/></React.Suspense>
                <React.Suspense fallback="Loading"><LazyShopHeader /></React.Suspense>   
                <React.Suspense fallback="Loading"><LazySection
                  // Handleclick={AddToCart}
                  data={ShoesData}
                  // HandleImage={changeimage}
                  HandlePriceHigh={PriceHighLow}
                  HandlePriceLow={PriceLowHigh}
                  Handleset={setJordan}
                  HandleMiniBag={MiniBag}
                  HandleProduct={HandleProduct}
                /></React.Suspense>   

            <React.Suspense><LazyFooter /></React.Suspense>    
              </>
            }
          />

          <Route
            path="/SignUp"
            element={
              <>
                <Navbar MiniBagState={MiniBagState} />
                <React.Suspense fallback="Loading"><LazySignUp /></React.Suspense>    
                <React.Suspense fallback="Loading"> <LazyHeader /></React.Suspense>  
                <React.Suspense fallback="Loading"> <LazyVideoSection/></React.Suspense>    
                {/* <MemberBenefitsSection/> */}
                <React.Suspense><LazySimpleSlider/></React.Suspense>   
                <React.Suspense fallback="Loading"> <LazyFooter/></React.Suspense>    

              </>
            }
          />

          <Route
            path="/SignIn"
            element={
              !User ? (
              <React.Suspense fallback="Loading"><LazySignIn HandleEmail={HandleEmail} EmailData={EmailData} /></React.Suspense>
              ) : null
            }
          />
          <Route
            path="/SignInForm"
            element={
              <>
             <React.Suspense fallback="Loading"><LazySignInForm EmailData={EmailData} /></React.Suspense>  
             
              </>
            }
          />
          <Route
            path="/verify-email"
            element={
              <>
                <VerifyEmail EmailData={EmailData} />
              </>
            }
          />

          <Route path="/login" element={<React.Suspense><LazyLogin/></React.Suspense>} />

          <Route path="/send-verify" element={<React.Suspense><LazySendVerify /></React.Suspense>} />

          <Route
            path="/Product/:id"
            element={
              <>
                <Navbar MiniBagState={MiniBagState} />
                <React.Suspense fallback="Loading"><LazyProduct HandleMiniBag={MiniBag} item={product} /></React.Suspense>    
                
              </>
            }
          />
          <Route
            path="/Bag"
            element={
              <>
                <Navbar MiniBagState={MiniBagState} />
                <React.Suspense><LazyBag /></React.Suspense>
                
              </>
            }
          />
        </Routes>
      </Router>
  
    </ChatContextProvider>
  );
}

export default App;
