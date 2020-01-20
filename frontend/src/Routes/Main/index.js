import React from "react";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";

import LeftFrame from "../../Components/LeftFrame";
import StreamCard from "../../Components/StreamCard";

import {
  GET_LIVE_STREAMERS,
  GET_LIVE_STREAMERS_ON_TWITCH
} from "../../queries";

const Main = () => {
  const hlsLiveStreams = useQuery(GET_LIVE_STREAMERS);
  const twitchLiveStreams = useQuery(GET_LIVE_STREAMERS_ON_TWITCH);
  console.log(twitchLiveStreams);
  return (
    <Container>
      <LeftFrame>123</LeftFrame>
      <RightFrame>
        <Block>
          <Title>Live Streams</Title>
        </Block>
        <StreamCardList>
          {hlsLiveStreams.data &&
            hlsLiveStreams.data.GetLiveStreamers &&
            hlsLiveStreams.data.GetLiveStreamers.streamers &&
            hlsLiveStreams.data.GetLiveStreamers.streamers.length > 0 &&
            hlsLiveStreams.data.GetLiveStreamers.streamers.map((val, idx) => (
              <StreamCard
                key={idx}
                thumbnail={`http://localhost:8888/thumbnails/${val.streamKey}/thumbnail.png`}
                profileImage={val.profileImage}
                nickname={val.nickname}
                username={val.username}
                status={val.status}
                game={val.game}
                streamBy="self"
              />
            ))}
          {twitchLiveStreams.data &&
            twitchLiveStreams.data.GetLiveStreamsOnTwitch &&
            twitchLiveStreams.data.GetLiveStreamsOnTwitch.liveStreams.map(
              (val, idx) => {
                return (
                  <StreamCard
                    key={idx}
                    thumbnail={val.thumbnail}
                    profileImage={val.profileImage}
                    nickname={val.nickname}
                    username={val.username}
                    status={val.status}
                    game={val.game}
                    streamBy="twitch"
                  />
                );
              }
            )}
        </StreamCardList>
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
  padding: 15px 20px 15px 20px;
`;

const Block = styled.div`
  width: 100%;
  background: white;
  border-bottom: 1px solid #dcdcdc;
  padding: 15px 15px 12px 0px;
`;

const Title = styled.div`
  font-size: 20px;
  color: #484848;
  font-weight: bold;
`;

const StreamCardList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0px 15px 0px;
  flex-wrap: wrap;
`;
export default Main;
