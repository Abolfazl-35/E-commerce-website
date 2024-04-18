import * as React from "react";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Tooltip from "@mui/material/Tooltip";
import { Fade } from "@mui/material";
import { grey, pink } from "@mui/material/colors";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
export default function BasicTooltip() {
    const {openSearch}=useContext(AuthContext)
  return (
    <Tooltip
      title="Search"
      className="h-max"
      onClick={openSearch}
      arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
    >
      <ManageSearchIcon sx={{fontSize:47,color:grey[800]}}  className="pt-1">
      </ManageSearchIcon>
    </Tooltip>
  );
}
