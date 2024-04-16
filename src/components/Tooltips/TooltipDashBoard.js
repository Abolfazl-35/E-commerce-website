import React from 'react'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Tooltip from '@mui/material/Tooltip';
import { Fade,} from '@mui/material';

function TooltipDashBoard() {
  return (
    <>
    <Tooltip title="Dashboard" className='h-max'
    arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
     
    >
    <DashboardCustomizeIcon sx={{fontSize:35}} color='action' className=''>
    </DashboardCustomizeIcon>
  </Tooltip>
 
    </>
  )
}

export default TooltipDashBoard