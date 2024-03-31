import React from 'react'


function SingleProductImages({item,index}) {
    console.log(item)
  return (

<>
    {item.images.map((url) => {
        return (
          <img
          loading="lazy"
            alt="product"
            key={url.image}
            src={url.image}
            className="w-full max-w-full  object-cover max-h-[680px] block flex-shrink-0 flex-grow-0   rounded"
            style={{
              translate: `${-100 * index}%`,
              transition: "translate 300ms ease-in",
            }}
          />
        );
      })}

</>


   
  )
}

export default SingleProductImages