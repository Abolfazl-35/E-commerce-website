import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { Fade,} from '@mui/material';
import { AuthContext } from '../../context/AuthContext';


function TooltipDelete(props) {
  const {removeitem}=useContext(AuthContext)


  return (
    <>
    <Tooltip title="Remove" onClick={()=>removeitem(props.iteminfo)} className='h-max'
    arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
     
    >
    <DeleteIcon  sx={{fontSize:35}} className='pt-1 cursor-pointer'>
    </DeleteIcon>
  </Tooltip>
  </>
  )
}

export default TooltipDelete