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
