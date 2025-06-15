"use client";

import React from "react";
import styled from "styled-components";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-left: 20px;
  font-size: 16px;
`;

const MainTitle = styled.div`
  font-weight: bold;
`;

interface InfoProps {
  mainText: string;
}

const Info = ({ mainText }: InfoProps) => {
  return (
    <InfoWrapper>
      <MainTitle>{mainText}</MainTitle>
    </InfoWrapper>
  );
};

export default Info;
