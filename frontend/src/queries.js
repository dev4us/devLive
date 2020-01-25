import gql from "graphql-tag";

// client Query & Mutation
export const IS_LOGIN = gql`
  {
    isLoggedIn @client
  }
`;

export const LOGIN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;
export const LOGOUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

export const LOGIN_SERVER = gql`
  mutation SignIn($username: String!, $password: String!) {
    SignIn(username: $username, password: $password) {
      ok
      error
      token
    }
  }
`;
// to Server Query & Mutation
export const GET_LIVE_STREAMERS = gql`
  query {
    GetLiveStreamers {
      ok
      error
      streamers {
        username
        nickname
        status
        game
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
        status
        game
        thumbnail
      }
    }
  }
`;

export const GET_STREAM_KEY = gql`
  query GetStreamKey($username: String!) {
    GetStreamKey(username: $username) {
      ok
      error
      streamKey
    }
  }
`;
