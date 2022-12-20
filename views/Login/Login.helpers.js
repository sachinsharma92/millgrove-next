import axios from "axios";
import { apiKey, baseUrl } from "../../utils/constants";

const verifyPhoneNumber = async ({ e, phoneNos }) => {
  e.preventDefault();
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

const isPhoneNosValid = (phoneNos = "") => {
  if (!phoneNos) return false;
  if (phoneNos.slice(0, 3) === "+91") {
    if (phoneNos.slice(3).length === 10) return true;
    return false;
  }
  return true;
};

export { verifyPhoneNumber, isPhoneNosValid };
