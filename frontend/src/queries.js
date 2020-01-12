import gql from "graphql-tag";

export const GET_LIVE_STREAMERS = gql`
  query {
    GetLiveStreamers {
      ok
      error
      streamers {
        username
        nickname
        streamKey
        profileImage
      }
    }
  }
`;

export const GET_LIVE_STREAMERS_ON_TWITCH = gql`
  query {
    GetLiveStreamsOnTwitch {
      ok
      error
      liveStreams {
        username
        nickname
        streamKey
        profileImage
        thumbnail
      }
    }
  }
`;
