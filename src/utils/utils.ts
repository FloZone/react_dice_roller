export const random = (maxValue: number) => {
  return Math.floor(Math.random() * maxValue) + 1;
};

export const generateNewValues = (length: number, maxValue: number) => {
  const newValues = [];
  for (let i = 0; i < length; i++) {
    newValues.push(random(maxValue));
  }
  return newValues;
};
