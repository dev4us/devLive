import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import LeftFrame from "../../Components/LeftFrame";
import { GET_STREAMER, UPDATE_USER } from "../../queries";
import { useQuery, useMutation } from "@apollo/react-hooks";

const Setting = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [streamName, setStreamName] = useState("");
  const [category, setCategory] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const getStreamer = useQuery(GET_STREAMER, {
    variables: {
      username: localStorage.getItem("username")
    }
  });

  let reqModify = {
    nickname,
    status: streamName,
    game: category,
    profileImage
  };

  const [modifyStreamer, { data }] = useMutation(UPDATE_USER, {
    variables: reqModify
  });

  const modifyConfirm = () => {
    if (password !== "") {
      reqModify["password"] = password;
    }
    modifyStreamer();
  };

  useEffect(() => {
    if (
      getStreamer &&
      getStreamer.data &&
      getStreamer.data.GetStreamer &&
      getStreamer.data.GetStreamer.ok &&
      getStreamer.data.GetStreamer.user
    ) {
      setNickname(getStreamer.data.GetStreamer.user.nickname);
      setStreamName(getStreamer.data.GetStreamer.user.status);
      setCategory(getStreamer.data.GetStreamer.user.game);
      setProfileImage(getStreamer.data.GetStreamer.user.profileImage);
    }
  }, [getStreamer]);

  if (data && data.UpdateUser && data.UpdateUser.ok) {
    alert("Account has been modified!");
    window.location = "/";
  }

  const UploadImage = async file => {
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("api_key", "221794274994255");
    formData.append("upload_preset", "ged98lsn");
    formData.append("timestamp", String(Date.now() / 1000));

    const {
      data: { secure_url }
    } = await axios.post(
      "https://api.cloudinary.com/v1_1/ged98lsn/image/upload",
      formData
    );

    setProfileImage(secure_url);
  };

  return (
    <Container>
      <LeftFrame></LeftFrame>
      <RightFrame>
        <VerticalFrame>
          <ProfileImage imgUrl={profileImage}>
            <SwitchImage htmlFor="fileUploader">
              Click to switch your Avatar
            </SwitchImage>
          </ProfileImage>
          <FormFrame
            id="fileUploader"
            type="file"
            onChange={e => UploadImage(e.target.files)}
          ></FormFrame>
          <SubTitle>Account</SubTitle>
          <InputFrame
            placeholder="nickname"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
          ></InputFrame>
          <InputFrame
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></InputFrame>
          <SubTitle>Streaming</SubTitle>
          <InputFrame
            placeholder="Stream Name"
            value={streamName}
            onChange={e => setStreamName(e.target.value)}
          ></InputFrame>
          <InputFrame
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          ></InputFrame>
          <ButtonFrame onClick={() => modifyConfirm()}>CONFIRM</ButtonFrame>
        </VerticalFrame>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  padding: 25px 20px 15px 25px;
`;

const VerticalFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const SubTitle = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #484848;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const InputFrame = styled.input`
  width: 100%;
  height: 45px;
  font-size: 14px;
  padding-left: 15px;
  color: #484848;
  margin-bottom: 8px;
`;

const ButtonFrame = styled.button`
  width: 100%;
  height: 45px;
  background: #484848;
  color: white;
  font-size: 16px;
  letter-spacing: 2px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const SwitchImage = styled.label`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #ececec;
  opacity: 0.6;
  cursor: pointer;
`;

const ProfileImage = styled.div`
  &:hover ${SwitchImage} {
    display: flex;
  }
  width: 100%;
  height: 300px;
  margin-bottom: 8px;

  ${props =>
    props.imgUrl === "" &&
    css`
      background: url("https://github.com/dev4us/source_warehouse/blob/master/images/avatar.png?raw=true");
    `}

  ${props =>
    props.imgUrl !== "" &&
    css`
      background: url(${props.imgUrl});
    `}
  background-size: cover;
  background-repeat: none;
`;

const FormFrame = styled.input`
  display: none;
`;
export default Setting;
