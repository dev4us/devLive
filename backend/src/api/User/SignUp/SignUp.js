import { prisma } from "../../../../generated/prisma-client";
import { encrypt } from "../../../helpers/password";

export default {
  Mutation: {
    SignUp: async (_, args) => {
      const { username, nickname, password } = args;
      const encryptPwd = await encrypt(password);
      const user = await prisma.createUser({
        username,
        nickname,
        password: encryptPwd
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
