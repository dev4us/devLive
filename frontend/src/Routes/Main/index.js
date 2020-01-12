import React from "react";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";

import LeftFrame from "../../Components/LeftFrame";
import StreamCard from "../../Components/StreamCard";

import { GET_LIVE_STREAMERS } from "../../queries";

const Main = () => {
  const { data } = useQuery(GET_LIVE_STREAMERS);
  console.log(data);
  return (
    <Container>
      <LeftFrame>123</LeftFrame>
      <RightFrame>
        <Block>
          <Title>Top Rated</Title>
        </Block>
        <StreamCardList>
          {data &&
            data.GetLiveStreamers &&
            data.GetLiveStreamers.streamers &&
            data.GetLiveStreamers.streamers.length > 0 &&
            data.GetLiveStreamers.streamers.map((val, idx) => (
              <StreamCard
                key={idx}
                thumbnail={`http://localhost:8888/thumbnails/${val.streamKey}/thumbnail.png`}
                profileImage={val.profileImage}
                nickname={val.nickname}
                username={val.nickname}
              />
            ))}
          <StreamCard
            thumbnail="http://localhost:8888/thumbnails/xbdkj3aimg/thumbnail.png"
            nickname="덜렁이"
            username="dev4us"
          />
          <StreamCard
            thumbnail="http://localhost:8888/thumbnails/xbdkj3aimg/thumbnail.png"
            nickname="덜렁이"
            username="dev4us"
          />
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
`;
export default Main;
