import { prisma } from "../../../../generated/prisma-client";
import { comparePwd } from "../../../helpers/password";
import { generateToken } from "../../../helpers/passport";

export default {
  Mutation: {
    SignIn: async (_, args) => {
      try {
        const { username, password } = args;

        const user = await prisma.user({ username });

        if (!user) {
          return {
            ok: false,
            error: "No exist User, SignUp first",
            token: null,
            username: null
          };
        }

        if (await comparePwd(password, user.password)) {
          return {
            ok: true,
            error: null,
            token: await generateToken(user.id),
            username
          };
        } else {
          return {
            ok: false,
            error: "Passwords do not match",
            token: null,
            username: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
          username: null
        };
      }
    }
  }
};
