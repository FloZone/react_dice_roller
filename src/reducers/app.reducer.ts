import {
  ACTION_ADD_DICE,
  ACTION_ADD_SIDE,
  ACTION_REMOVE_DICE,
  ACTION_REMOVE_SIDE,
  ACTION_ROLL_ALL,
} from "../constants/constants";
import type { ReducerActionType, ReducerStateType } from "../types/types";
import { generateNewValues } from "../utils/utils";

const AppReducer = (
  state: ReducerStateType,
  action: ReducerActionType,
): ReducerStateType => {
  switch (action.type) {
    case ACTION_ADD_DICE:
      if (state.diceCount >= 10) return state;
      return {
        ...state,
        diceCount: state.diceCount + 1,
        values: generateNewValues(state.diceCount + 1, state.sideCount),
        rollEvent: !state.rollEvent,
      };

    case ACTION_REMOVE_DICE:
      if (state.diceCount <= 1) return state;
      return {
        ...state,
        diceCount: state.diceCount - 1,
        values: generateNewValues(state.diceCount - 1, state.sideCount),
        rollEvent: !state.rollEvent,
      };

    case ACTION_ADD_SIDE:
      if (state.sideCount >= 100) return state;
      return {
        ...state,
        sideCount: state.sideCount + 1,
        values: generateNewValues(state.diceCount, state.sideCount + 1),
        rollEvent: !state.rollEvent,
      };

    case ACTION_REMOVE_SIDE:
      if (state.sideCount <= 2) return state;
      return {
        ...state,
        sideCount: state.sideCount - 1,
        values: generateNewValues(state.diceCount, state.sideCount - 1),
        rollEvent: !state.rollEvent,
      };

    case ACTION_ROLL_ALL:
      return {
        ...state,
        values: generateNewValues(state.diceCount, state.sideCount),
        rollEvent: !state.rollEvent,
      };

    default:
      return state;
  }
};

export default AppReducer;
