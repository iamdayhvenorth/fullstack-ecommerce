import crypto from "crypto";

const generateOTP = (): string => {
  const token = crypto.randomInt(100000, 999999);
  return `${token}`;
};

export default generateOTP;
