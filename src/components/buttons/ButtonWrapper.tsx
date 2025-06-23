"use client";

import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: auto ;
  padding: 20px 0;
  @media (max-width: 375px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 24px;
  }
`;

interface ButtonWrapperProps {
  children: React.ReactNode;
}

const ButtonWrapper = ({ children }: ButtonWrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ButtonWrapper;
