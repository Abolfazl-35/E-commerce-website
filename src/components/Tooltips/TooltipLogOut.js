import LogoutIcon from '@mui/icons-material/Logout';
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Fade } from "@mui/material";
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

function TooltipLogOut() {
 const {logoutUser,openDashboardf} = useContext(AuthContext);
    return (
        <Tooltip
        title="LogOut"
        className="h-max cursor-pointer"
        arrow
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        onClick={()=>{logoutUser()
          openDashboardf()}}
      >
        <LogoutIcon sx={{fontSize:30}} className="">
        </LogoutIcon>
      </Tooltip>
    )

}

export default TooltipLogOut
