import { createTheme } from "@mui/material/styles";

export const MAIN_THEME = createTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    htmlFontSize: 10,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(45deg,rgb(211, 240, 254) 30%,rgb(88, 186, 207) 90%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});

export const ACTION_ADD_DICE = "dice/addDice";
export const ACTION_REMOVE_DICE = "dice/removeDice";
export const ACTION_ADD_SIDE = "dice/addSide";
export const ACTION_REMOVE_SIDE = "dice/removeSide";
export const ACTION_ROLL_ALL = "dice/rollAll";

export const DICE_ROLL_DURATION = 1000; // in ms
export const DICE_ROLL_COUNT = 5;
