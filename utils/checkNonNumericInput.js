export const checkNonNumericInput = (e) => {
  //allow left,right,bakspace,delete
  if (e.which === 8 || e.which === 46 || e.which === 37 || e.which === 39)
    return;
  if (e.which < 48 || e.which > 57) {
    e.preventDefault();
  }
};
