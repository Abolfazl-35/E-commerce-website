import React from 'react'

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Fade,} from '@mui/material';

function Tooltip_cart() {
  return (
    <>
    <Tooltip title="Bag" className='h-max'
    arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
     
    >
    <IconButton className='h-10'>
    <i className="bi bi-bag-check text-xl font-semibold text-white sm:text-2xl"></i>
    </IconButton>
  </Tooltip>
  </>
  )
}

export default Tooltip_cart
