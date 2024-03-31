import * as React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Fade } from "@mui/material";

export default function BasicTooltip() {
  return (
    <Tooltip
      title="Favorite"
      className="h-max"
      arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
    >
      <FavoriteBorderIcon sx={{fontSize:35}} className="pt-1">
      </FavoriteBorderIcon>
    </Tooltip>
  );
}
