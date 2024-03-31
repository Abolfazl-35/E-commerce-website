import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { Fade,} from '@mui/material';


function TooltipDelete() {
  return (
    <>
    <Tooltip title="Bag" className='h-max'
    arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
     
    >
    <DeleteIcon sx={{fontSize:35}} className='pt-1 cursor-pointer'>
    </DeleteIcon>
  </Tooltip>
  </>
  )
}

export default TooltipDelete