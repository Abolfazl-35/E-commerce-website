import * as React from "react";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

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
      <IconButton className="w-8 max-h-12">
        <i className="bi bi-heart text-xl mt-1 font-semibold text-slate-950 sm:text-2xl"></i>
      </IconButton>
    </Tooltip>
  );
}
