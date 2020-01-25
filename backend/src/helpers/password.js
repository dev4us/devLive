import bcrypt from "bcrypt";
import "../env";

export const encryptPwd = async planPwd => {
  return bcrypt.hash(planPwd, process.env.ROUND_ENCRYPT.parseInt || 8);
};

export const comparePwd = (planPwd, encryptedPwd) => {
  return bcrypt.compare(planPwd, encryptedPwd);
};
