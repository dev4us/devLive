import gql from "graphql-tag";

// client Query & Mutation
export const IS_LOGIN = gql`
  {
    isLoggedIn @client
  }
`;

export const LOGIN = gql`
  mutation logUserIn($token: String!, $username: String!) {
    logUserIn(token: $token, username: $username) @client
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
      username
    }
  }
`;

export const SIGNUP_SERVER = gql`
  mutation SignUp($username: String!, $nickname: String!, $password: String!) {
    SignUp(username: $username, nickname: $nickname, password: $password) {
      ok
      error
    }
  }
`;

export const GET_STREAMER = gql`
  query GetStreamer($username: String!) {
    GetStreamer(username: $username) {
      ok
      error
      user {
        nickname
        status
        game
        profileImage
      }
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

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $nickname: String
    $password: String
    $profileImage: String
    $status: String
    $game: String
  ) {
    UpdateUser(
      nickname: $nickname
      password: $password
      profileImage: $profileImage
      status: $status
      game: $game
    ) {
      ok
      error
    }
  }
`;

export const GENERATE_STREAM_KEY = gql`
  mutation GenerateStreamKey {
    GenerateStreamKey {
      ok
      error
      streamKey
    }
  }
`;
