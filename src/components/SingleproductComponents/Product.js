import { Label } from "@mui/icons-material";
import classNames from "classnames";
import React, { useCallback, useContext, useMemo } from "react";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Details from "./Details";
import AllShoesData from "../../AllShoesData";
import JordanShoesData from "../../JordanShoesData";
import SingleProductImages from "./SingleProductImages";
import Nextbtn from "./Nextbtn"
import { name } from "@cloudinary/url-gen/actions/namedTransformation";
import { AuthContext } from "../../context/AuthContext";

function Product(props) {
  const {AddToCart}=useContext(AuthContext)
  const {id}=useParams()
 
const singleproduct=useCallback(()=>{
 return AllShoesData.filter((i)=>{
  if (i.id===Number(id)) {
    return i
  }else return null
})
},[id])
  




const scrollTo = useRef();
const [product,setproduct]=useState(singleproduct)














  const [imageIndex, setimageIndex] = useState(0);






  const singleproductimages=product.map((i)=>{
  return <SingleProductImages
  key={i.id}
  item={i}
  index={imageIndex}/>
})






  









  //  useEffect(()=>{
  //      const Values=Object.values(props.item.images)
  //     setimages(Values)
  //  },[])

  const fixedStickybtn = useRef();


  function NextSlider(params) {
    console.log("clicked")
    setimageIndex((prevdata) => {
      if (prevdata < product[0].images.length - 1) {
        return ++prevdata;
      } else {
        return 0;
      }
    });
  }
  function prevslider(params) {
    console.log("clicked")
    setimageIndex((prevdata) => {
      if (prevdata > 0) {
        return --prevdata;
      } else {
        return 0;
      }
    });
  }

  const [fixedbtnvisible, setsticktbtnvisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setsticktbtnvisible(entry.isIntersecting);
    });
    observer.observe(fixedStickybtn.current);
  }, []);
  const [detailPageVisible, setDetailPageVisible] = useState(false);

  const [bagproduct, setBagProduct] = useState({
    type:product[0].type,
    id:product[0].id,
    dec: product[0].dec,
    price: product[0].price,
    selectedColor:product[0].images[0].shown,
    selectedSize: "",
    image:product[0].images[0].image
  });

  function HandleProduct(event) {
    const { name, value, type, checked } = event.target;
    setBagProduct((prevdata) => {
      return { ...prevdata, [name]: value,image:product[0].images[imageIndex].image };
    });
  }
  // useEffect(() => {
  //   scrollTo.current.scrollIntoView();
  // },[]);

  function HandleDetailPage(params) {
    setDetailPageVisible((prevdata) => {
      return !prevdata;
    });
  }

  function AddtoBag(e) {
    if (!bagproduct.selectedSize) {
      scrollTo.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }

  console.log("render product");

  return (
    
    <>
      {product && (
        <div className=" md:container mx-auto      p-2">
          <div
            className={classNames(
              "overly--detail fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-40   bg-[rgba(0,0,0,50%)]",
              { "opacity-0 pointer-events-none": !detailPageVisible },
              { "opacity-1 pointer-events-auto": detailPageVisible }
            )}
            onClick={HandleDetailPage}
            style={{ transition: "opacity 250ms ease-in" }}
          ></div>
          <div className="flex w-full  flex-col   md:flex-row flex-nowrap    ">
            {/* Header in small screens */}
            <div className="p-2 block md:hidden">
              <h1 className="font-serif text-2xl ">{product[0].dec}</h1>
              <p className="font-serif text-xl">{product[0].type}</p>
              <br />
              <p className=" font-Oswald tracking-wider text-lg ">
                ${product[0].price}
              </p>
            </div>
            {/* product images */}
            <div className="slider-container h-max relative max-w-full md:gap-1 md:w-8/12  flex  w-full   ">
              {/* image indicator */}
              <div className="indicator hidden space-y-1 max-h-[680px] overflow-y-scroll  md:block w-1/12">
                {product[0].images.map((indicator, index) => {
                  return (
                    <img
                    loading="lazy"
                      key={index}
                      alt="indicatorimage"
                      src={indicator.image}
                      className={classNames(
                        "w-full aspect-square object-cover",
                        { " border  border-gray-500": imageIndex === index }
                      )}
                      onClick={() => setimageIndex(index)}
                    />
                  );
                })}
              </div>
              <div className="image--item flex w-full max-w-full md:w-11/12 overflow-hidden     ">
                {/* {imageRef.current.map((url) => {
                  return (
                    <img
                    loading="lazy"
                      alt="product"
                      key={url.image}
                      src={url.image}
                      className="w-full max-w-full  object-cover max-h-[680px] block flex-shrink-0 flex-grow-0   rounded"
                      style={{
                        translate: `${-100 * imageIndex}%`,
                        transition: "translate 300ms ease-in",
                      }}
                    />
                  );
                })} */}
                {singleproductimages}
              </div>
              <div className="absolute w-max hidden md:block  right-5 bottom-12 ">
                <div className="flex space-x-5">
                  <button onClick={prevslider}>
                    <i
                      className={classNames(
                        {
                          "bi bi-arrow-left-circle-fill text-black  text-4xl":
                            imageIndex > 0,
                        },
                        {
                          "bi bi-arrow-left-circle-fill text-greyish-0  text-4xl":
                            imageIndex === 0,
                        }
                      )}
                    ></i>
                  </button>

                  <button onClick={NextSlider}>
                    <i
                      className={classNames(
                        {
                          "bi bi-arrow-right-circle-fill text-black  text-4xl":
                            imageIndex < product[0].images.length - 1,
                        },
                        {
                          "bi bi-arrow-right-circle-fill text-greyish-0  text-4xl":
                            imageIndex ===  product[0].images.length - 1,
                        }
                      )}
                    ></i>
                  </button>

                  {/* <Nextbtn
                  NextSlider={NextSlider}
                  imageIndex={imageIndex}
                  images={productImages}
                  /> */}
                </div>
              </div>
              <div className="absolute  top-[50%] left-5 block md:hidden ">
                <button
                  disabled={imageIndex === 0 ? true : false}
                  onClick={prevslider}
                >
                  <i
                    className={classNames(
                      {
                        "bi bi-arrow-left-circle-fill text-black  text-4xl":
                          imageIndex > 0,
                      },
                      {
                        "bi bi-arrow-left-circle-fill text-greyish-0  text-4xl":
                          imageIndex === 0,
                      }
                    )}
                  ></i>
                </button>
              </div>
              <div className="absolute  top-[50%] right-5 block md:hidden ">
                <button
                  disabled={
                    imageIndex === product[0].images.length - 1 ? true : false
                  }
                  onClick={NextSlider}
                >
                  <i
                    className={classNames(
                      {
                        "bi bi-arrow-right-circle-fill text-black  text-4xl":
                          imageIndex < product[0].images.length - 1,
                      },
                      {
                        "bi bi-arrow-right-circle-fill text-greyish-0  text-4xl":
                          imageIndex === product[0].images.length - 1,
                      }
                    )}
                  ></i>
                </button>
              </div>
            </div>

            <div className="size--container md:max-h-[680px] w-full overflow-y-scroll p-1 flex flex-col  md:w-4/12  ">
              {/* Header in big screens */}
              <div className="p-1 hidden md:block">
                <h1 className="font-serif text-2xl ">{product[0].dec}</h1>
                <p className="font-serif text-xl">{product[0].type}</p>
                <br />
                <p className=" font-Oswald tracking-wider text-base ">
                  ${product[0].price}
                </p>
              </div>
              {/* Size and descrebtion section */}
              <form
                ref={scrollTo}
                className={classNames(
                  "h-max w-full flex flex-col  p-1 mt-1",
                  { "border border-transparent": bagproduct.selectedSize },
                  { "border border-red-500": !bagproduct }
                )}
                onSubmit={AddtoBag}
              >
                {/* images form */}
                <div className="flex gap-1 flex-nowrap overflow-x-auto">
                  {product[0].images.map((i, index) => {
                    return (
                      <div>
                        <input
                          value={i.shown}
                          id={i.shown}
                          type="radio"
                          name="selectedColor"
                          className="hidden peer"
                          onChange={HandleProduct}
                          checked={bagproduct.selectedColor === i.shown}
                        />
                        <label
                          htmlFor={i.shown}
                          className="w-full flex border  cursor-pointer peer-checked:border-green-500"
                        >
                          <img
                            alt="colorshown"
                            src={i.image}
                            width={100}
                            onClick={() => setimageIndex(index)}
                          />
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="flex w-full justify-between pt-8 ">
                  <h1 className="font-serif text-xl ">Select Size</h1>
                  <button className="font-serif text-xl text-greyish-0">
                    Size Guid
                  </button>
                </div>
                {/* sizes */}
                <div className="p-2 w-full pt-8 mt-2 grid grid-cols-5 md:grid-cols-3 gap-1">
                  {Object.values(product[0].sizes).map((i) => {
                    return (
                      <div className="w-full h-full ">
                        <input
                          value={i}
                          id={i}
                          name="selectedSize"
                          type="radio"
                          onChange={HandleProduct}
                          className="hidden peer"
                          checked={bagproduct.selectedSize === i}
                        />
                        <label
                          htmlFor={i}
                          className={classNames(
                            "flex justify-center w-full p-4 cursor-pointer text-center bg-slate-200 rounded peer-checked:bg-gray-500"
                          )}
                        >
                          {i}
                        </label>
                      </div>
                    );
                  })}
                </div>
                {/* msg for discount */}
                <div className="mt-2 pt-2">
                  <p className=" font-serif text-lg">
                    4 interest-free payments of $22.50 whit{" "}
                    <span className=" font-semibold text-lg font-serif">
                      Klarna.
                    </span>
                    <Link>
                      <span className=" underline">Learn more</span>
                    </Link>
                  </p>
                </div>
                {/* buttons for submit */}
                <div className="flex flex-col space-y-4 w-full mt-6 p-2">
                  <button
                    type="button"
                    onClick={() => {
                      AddtoBag();
                     AddToCart(bagproduct)
                      props.HandleMiniBag(bagproduct)
                    }}
                    ref={fixedStickybtn}
                    className="w-full sticky bottom-0 bg-slate-950 font-serif text-slate-200 p-3 rounded-3xl text-lg hover:bg-greyish-0 "
                  >
                    Add to Bag
                  </button>
                  <button className="w-full bg-slate-950 font-serif text-slate-200 p-3 rounded-3xl text-lg hover:bg-greyish-0 ">
                    Favorite
                    <span className="ml-2">
                      <i className="bi bi-heart text-slate-200 text-sm "></i>
                    </span>
                  </button>
                </div>
              </form>

              <Details
                HandleDetailPage={HandleDetailPage}
                Shown={product[0].images[imageIndex].shown}
              />
            </div>

            {/* product detail */}
            {detailPageVisible && (
              <div className="detail--section fixed container p-2  mx-auto  z-50 rounded   bg-slate-100 h-[70vh] overflow-y-scroll">
                <div className="relative">
                  <div className="p-2   z-50 flex flex-col w-full ">
                    <h1 className="font-serif text-2xl ">{props.item.dec}</h1>
                    <p className="font-serif text-xl">{props.item.type}</p>
                    <br />
                    <p className=" font-Oswald tracking-wider text-lg ">
                      ${props.item.price}
                    </p>
                  </div>
                  <hr />
                  <div className="flex font-medium flex-col tracking-wide leading-7  font-Roboto p-2 mt-1">
                    <h1>TRUE TO YOUR CREW.</h1>
                    <br />
                    <p>
                      Created for the hardwood but taken to the streets, the
                      Nike Dunk Low Retro returns with crisp overlays and
                      original team colors. This basketball icon channels '80s
                      vibes with premium leather in the upper that looks good
                      and breaks in even better. Modern footwear technology
                      helps bring the comfort into the 21st century.
                    </p>
                  </div>
                  <div className="flex flex-col text-base  font-medium font-Roboto space-y-3  p-2 mt-1">
                    <h1>Benefits</h1>
                    <ul className=" leading-6 tracking-wide list-disc  space-y-3 list-inside  flex flex-col">
                      <li>
                        Premium leather in the upper has the perfect sheen and
                        breaks in beautifully.
                      </li>
                      <li>
                        The modern foam midsole offers lightweight, responsive
                        cushioning.
                      </li>
                      <li>
                        A padded, low-cut collar adds a sleek look that feels
                        comfortable.
                      </li>
                      <li>
                        Bold color blocking throws it back to the original
                        colorway inspiration: school team colors.
                      </li>
                      <li>
                        The rubber outsole with classic hoops pivot circle adds
                        durability, traction and heritage style.
                      </li>
                    </ul>
                    <div className="flex flex-col text-base  font-medium font-Roboto space-y-3  p-2 mt-1">
                      <h1>Product Details</h1>
                      <ul className="leading-6 tracking-wide list-disc  space-y-3 list-inside  flex flex-col">
                        <li>Low-cut collar</li>
                        <li>Foam insole</li>
                        <li>Perforations on toe</li>

                        <span className="ml-5">
                          <ul className="leading-6 tracking-wide list-disc  space-y-3 list-inside  flex flex-col">
                            <li>Shown: Team Red/White/Team Red</li>
                            <li>Style: DD1391-601</li>
                          </ul>
                        </span>
                      </ul>
                    </div>
                  </div>
                  {/* close btn */}
                  <button
                    onClick={HandleDetailPage}
                    className="p-2 absolute top-2 right-2"
                  >
                    <i class="bi bi-x text-4xl"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {!fixedbtnvisible && (
        <button
          type="button"
          className="w-full sm:hidden fixed bottom-0 p-2 text-center font-serif  bg-slate-950 text-slate-200"
          // onClick={() => {props.Handleclick(bagproduct)}}
          //       props.HandleMiniBag(props.item)
          //       props.HandleProduct(props.item)
          //    }

          //       }
          onClick={() => {
            AddtoBag();
            props.HandleProductData(bagproduct);
            props.HandleMiniBag(bagproduct);
          }}
        >
          ADD To Cart
        </button>
      )}
    </>
  );
}

export default Product;
