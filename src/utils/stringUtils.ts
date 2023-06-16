export const addNumberSign = (num, addSpace = false) => {
  if (addSpace) {
    return `${num < 0 ? '-' : '+'} ${Math.abs(num)}`;
  }

  return num < 0 ? num.toString() : `+${num}`;
};
