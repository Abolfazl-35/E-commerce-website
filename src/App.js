import React, { useContext} from "react";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useState,  } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import VerifyEmail from "./components/SignInPage/VerifyEmail";
import { AuthContext } from "./context/AuthContext";
import FallBack from "./components/FallBack";


const LazyFavoriteSection = React.lazy(() =>
 
          import("./components/FavoriteProducts/FavoriteSection")

);

const LazySection = React.lazy(() => import("./components/Section"));

const LazyFooter = React.lazy(() => import("./components/Footer"));

const LazyMain = React.lazy(() => import("./components/Main"));

const LazyShopHeader = React.lazy(() => import("./components/ShopHeader"));

const LazyShoesMenu = React.lazy(() => import("./components/ShoesMenu"));

const LazySignUp = React.lazy(() =>
  import("./components/SignUpPage/AddSection")
);

const LazyHeader = React.lazy(() => import("./components/SignUpPage/Header"));

const LazyVideoSection = React.lazy(() =>
  import("./components/SignUpPage/VideoSection")
);

const LazySimpleSlider = React.lazy(() =>
  import("./components/SignUpPage/SimpleSlider")
);

const LazyProduct = React.lazy(() =>
  import("./components/SingleproductComponents/Product")
);

const LazySignInForm = React.lazy(() =>
  import("./components/SignInPage/SignInForm")
);

const LazySignIn = React.lazy(() => import("./components/SignInPage/SignIn"));

const LazyBag = React.lazy(() => import("./components/Bag/Bag"));

const LazySendVerify = React.lazy(() =>
  import("./components/SignInPage/SendVerify")
);

const LazyLogin = React.lazy(() => import("./components/LoginPage/Login"));

function App() {
  const { User, ShoesData, setJordan, setShoesData } = useContext(AuthContext);

  const [sortbyprice, setsort] = useState([
    { sorted: "price", reversed: false },
  ]);



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



  return (

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar MiniBagState={MiniBagState} />
                {/* <MainChat/> */}
                <React.Suspense fallback={<FallBack />}>
                  <LazyShoesMenu />
                </React.Suspense>
                <React.Suspense fallback={<FallBack />}>
                  <LazyMain />
                </React.Suspense>
                <React.Suspense fallback={<FallBack />}>
                  <LazyShopHeader />
                </React.Suspense>
                <React.Suspense fallback={<FallBack />}>
                  <LazySection
                    // Handleclick={AddToCart}
                    data={ShoesData}
                    // HandleImage={changeimage}
                    HandlePriceHigh={PriceHighLow}
                    HandlePriceLow={PriceLowHigh}
                    Handleset={setJordan}
                    HandleMiniBag={MiniBag}
                    HandleProduct={HandleProduct}
                  />
                </React.Suspense>

                <React.Suspense>
                  <LazyFooter />
                </React.Suspense>
              </>
            }
          />
          <Route
            path="/Favorite"
            element={
              <>
                <Navbar MiniBagState={MiniBagState} />
                <React.Suspense fallback={<FallBack />}>
                  <LazyFavoriteSection />
                </React.Suspense>
              </>
            }
          ></Route>
          <Route
            path="/SignUp"
            element={
              <>
                <Navbar MiniBagState={MiniBagState} />
                <React.Suspense fallback={<FallBack />}>
                  <LazySignUp />
                </React.Suspense>
                <React.Suspense fallback={<FallBack />}>
                  {" "}
                  <LazyHeader />
                </React.Suspense>
                <React.Suspense fallback={<FallBack />}>
                  {" "}
                  <LazyVideoSection />
                </React.Suspense>
                {/* <MemberBenefitsSection/> */}
                <React.Suspense>
                  <LazySimpleSlider />
                </React.Suspense>
                <React.Suspense fallback={<FallBack />}>
                  {" "}
                  <LazyFooter />
                </React.Suspense>
              </>
            }
          />

          <Route
            path="/SignIn"
            element={
              !User ? (
                <React.Suspense fallback={<FallBack />}>
                  <LazySignIn HandleEmail={HandleEmail} EmailData={EmailData} />
                </React.Suspense>
              ) : null
            }
          />
          <Route
            path="/SignInForm"
            element={
              <>
                <React.Suspense fallback={<FallBack />}>
                  <LazySignInForm EmailData={EmailData} />
                </React.Suspense>
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

          <Route
            path="/login"
            element={
              <React.Suspense fallback={<FallBack />}>
                <LazyLogin />
              </React.Suspense>
            }
          />

          <Route
            path="/send-verify"
            element={
              <React.Suspense fallback={<FallBack />}>
                <LazySendVerify />
              </React.Suspense>
            }
          />

          <Route
            path="/Product/:id"
            element={
              <>
                <Navbar MiniBagState={MiniBagState} />
                <React.Suspense fallback={<FallBack />}>
                  <LazyProduct HandleMiniBag={MiniBag} item={product} />
                </React.Suspense>
              </>
            }
          />
          <Route
            path="/Bag"
            element={
              <>
                <Navbar MiniBagState={MiniBagState} />
                <React.Suspense fallback={<FallBack />}>
                  <LazyBag />
                </React.Suspense>
              </>
            }
          />
        </Routes>
      </Router>

  );
}

export default App;
