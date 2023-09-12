import React from "react";
import "./HookUseState.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Tooltip } from "@mui/material";

function HookUseState(props) {
  const [count, setCount] = React.useState(0);
  return (
    <div className="container">
      <div className="content">{count}</div>
      <div className="button-section">
        <Tooltip title="Tăng" placement="bottom">
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            onClick={() => setCount((count) => count + 1)}
          >
            Tăng
          </Button>
        </Tooltip>

        <Tooltip title="Giảm" placement="bottom">
          <Button
            variant="contained"
            color="error"
            startIcon={<RemoveIcon />}
            onClick={() => setCount((count) => count - 1)}
          >
            Giảm
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default HookUseState;
