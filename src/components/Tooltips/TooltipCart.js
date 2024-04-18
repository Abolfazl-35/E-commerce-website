import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Fade,} from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { grey } from '@mui/material/colors';
function Tooltip_cart() {
  return (
    <>
    <Tooltip title="Bag" className='h-max'
    arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
     
    >
    <ShoppingBagOutlinedIcon sx={{fontSize:38 ,color:grey[800]}} className=''>
    </ShoppingBagOutlinedIcon>
  </Tooltip>
  </>
  )
}

export default Tooltip_cart
