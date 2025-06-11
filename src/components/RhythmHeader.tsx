import React from "react";
import styled from "styled-components";
import { Header, PageNumber, MainTitle } from "@/styles/ResultPageStyles";

const WhitePageNumber = styled(PageNumber)`
  color: white;
`;

const WhiteMainTitle = styled(MainTitle)`
  color: white;
  font-size: 24px;
`;

const RhythmDescription = styled.div`
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
  white-space: pre-line;
  text-align: center;
`;

interface RhythmHeaderProps {
  userName: string;
  currentMBTI: string;
  mbtiRhythms: Record<string, string>;
  mbtiRhythmDescriptions: Record<string, string>;
}

const RhythmHeader: React.FC<RhythmHeaderProps> = ({
  userName,
  currentMBTI,
  mbtiRhythms,
  mbtiRhythmDescriptions,
}) => {
  return (
    <Header>
      <WhitePageNumber>02</WhitePageNumber>
      <WhiteMainTitle>
        이러한 {userName}님의 감정은,
        <br />'{mbtiRhythms[currentMBTI]}' 리듬
        <br />
        위에 머무르고 있어요.
      </WhiteMainTitle>
      <RhythmDescription>
        {mbtiRhythmDescriptions[mbtiRhythms[currentMBTI]]}
      </RhythmDescription>
    </Header>
  );
};

export default RhythmHeader;
