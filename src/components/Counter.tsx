import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton, InputBase, Paper, Stack } from "@mui/material";
import type { CounterType } from "../types/types";

const Counter = ({ title, value, increment, decrement }: CounterType) => {
  return (
    <Stack direction="column" spacing={1}>
      <p>{title}</p>
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 200,
        }}
      >
        <IconButton
          sx={{ p: "10px" }}
          aria-label="remove"
          onClick={() => decrement()}
        >
          <RemoveIcon />
        </IconButton>

        <InputBase
          value={value}
          placeholder="Dice"
          sx={{
            flex: 1,
            width: 1 / 3,
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
              {
                display: "none",
              },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
            input: { textAlign: "center" },
          }}
          size="small"
          type="number"
        />

        <IconButton
          sx={{ p: "10px" }}
          aria-label="add"
          onClick={() => increment()}
        >
          <AddIcon />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default Counter;
