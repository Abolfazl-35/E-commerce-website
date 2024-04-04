import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Fade,} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



function TooltipDropdown() {
  return (
    <>
        <Tooltip title="Bag"  className='h-max'
    arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
     
    >
    <ArrowDropDownIcon  sx={{fontSize:35}} className=' cursor-pointer'>
    </ArrowDropDownIcon>
  </Tooltip>
    
    </>
  )
}

export default TooltipDropdown