import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Fade,} from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
function Tooltip_cart() {
  return (
    <>
    <Tooltip title="Bag" className='h-max'
    arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
     
    >
    <ShoppingBagOutlinedIcon sx={{fontSize:35}} color='action' className=''>
    </ShoppingBagOutlinedIcon>
  </Tooltip>
  </>
  )
}

export default Tooltip_cart
