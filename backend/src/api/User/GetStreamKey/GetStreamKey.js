import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    GetStreamKey: async (_, args) => {
      try {
        const { username } = args;

        const user = await prisma.user({ username });

        if (!user) {
          return {
            ok: false,
            error: "존재하지 않는 유저입니다.",
            streamKey: null
          };
        }

        return {
          ok: true,
          error: null,
          streamKey: user.streamKey
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          streamKey: null
        };
      }
    }
  }
};
