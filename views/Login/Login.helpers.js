import axios from "axios";
import { apiKey, baseUrl } from "../../utils/constants";

const verifyPhoneNumber = async (phoneNos) => {
  // e.preventDefault();
  try {
    const res = await axios.post(
      `${baseUrl}/client/login`,
      {
        phone: phoneNos,
      },
      {
        headers: {
          "rest-api-key": apiKey,
        },
      }
    );
    if (res.status === 200) {
      return { success: true, otpToken: res.data.data.otpToken };
    } else {
      return { success: false };
    }
  } catch (err) {
    console.log(err);
  }
};

const isPhoneNosValid = (phoneNos = "", dialCode = "+91") => {
  if (!phoneNos || !dialCode) return false;
  if (dialCode === "91") {
    if (phoneNos.length === 10) return true;
    return false;
  }
  return true;
};

export { verifyPhoneNumber, isPhoneNosValid };
