import React from "react";
import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const StreamCard = ({
  nickname,
  username,
  thumbnail,
  profileImage,
  streamBy
}) => {
  return (
    <>
      <Container>
        <Link to={`/${streamBy}/${username}`}>
          <Thumbnail backgroundURL={thumbnail}>
            <Airon>LIVE</Airon>
            <Profile
              isGotProfileImage={profileImage}
            >{`${nickname} (${username})`}</Profile>
            <ProfileImage backgroundURL={profileImage}></ProfileImage>
          </Thumbnail>
        </Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  min-width: 204px;
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

const Airon = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background: red;
  color: white;
  padding: 5px 8px 5px 8px;
  border-radius: 5px;
  font-size: 10px;
`;

const Profile = styled.div`
  position: absolute;
  bottom: 5px;
  left: 60px;
  background: #585858ad;
  color: white;
  padding: 5px 5px 5px 5px;
  font-size: 12px;

  ${props =>
    props.isGotProfileImage === null &&
    css`
      left: 5px;
    `}
`;

const ProfileImage = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 50px;
  height: 50px;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  border-radius: 15%;
`;
export default StreamCard;
