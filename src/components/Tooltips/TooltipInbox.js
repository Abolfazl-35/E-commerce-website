import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Fade,} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';



function TooltipDropdown() {
  return (
    <>
        <Tooltip title="Mail"  className='h-max'
    arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
     
    >
    <MailIcon  sx={{fontSize:35}} className=' cursor-pointer'>
    </MailIcon>
  </Tooltip>
    
    </>
  )
}

export default TooltipDropdown