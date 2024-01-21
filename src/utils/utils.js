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
