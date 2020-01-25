import { prisma } from "../../../../generated/prisma-client";
import { encryptPwd } from "../../../helpers/password";

export default {
  Mutation: {
    UpdateUser: async (_, args, { request, verifyAuth }) => {
      try {
        verifyAuth(request);
        const { nickname, password, profileImage, status, game } = args;
        const { user } = request;

        const encryptedPwd = await encryptPwd(password);

        await prisma.updateUser({
          data: {
            nickname,
            password: encryptedPwd,
            profileImage,
            status,
            game
          },
          where: { id: user.id }
        });

        return {
          ok: true,
          error: null
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};
