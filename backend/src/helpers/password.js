import bcrypt from "bcrypt";
import "../env";

export const encryptPwd = planPwd => {
  return bcrypt.hash(planPwd, process.env.ROUND_ENCRYPT || 10);
};

export const comparePwd = (planPwd, encryptedPwd) => {
  return bcrypt.compare(planPwd, encryptedPwd);
};
