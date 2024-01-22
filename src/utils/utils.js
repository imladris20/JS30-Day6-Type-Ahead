export const addCommasToNumber = (num) => {
  if (num) {
    const stringifiedNumber = num.toString();
    const formattedNumber = stringifiedNumber.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ",",
    );
    return formattedNumber;
  }
};

export const debounce = (cbfn, delay) => {
  let timer;

  function inner(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cbfn(...args);
    }, delay);
  }

  return inner;
};
