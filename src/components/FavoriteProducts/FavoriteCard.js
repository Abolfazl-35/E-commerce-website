import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useRef,useState } from 'react';
import Favoritecss from "./Favorite.css"
import classNames from 'classnames';
import Delete from '@mui/icons-material/Delete';
import { AuthContext } from '../../context/AuthContext';

const FavoriteCard = (props) => {
  const{removeFvoriteProduct}=useContext(AuthContext)
  console.log(props)
    let { images } = props.item;

    let imagesIn = useRef();
    imagesIn.current=images.map((i)=>{
      if (i) {
        return i.image
      }else return null
    })
      
    const [imgIndex, setimgIndex] = useState(0);

    function imageIndexf(index) {
        setimgIndex(() => {
          return index;
        });
      }
      let color = [];
    
      Object.values(props.item.images).map((i) => {
        if (i !== "") {
          return color.push(i);
        } else return true;
      });

      const [cardDetail,setCardDetail] = useState(false);
    
function HandleDetail(params) {
  setCardDetail((prevdata)=>{
return !prevdata
  })
}
  return (
    <> 
    

      <div className=" w-full  rounded  items-center sm:justify-self-center bg-zinc-400   border-2 flex    shadow-lg ">
    
        <div className="md:[w-full] relative w-full h-full rounded   ">
            <img
              className=" max-w-full h-full w-full   "
              src={images[imgIndex].image}
              alt="productimage"
              loading="lazy"
              onClick={HandleDetail}
            />
   
       <div>
        <button className=' absolute top-1 left-1'
        onClick={()=>removeFvoriteProduct(props.item)}>
          <span><Delete titleAccess='Delete'/></span>
        </button>
          </div>
        </div>
      
             {/* <div className='flex p-2 h-10'>
           <button onClick={HandleDetail}>details</button>
        </div> */}
        
        <div   className={classNames("dec-container relative w-1/2 p-2   text-sm flex  space-y-2  rounded  ")}
       
          
          data-attribute="false"
        >
          <div className='dec-section'>
          <div className="product-dec-inner-1 w-full font-foboto flex flex-col  md:text-md space-y-1  ">
            <span className="w-full rounded ">
              <h1 className=" font-Roboto text-base  tracking-wide    w-full rounded p-2">
                <strong>{props.item.name}</strong>
              </h1>
            </span>
            <h2 className="w-full p-2  text-zinc-800">
              <strong>Brand:{props.item.brand}</strong>
            </h2>
            <p className="w-full p-2 text-gray-600">{props.item.dec}</p>

            <p className="w-full flex p-2 text-gray-600"><span className="mb-[.1rem]">{images.length}</span> <span className=" ml-1">Color</span></p>
          </div>
          <div className="product-dec-inner-2 flex flex-col w-full max-h-max  gap-2   p-1">
            <div>
              <p className=" font-roboto text-green-800 text-base font-semibold">
                Best Seller
              </p>
            </div>
            <div className="flex gap-1">

              <img
                className=" cursor-pointer object-contain justify-self-start rounded"
                src={images[0].image}
                alt=""
                width="50"
                onMouseEnter={() => imageIndexf(0)}
              />
              {imagesIn.current[1] && (
       <img
                className=" cursor-pointer justify-self-start rounded"
                src={imagesIn.current[1]}
                alt=""
                width="50"
                onMouseEnter={() => imageIndexf(1)}
              />

              )}
       {imagesIn[2] &&(
   <img
                className=" cursor-pointer justify-self-start rounded"
                src={imagesIn[2]}
                alt=""
                width="50"
                onMouseEnter={() => imageIndexf(2)}
              />

       )}
           
            </div>
          </div>
          <div className="flex pb-2 pl-2   text-base font-Oswald tracking-wider ">
            <p className="price w-full p-1   ">{props.item.price}$</p>
          </div>
          <Link to={`/product/${props.item.id}`}>
          
          <div className='p-2  text-sm md:text-base font-Roboto rounded transition hover:bg-greyish-0'
          >
            <p>
            Product Details 
            </p>
            
          </div>
          </Link>
          </div>

        </div>
        {/* <Link to="/Product" >
        <button
          className="w-full bg-slate-200 p-1 text-center font-serif text-slate-950 hover:bg-slate-950 hover:text-slate-200"
          onClick={() => props.HandleProduct(props.item)}
        >

          ADD To Cart
        </button>
        </Link> */}
        
       
      </div>
     
      
    </>
  )
}

export default FavoriteCard
