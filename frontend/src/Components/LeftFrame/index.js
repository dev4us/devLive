import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { IS_LOGIN, LOGOUT } from "../../queries";

const LeftFrame = () => {
  const isLogged = useQuery(IS_LOGIN);
  const [setLogout] = useMutation(LOGOUT);

  return (
    <Container>
      <Link to="/">
        <Logo>DEVLIVE</Logo>
      </Link>
      <Link to="/">
        <Menu>Home</Menu>
      </Link>
      {isLogged &&
      isLogged.data &&
      isLogged.data.isLoggedIn &&
      isLogged.data.isLoggedIn === true ? (
        <>
          <Menu>Do Streaming</Menu>
          <SmallMenu
            onClick={e => {
              e.preventDefault();
              setLogout();
            }}
          >
            Logout
          </SmallMenu>
        </>
      ) : (
        <Link to="/signin">
          <SmallMenu>Login</SmallMenu>
        </Link>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  height: 100%;
  background: white;
  border-right: 1px solid #ececec;
  padding: 25px 20px 15px 25px;
`;

const Logo = styled.div`
  font-size: 35px;
  color: #484848;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Menu = styled.div`
  font-size: 20px;
  color: #484848;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
`;

const SmallMenu = styled.div`
  font-size: 14px;
  color: #888888;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
`;

export default LeftFrame;
