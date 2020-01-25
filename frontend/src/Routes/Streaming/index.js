import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";

import styled from "styled-components";
import LeftFrame from "../../Components/LeftFrame";
import HLSPlayer from "../../Components/HLSPlayer";
import { GET_STREAM_KEY } from "../../queries";

const Streaming = ({ match }) => {
  const matchSplit = match.url.split("/");
  const streamType = matchSplit[1];
  const channelName = matchSplit[2];

  const getStreamKey = useQuery(GET_STREAM_KEY, {
    variables: { username: channelName }
  });

  return (
    <Container>
      <LeftFrame>123</LeftFrame>
      <RightFrame>
        <ChannelName>{`Welcome to ${channelName}'s streaming!`}</ChannelName>
        <hr />
        {streamType === "twitch" && (
          <iframe
            title="twitch streaming"
            src={`https://player.twitch.tv/?channel=${channelName}&muted=false`}
            width="100%"
            height="80%"
            frameBorder="0"
            scrolling="no"
            allowFullScreen={true}
          ></iframe>
        )}
        {streamType === "self" &&
          getStreamKey.loading === false &&
          getStreamKey.data &&
          getStreamKey.data.GetStreamKey &&
          getStreamKey.data.GetStreamKey.ok === true &&
          getStreamKey.data.GetStreamKey.streamKey !== null && (
            <HLSPlayer
              autoplay={true}
              controls={true}
              width="90%"
              height="80%"
              src={`http://localhost:8000/live/${getStreamKey.data.GetStreamKey.streamKey}/index.m3u8`}
            ></HLSPlayer>
          )}
      </RightFrame>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const RightFrame = styled.div`
  flex: 1;
  height: 100%;
  padding: 25px 20px 15px 25px;
`;

const ChannelName = styled.div`
  font-size: 35px;
  color: #484848;
  font-weight: bold;
  margin-bottom: 5px;
`;

export default withRouter(Streaming);
