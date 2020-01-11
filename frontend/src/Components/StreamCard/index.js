import React from "react";
import styled from "styled-components";

const StreamCard = ({ nickname, username, thumbnail }) => {
  return (
    <>
      <Container>
        <Thumbnail backgroundURL={thumbnail}>
          <Airon>LIVE</Airon>
          <Profile>{`${nickname} (${username})`}</Profile>
        </Thumbnail>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  cursor: pointer;

  &:hover {
    border: 3px solid #ca74c3;
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
  right: 5px;
  background: #585858ad;
  color: white;
  padding: 5px 5px 5px 5px;
  font-size: 12px;
`;

export default StreamCard;
