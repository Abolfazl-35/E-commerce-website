import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Fade,} from '@mui/material';
import { grey,blueGre,blue, } from '@mui/material/colors';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
function TooltipChat() {
   const {HandleChatPage}=useContext(AuthContext)
  return (
    <>
    <Tooltip title="contect" className='h-max cursor-pointer'
    arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
     onClick={
       ()=>{HandleChatPage()} 
     }
    >
    <ContactSupportIcon  sx={{fontSize:50 ,color:grey[1000],borderRadius:"1rem",padding:0}} className=''>
    </ContactSupportIcon>
  </Tooltip>
  </>
  )
}

export default TooltipChat