import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const StreamCard = ({
  nickname,
  username,
  thumbnail,
  profileImage,
  status,
  game,
  streamBy
}) => {
  return (
    <>
      <Container>
        <Link to={`/${streamBy}/${username}`}>
          <Thumbnail backgroundURL={thumbnail}>
            <OnAir>LIVE</OnAir>
          </Thumbnail>
          <ProfileCard>
            <ProfileImage backgroundURL={profileImage}></ProfileImage>
            <ProfileText>
              <StreamName>{status}</StreamName>
              <StreamerName>{`${nickname}(${username})`}</StreamerName>
              <KindOfGame>{game}</KindOfGame>
            </ProfileText>
          </ProfileCard>
        </Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  min-width: 330px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1725);
    opacity: 0.8;
  }
`;

const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 70%;
  border: 1px solid #ececec;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
`;

const OnAir = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background: red;
  color: white;
  padding: 5px 8px 5px 8px;
  border-radius: 5px;
  font-size: 10px;
`;

const ProfileCard = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  padding-top: 15px;
  padding-left: 15px;
`;

const ProfileImage = styled.div`
  min-width: 50px;
  height: 50px;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  border-radius: 100%;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;

const StreamName = styled.div`
  font-size: 14px;
  max-width: 280px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 60px;
`;

const StreamerName = styled.div`
  font-size: 12px;
  color: #53535f;
  padding-top: 5px;
  padding-bottom: 3px;
`;

const KindOfGame = styled.div`
  font-size: 12px;
  color: #53535f;
`;

export default StreamCard;
