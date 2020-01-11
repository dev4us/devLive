import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    GetStreamer: async (_, args) => {
      try {
        const { streamKey } = args;
        const streamer = await prisma.user({ streamKey });

        if (!streamer) {
          return {
            ok: false,
            error: "해당 스트리머는 방송 중이 아니거나 등록되지 않았습니다.",
            user: null
          };
        }

        return {
          ok: true,
          error: null,
          user: streamer
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
