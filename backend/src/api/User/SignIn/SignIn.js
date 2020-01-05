import { prisma } from "../../../../generated/prisma-client";
import { comparePwd } from "../../../helpers/password";
import { generateToken } from "../../../helpers/passport";

export default {
  Query: {
    SignIn: async (_, args) => {
      try {
        const { username, password } = args;

        const user = await prisma.user({ username });

        if (!user) {
          return {
            ok: false,
            error: "No exist User, SignUp first",
            token: null
          };
        }

        if (comparePwd(password, user.password)) {
          return {
            ok: true,
            error: null,
            token: await generateToken(user.id)
          };
        } else {
          return {
            ok: false,
            error: "Passwords do not match",
            token: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};
