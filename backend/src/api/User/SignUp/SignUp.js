import { prisma } from "../../../../generated/prisma-client";
import { encryptPwd } from "../../../helpers/password";

export default {
  Mutation: {
    SignUp: async (_, args) => {
      const { username, nickname, password } = args;
      const encryptedPwd = await encryptPwd(password);
      const user = await prisma.createUser({
        username,
        nickname,
        password: encryptedPwd
      });

      if (user) {
        return {
          ok: true,
          error: null
        };
      }
    }
  }
};
