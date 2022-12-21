export const isPhoneNosValid = (phoneNos = "", dialCode = "91") => {
  if (!phoneNos || !dialCode) return false;
  if (dialCode === "91") {
    if (phoneNos.length === 10) return true;
    return false;
  }
  return true;
};
