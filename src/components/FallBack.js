import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const FallBack = () => {
  return (
    <>
      <div className=' container mx-auto'>
<div className=' w-full flex justify-center p-5 items-center'>
    <CircularProgress/>
</div>
      </div>
    </>
  )
}

export default FallBack
