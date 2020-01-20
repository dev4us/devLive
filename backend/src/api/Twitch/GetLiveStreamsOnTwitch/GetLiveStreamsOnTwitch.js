require("dotenv").config();

export default {
  Query: {
    GetLiveStreamsOnTwitch: async (_, __) => {
      try {
        var headers = {
          "Client-ID": process.env.TWITCH_API_KEY,
          Accept: "application/vnd.twitchtv.v5+json"
        };

        const liveStreams = await fetch(
          "https://api.twitch.tv/kraken/streams/?limit=30",
          {
            method: "GET",
            headers: headers
          }
        ).then(res => res.json());

        let liveStreamArr = [];

        liveStreams.streams.map(val => {
          liveStreamArr.push({
            profileImage: val.channel.logo,
            username: val.channel.name,
            nickname: val.channel.display_name,
            status: val.channel.status,
            game: val.channel.game,
            thumbnail: val.preview.medium
          });
        });

        return {
          ok: true,
          error: null,
          liveStreams: liveStreamArr
        };
      } catch (error) {
        return { ok: false, error: error.message, liveStreams: null };
      }
    }
  }
};
