import React from "react";
import styled from "styled-components";

const LeftFrame = () => {
  return (
    <Container>
      <Logo>DEVLIVE</Logo>
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
`;

export default LeftFrame;
