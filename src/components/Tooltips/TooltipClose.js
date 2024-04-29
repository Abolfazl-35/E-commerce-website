import React, { useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import { Fade,} from '@mui/material';
import { grey } from '@mui/material/colors';
import { AuthContext } from '../../context/AuthContext';
function TooltipClose() {
    const{openDashboardf}=useContext(AuthContext)
  return (
    <>
    <Tooltip title="Close" className='h-max cursor-pointer'
    arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
     onClick={openDashboardf}
    >
    <CloseIcon sx={{fontSize:35}}  color='action' className=''>
    </CloseIcon>
  </Tooltip>
 
    </>
  )
}

export default TooltipClose