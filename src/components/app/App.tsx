import { Button, Container, Grid, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useReducer } from "react";
import { DICE_ROLL_DURATION, MAIN_THEME } from "../../constants/constants";
import {
  ACTION_ADD_DICE,
  ACTION_ADD_SIDE,
  ACTION_REMOVE_DICE,
  ACTION_REMOVE_SIDE,
  ACTION_ROLL_ALL,
} from "../../constants/constants";
import AppContext from "../../contexts/app.context";
import AppReducer from "../../reducers/app.reducer";
import Counter from "../Counter";
import Dice from "../dice/Dice";

const App = () => {
  const [rollState, dispatch] = useReducer(AppReducer, {
    diceCount: 1,
    sideCount: 6,
    values: [1],
    rollEvent: false,
  });
  const result = rollState.values.reduce((a: number, b: number) => a + b, 0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: need this dependency
  useEffect(() => {
    (document.getElementById("result") as HTMLInputElement).style.visibility =
      "hidden";
    setTimeout(() => {
      (document.getElementById("result") as HTMLInputElement).style.visibility =
        "";
    }, DICE_ROLL_DURATION);
  }, [rollState.values]);

  // Generate dices
  const dices = [];
  for (let i = 0; i < rollState.diceCount; i++) {
    dices.push(
      <Grid size={1}>
        <Dice
          key={i}
          sideCount={rollState.sideCount}
          value={rollState.values[i]}
        />
      </Grid>,
    );
  }

  return (
    <AppContext.Provider value={{ rollEvent: rollState.rollEvent }}>
      <ThemeProvider theme={MAIN_THEME}>
        <CssBaseline />

        <Container maxWidth="sm" sx={{ mt: 5 }}>
          <Stack direction="row" justifyContent="center" spacing={5}>
            <Counter
              title={"Number of dices"}
              value={rollState.diceCount}
              increment={() => dispatch({ type: ACTION_ADD_DICE })}
              decrement={() => dispatch({ type: ACTION_REMOVE_DICE })}
            />
            <Counter
              title={"Number of sides"}
              value={rollState.sideCount}
              increment={() => dispatch({ type: ACTION_ADD_SIDE })}
              decrement={() => dispatch({ type: ACTION_REMOVE_SIDE })}
            />
          </Stack>

          <Grid container columns={5} spacing={3} sx={{ mt: 10 }}>
            {dices}
          </Grid>

          <Stack
            direction="column"
            justifyContent="center"
            spacing={2}
            sx={{ mt: 10 }}
          >
            <Stack direction="row" justifyContent="center" spacing={2}>
              <h4>Result:</h4>

              <h4 id="result">{result}</h4>
            </Stack>

            <Button
              variant="contained"
              onClick={() => dispatch({ type: ACTION_ROLL_ALL })}
            >
              Roll
            </Button>
          </Stack>
        </Container>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
