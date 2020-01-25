import { prisma } from "../../../../generated/prisma-client";
import { encryptPwd } from "../../../helpers/password";

export default {
  Mutation: {
    UpdateUser: async (_, args, { request, verifyAuth }) => {
      try {
        verifyAuth(request);
        const { nickname, password, profileImage, status, game } = args;
        const { user } = request;
        let data = new Object();

        if (password) {
          const encryptedPwd = await encryptPwd(password);
          data = {
            nickname,
            password: encryptedPwd,
            profileImage,
            status,
            game
          };
        } else {
          data = {
            nickname,
            profileImage,
            status,
            game
          };
        }

        await prisma.updateUser({
          data,
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
