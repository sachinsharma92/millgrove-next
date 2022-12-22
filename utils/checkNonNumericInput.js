export const checkNonNumericInput = (e) => {
  //allow left,right,bakspace,delete,and numpad (96-105)
  const allowedInputs = [
    8, 46, 37, 39, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100,
    101, 102, 103, 104, 105,
  ];
  if (allowedInputs.includes(e.which)) return;
  e.preventDefault();
};
