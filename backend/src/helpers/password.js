import bcrypt from "bcrypt";
import "../env";

export const encrypt = planPwd => {
  const nextHash = bcrypt.hash(planPwd, process.env.ROUND_ENCRYPT || 10);
  return nextHash;
};

export const compare = (planPwd, encryptPwd) => {
  return bcrypt.compare(planPwd, encryptPwd);
};
