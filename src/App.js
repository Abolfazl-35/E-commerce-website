import React, { useContext, useEffect } from "react";
import { useState, useRef,useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Section from "./components/Section";
import ShopHeader from "./components/ShopHeader";
import ShoesMenu from "./components/ShoesMenu";
import SignIn from "./components/SignInPage/SignIn";
import SignUp from "./components/SignUpPage/AddSection";
import airmaxData from "./AirMaxShoesData";
import AllShoesData from "./AllShoesData";
import JordanData from "./JordanShoesData";
import Header from "./components/SignUpPage/Header";
import VideoSection from "./components/SignUpPage/VideoSection";
import SimpleSlider from "./components/SignUpPage/SimpleSlider";
import Product from "./components/SingleproductComponents/Product";
import SignInForm from "./components/SignInPage/SignInForm";
import classNames from "classnames";
import Bag from "./components/Bag/Bag";
import VerifyEmail from "./components/SignInPage/VerifyEmail"
import { AuthContext } from "./context/AuthContext";
import Footer from "./components/Footer";
import Login from "./components/LoginPage/Login";
import SendVerify from "./components/SignInPage/SendVerify";
// import MainChat from "./components/ChatPage/MainChat";
function App() {
  const {user}=useContext(AuthContext)
  const [ShoesData, setShoesData] = useState(AllShoesData);

  const [sortbyprice, setsort] = useState([{ sorted: "price", reversed: false }]);
  function setJordan() {
    setShoesData((prevdata) => JordanData);
  }

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
    <div className={classNames("")}>
      <Router>
        <Routes>
          <Route path="/"
            
            element={
              <>
                <Navbar
                 
                  MiniBagState={MiniBagState}
                />
                {/* <MainChat/> */}
                <ShoesMenu />
                <Main />
                <ShopHeader />
                <Section
                
                  // Handleclick={AddToCart}
                  data={ShoesData}
                  // HandleImage={changeimage}
                  HandlePriceHigh={PriceHighLow}
                  HandlePriceLow={PriceLowHigh}
                  Handleset={setJordan}
                  HandleMiniBag={MiniBag}
                  HandleProduct={HandleProduct}
                />
                <Footer/>
              </>
            }
          />

          <Route path="/SignUp"
           
            element={
              <>
                <Navbar  
                  
                  MiniBagState={MiniBagState}
                  />
                <SignUp />
                <Header />
                <VideoSection />
                {/* <MemberBenefitsSection/> */}
                <SimpleSlider />
              </>
            }
          />

          <Route path="/SignIn"
            
            element={!user?<SignIn HandleEmail={HandleEmail} EmailData={EmailData} />:null}
          />
          <Route path="/SignInForm"
            
            element={<><SignInForm EmailData={EmailData} />
            
            </>}
          />
          <Route path="/verify-email"
            
            element={<>
 
 <VerifyEmail EmailData={EmailData} />
</>
          } />
         
             <Route path="/login"
            
            element={<Login  />}  />
        
        <Route path="/send-verify"
            
            element={<SendVerify  />}  />

          <Route path="/Product/:id"
            
            element={
              <>
                <Navbar  
                 
                  MiniBagState={MiniBagState}
                />
                <Product
                 HandleMiniBag={MiniBag}
                  item={product}
              
                />
              </>
            }
          />
          <Route
          path="/Bag"
          element={<>
          <Navbar 
                  
                  MiniBagState={MiniBagState}
                 />

           <Bag 
           />
           </>
        }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
