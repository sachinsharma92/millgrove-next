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

export { verifyPhoneNumber };
