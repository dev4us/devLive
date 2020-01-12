import { prisma } from "../../../../generated/prisma-client";

const apiDefs = `http://localhost:8000/api/streams`;

export default {
  Query: {
    GetLiveStreamers: async (_, __) => {
      try {
        const res = await fetch(apiDefs).then(res => res.json());

        if (!res.live) {
          return {
            ok: false,
            error: "방송중인 스트리머가 없습니다.",
            streamers: null
          };
        }

        let streamKeyArr = [];

        if (typeof res.live === "array") {
          res.live.map(val => {
            streamKeyArr.push(val.publisher.stream);
          });
        } else {
          const liveStreamKey = Object.keys(res.live)[0];
          streamKeyArr.push(liveStreamKey);
        }

        const liveStreamers = await prisma.users({
          where: { streamKey_in: streamKeyArr }
        });

        return {
          ok: true,
          error: null,
          streamers: liveStreamers
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          streamers: null
        };
      }
    }
  }
};
