import { Paper } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DICE_ROLL_COUNT, DICE_ROLL_DURATION } from "../../constants/constants";
import AppContext from "../../contexts/app.context";
import type { DiceType } from "../../types/types";
import { random } from "../../utils/utils";
import "../../styles/dice.css";

const Dice = ({ sideCount, value }: DiceType) => {
  const { rollEvent } = useContext(AppContext);
  const [counter, setCounter] = useState(0);

  // Start a new rolling effect when the rollEvent changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: need this dependency
  useEffect(() => {
    setCounter(DICE_ROLL_COUNT);
  }, [rollEvent]);

  // Simulate a rolling effect
  useEffect(() => {
    let intervalId = 0;
    if (counter > 0) {
      intervalId = setInterval(
        () => setCounter(counter - 1),
        DICE_ROLL_DURATION / DICE_ROLL_COUNT,
      );
    }
    return () => clearInterval(intervalId);
  }, [counter]);

  const displayValue = counter > 0 ? random(sideCount) : value;

  let html = <Paper sx={{ px: 5, py: 4 }}>{displayValue}</Paper>;
  if (sideCount <= 6) {
    switch (displayValue) {
      case 1:
        html = (
          <div className="dice face-one">
            <span className="dot"> </span>
          </div>
        );
        break;

      case 2:
        html = (
          <div className="dice face-two">
            <span className="dot"> </span>
            <span className="dot"> </span>
          </div>
        );
        break;

      case 3:
        html = (
          <div className="dice face-three">
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
          </div>
        );
        break;

      case 4:
        html = (
          <div className="dice face-four">
            <div className="column">
              <span className="dot"> </span>
              <span className="dot"> </span>
            </div>
            <div className="column">
              <span className="dot"> </span>
              <span className="dot"> </span>
            </div>
          </div>
        );
        break;

      case 5:
        html = (
          <div className="dice face-five">
            <div className="column">
              <span className="dot"> </span>
              <span className="dot"> </span>
            </div>
            <div className="column">
              <span className="dot"> </span>
            </div>
            <div className="column">
              <span className="dot"> </span>
              <span className="dot"> </span>
            </div>
          </div>
        );
        break;

      case 6:
        html = (
          <div className="dice face-six">
            <div className="column">
              <span className="dot"> </span>
              <span className="dot"> </span>
              <span className="dot"> </span>
            </div>
            <div className="column">
              <span className="dot"> </span>
              <span className="dot"> </span>
              <span className="dot"> </span>
            </div>
          </div>
        );
        break;
    }
  }

  return <>{html}</>;
};

export default Dice;
