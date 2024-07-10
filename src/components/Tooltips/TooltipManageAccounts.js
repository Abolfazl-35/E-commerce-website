import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Fade } from "@mui/material";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
export default function BasicTooltip() {
  return (
    <Tooltip
      title="ManageAcount"
      className="h-max cursor-pointer"
      arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
    >
      <ManageAccountsIcon
        sx={{ fontSize: 35 }}
        className=""
      ></ManageAccountsIcon>
    </Tooltip>
  );
}
