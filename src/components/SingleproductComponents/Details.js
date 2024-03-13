import React from 'react'
import { Link } from 'react-router-dom'




function Details(props) {



  return (
    <div className='w-full'>
           <div className="w-full flex space-y-1 flex-col p-2 text-lg font-serif">
                <h1 className="">Shipping</h1>

                <p>You'll see pur shipping options at Checkout</p>
                <br />
                <p>Free Pickup</p>
                <Link>
                  <p className=" underline underline-offset-8">Find a Store</p>
                </Link>
              </div>
              <div className="p-2 mt-3">
                <p>
                  Get grounded, stay grounded. The AJ XXXVIII is all about
                  groundwork—we're talking about your running, your cutting,
                  your turn-around jumpers—with low-to-the-court cushioning and
                  a secure upper that helps support every move. It's also
                  designed with sustainability in mind, with at least 20%
                  recycled content by weight. So you can hit 'em with that
                  windshield-wiper fake and feel good about more than just
                  sinking a bucket for your team.
                </p>
              </div>
              <div className="pt-5 mt-3">
                <ul className="list-disc list-inside font-serif text-base">
                  <li className=" uppercase">Shown:<span className="">{props.Shown}</span></li>
                  <li className="mt-2 uppercase">Style:DD1391-601</li>
                </ul>
              </div>
              <div>
              <button
                onClick={props.HandleDetailPage}
                className="p-2 font-serif cursor-pointer underline underline-offset-8"
              >
                View Product Details
              </button>
            </div>
    
    
    </div>
  )
}

export default Details