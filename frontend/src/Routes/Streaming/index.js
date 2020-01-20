import React from "react";
import styled from "styled-components";
import LeftFrame from "../../Components/LeftFrame";

import { withRouter } from "react-router-dom";
import HLSPlayer from "../../Components/HLSPlayer";

const Streaming = ({ match }) => {
  const matchSplit = match.url.split("/");
  const streamType = matchSplit[1];
  const channelName = matchSplit[2];

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
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
          ></iframe>
        )}
        {streamType === "self" && (
          <HLSPlayer
            autoplay={true}
            controls={true}
            width="100%"
            height="80%"
            src={`http://localhost:8000/live/xbdkj3aimg/index.m3u8`}
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
