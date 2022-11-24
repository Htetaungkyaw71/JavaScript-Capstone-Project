export const counter = (data) => {
  if (data) {
    return data.length;
  }

  return 0;
};

export const increaseCount = (index) => {
  index += 1;
  return index;
};