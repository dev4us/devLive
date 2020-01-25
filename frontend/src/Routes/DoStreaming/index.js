import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LeftFrame from "../../Components/LeftFrame";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GENERATE_STREAM_KEY, GET_STREAM_KEY } from "../../queries";

const DoStreaming = () => {
  const [streamKey, setStreamKey] = useState("");
  const getStreamer = useQuery(GET_STREAM_KEY, {
    variables: {
      username: localStorage.getItem("username")
    }
  });

  const [generateStreamKey, { data }] = useMutation(GENERATE_STREAM_KEY);
  useEffect(() => {
    if (
      getStreamer &&
      getStreamer.data &&
      getStreamer.data.GetStreamKey &&
      getStreamer.data.GetStreamKey.ok
    ) {
      setStreamKey(getStreamer.data.GetStreamKey.streamKey);
    }
  }, [getStreamer]);
  useEffect(() => {
    if (data && data.GenerateStreamKey && data.GenerateStreamKey.ok) {
      alert("Successful generate to Streaming Key!");
      setStreamKey(data.GenerateStreamKey.streamKey);
    }
  }, [data]);

  return (
    <Container>
      <LeftFrame></LeftFrame>
      <RightFrame>
        <VerticalFrame>
          <SubTitle>Streaming Key</SubTitle>
          <InputFrame
            placeholder="streaming Key"
            value={streamKey}
            onChange={e => setStreamKey(e.target.value)}
            disabled
          ></InputFrame>
          <ButtonFrame onClick={() => generateStreamKey()}>
            GENERATE
          </ButtonFrame>
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

export default DoStreaming;
