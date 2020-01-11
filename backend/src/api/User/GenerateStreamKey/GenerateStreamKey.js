import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    GenerateStreamKey: async (_, __, { request, verifyAuth }) => {
      try {
        verifyAuth(request);
        const { user } = request;
        const streamKey = Math.random()
          .toString(36)
          .substr(2);

        await prisma.updateUser({
          data: {
            streamKey
          },
          where: {
            id: user.id
          }
        });

        return {
          ok: true,
          error: null,
          streamKey
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
