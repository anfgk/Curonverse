"use client";

import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  margin-left: 20px;
  font-size: 24px;
`;

const MainTitle = styled.div`
  font-weight: 700;
`;

const SubTitle = styled.div`
  font-weight: 400;
  span {
    font-weight: 700;
  }
`;

interface TitleProps {
  mainText: string;
  subText: string;
  highlightText: string;
}

const Title = ({ mainText, subText, highlightText }: TitleProps) => {
  return (
    <TitleWrapper>
      <MainTitle>{mainText}</MainTitle>
      <SubTitle>
        <span>{highlightText}</span>
        {subText}
      </SubTitle>
    </TitleWrapper>
  );
};

export default Title;
