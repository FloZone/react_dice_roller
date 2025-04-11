export type DiceType = {
  sideCount: number;
  value: number;
};

export type CounterType = {
  title: string;
  value: number;
  increment: () => void;
  decrement: () => void;
};

export type ReducerStateType = {
  diceCount: number;
  sideCount: number;
  values: number[];
  rollEvent: boolean;
};
export type ReducerActionType = {
  type: string;
};
