import React from "react";
import { useState } from "react";
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
import MemberBenefitsSection from "./components/SignUpPage/MemberBenefitsSection";
import Slider from "react-slick";
import SimpleSlider from "./components/SignUpPage/SimpleSlider";
import Product from "./components/Product";
import SignInForm from "./components/SignInPage/SignInForm";

function App() {
  let [ShoesData, setShoesData] = useState(AllShoesData);



  let [sortbyprice, setsort] = useState([{ sorted: "price", reversed: false }]);
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

  let [Cart, Setcart] = useState([]);

  const AddToCart = (Product) => {
    const NewProduct = Cart.find((i) => {
      return i.id === Product.id;
    });
    console.log(NewProduct);
    if (NewProduct) {
      Setcart((prevdata) => {
        return Cart.map((i) => {
          return i.id === NewProduct.id
            ? { ...NewProduct, count: NewProduct.count + 1 }
            : i;
        });
      });
    } else {
      Setcart([...Cart, { ...Product, count: 1 }]);
    }
    // const Basket={...NewProduct}
  };

  const [MiniBagState, setMiniBag] = useState(false);

  function MiniBag(params) {
    setMiniBag((prevdata) => {
      return true;
    });
    setTimeout(() => {
      setMiniBag((prevdata) => {
        return false;
      });
    }, "3000");
  }

  const [product, setproduct] = useState([]);
  function HandleProduct(newProduct) {
    setproduct((prevdat) =>  newProduct);
  }

  const [EmailData,setEmailData]=useState({Email:""})

  function HandleEmail(event) {
  console.log(event)
  setEmailData((prevformdata=>{
      return {...prevformdata,
      [event.target.name]:event.target.value}
    }))
  
  }

  console.log("app render");

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar CartAmount={Cart.length} MiniBagState={MiniBagState} item={product} />
                <ShoesMenu />
                <Main />
                <ShopHeader />
                <Section
                  Handleclick={AddToCart}
                  data={ShoesData}
                  // HandleImage={changeimage}
                  HandlePriceHigh={PriceHighLow}
                  HandlePriceLow={PriceLowHigh}
                  Handleset={setJordan}
                 
                  HandleMiniBag={MiniBag}
                  HandleProduct={HandleProduct}
                />
              </>
            }
          />

          <Route
            path="/SignUp"
            element={
              <>
                <Navbar />
                <SignUp />
                <Header />
                <VideoSection />
                {/* <MemberBenefitsSection/> */}
                <SimpleSlider />
              </>
            }
          />

          <Route path="/SignIn" element={<SignIn HandleEmail={HandleEmail} EmailData={EmailData}/>} />
          <Route path="/SignInForm" element={<SignInForm EmailData={EmailData}/>}/>
          <Route path="/Product" element={
          <>
          <Navbar/> 
          <Product item={product} Handleclick={AddToCart} />
          </>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
