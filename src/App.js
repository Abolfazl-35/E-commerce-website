import React, { useEffect } from "react";
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
    }
    // const Basket={...NewProduct}
  }
  function removeitem(item) {

    const removedProduct = Cart.find((i) => {
      return (
        i.selectedColor === item.selectedColor 
        && i.selectedSize===item.selectedSize
        && i.id===item.id
       
      );
    });
Setcart(()=>{
  return Cart.filter((i)=>{
    return i!==removedProduct
  })
})




  }
console.log(Cart)
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
  

function CloseSearch(params) {
  setSearchresult((prevdata)=>{
    return{...prevdata,Search:""}
  })
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
                HandleSearch={HandleSearch}
                searchresult={Searchresult}
                 data={filterItem}
                  CartAmount={Cart.length}
                  MiniBagState={MiniBagState}
                 CloseSearch={CloseSearch}
                />
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
              </>
            }
          />

          <Route path="/SignUp"
           
            element={
              <>
                <Navbar  
                HandleSearch={HandleSearch}
                searchresult={Searchresult}
                 data={filterItem}
                  CartAmount={Cart.length}
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
            
            element={<SignIn HandleEmail={HandleEmail} EmailData={EmailData} />}
          />
          <Route path="/SignInForm"
            
            element={<SignInForm EmailData={EmailData} />}
          />
          <Route path="/Product/:id"
            
            element={
              <>
                <Navbar  HandleSearch={HandleSearch}
                searchresult={Searchresult}
                 data={filterItem}
                  CartAmount={Cart.length}
                  MiniBagState={MiniBagState}
                  item={Cart[Cart.length-1]} />
                <Product
                 HandleMiniBag={MiniBag}
                  item={product}
                  Handleclick={AddToCart}
                  HandleProductData={AddToCart}
                />
              </>
            }
          />
          <Route
          path="/Bag"
          element={<>
          <Navbar  HandleSearch={HandleSearch}
                searchresult={Searchresult}
                 data={filterItem}
                  CartAmount={Cart.length}
                  MiniBagState={MiniBagState}
                  item={Cart[Cart.length-1]} />

           <Bag CartItems={Cart}
           removeItem={removeitem}/>
           </>
        }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
