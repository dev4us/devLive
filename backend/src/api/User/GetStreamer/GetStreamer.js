import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    GetStreamer: async (_, args) => {
      try {
        const { username } = args;
        const user = await prisma.user({ username });

        if (!user) {
          return {
            ok: false,
            error: "not exist User",
            user: null
          };
        }

        return {
          ok: true,
          error: null,
          user: user
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          user: null
        };
      }
    }
  }
};
