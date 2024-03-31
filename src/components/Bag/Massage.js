import React from 'react'
import { Link } from "react-router-dom";
function Massage() {
  return (
    <>
    <div className='flex flex-col p-4 space-y-2 rounded-sm border border-gray-400'>
<h1 className=' text-[#ff5000] font-bold text-2xl'>
Members get shipping on orders $50+
</h1>
<p className='text-lg font-medium text-greyish-0'>
    Become a Nike Member for fast free shipping on orders $50+ 
    <Link>
    <span className=' ml-1 mr-1 underline  underline-offset-8 cursor-pointer'>
     Join us
     </span> 
    </Link>
    or
     <Link>
    <span className='ml-1 mr-1 underline underline-offset-8 cursor-pointer'>Sign-in</span>
     </Link>
    
</p>
    </div>
    
    </>
  )
}

export default Massage