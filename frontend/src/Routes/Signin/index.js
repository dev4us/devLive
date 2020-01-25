import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";

import styled from "styled-components";
import LeftFrame from "../../Components/LeftFrame";
import { Link } from "react-router-dom";
import { LOGIN_SERVER, LOGIN } from "../../queries";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginServer, { data }] = useMutation(LOGIN_SERVER);
  const [loginLocal] = useMutation(LOGIN);

  const tryLogin = () => {
    loginServer({ variables: { username: username, password: password } });
  };

  useEffect(() => {
    if (data && data.SignIn && data.SignIn.ok) {
      loginLocal({ variables: { token: data.SignIn.token } });
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
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></InputFrame>
          <ButtonFrame
            onClick={() => {
              tryLogin();
            }}
          >
            SIGN IN
          </ButtonFrame>
          {data && data.SignIn && !data.SignIn.ok && (
            <Log>{data.SignIn.error}</Log>
          )}
          <LetterBtn>I Don't have a account</LetterBtn>
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
`;

const Log = styled.span`
  font-size: 8px;
  color: red;
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
`;

const LetterBtn = styled.span`
  font-size: 12px;
  color: #484848;
  text-align: center;
  text-decoration: underline;
`;

export default Signin;
