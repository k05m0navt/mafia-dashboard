export const createBackgroundColorCalculator = (
  color: number,
  min: number,
  max: number
): Function => {
  const range = max - min;

  return (value: number): string => {
    value = value > max ? max : value < min ? min : value;
    
    const normalizedValue = ((value - min) / range) * 100;
    const backgroundColor = `hsl(${color}, 100%, ${100 - normalizedValue}%)`;

    return backgroundColor;
  };
};
