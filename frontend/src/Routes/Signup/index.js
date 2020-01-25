import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";

import styled from "styled-components";
import LeftFrame from "../../Components/LeftFrame";
import { Link } from "react-router-dom";
import { SIGNUP_SERVER } from "../../queries";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [signupServer, { data }] = useMutation(SIGNUP_SERVER);

  const trySignUp = () => {
    if (username === "" || nickname === "" || password === "") {
      alert("Please enter your account information required.");
      return false;
    }
    signupServer({
      variables: { username: username, password: password, nickname: nickname }
    });
  };

  useEffect(() => {
    if (data && data.SignUp && data.SignUp.ok) {
      window.location = "/";
    }
  }, [data]);

  return (
    <Container>
      <LeftFrame></LeftFrame>
      <RightFrame>
        <VerticalFrame>
          <Link to="/">
            <Logo>DEVLIVE</Logo>
          </Link>
          <InputFrame
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          ></InputFrame>
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
          <ButtonFrame
            onClick={() => {
              trySignUp();
            }}
          >
            SIGN UP
          </ButtonFrame>
          {data && data.SignUp && !data.SignUp.ok && (
            <Log>{data.SignUp.error}</Log>
          )}
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

const Logo = styled.div`
  font-size: 35px;
  color: #484848;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
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

const Log = styled.span`
  font-size: 8px;
  color: red;
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
`;

export default Signup;
