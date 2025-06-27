"use client";

import styled from "styled-components";

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 31px;
`;

const HighlightText = styled.span<{ $isFocused: boolean }>`
  color: ${(props) => (props.$isFocused ? "#CB59FF" : "#CB59FF")};
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;
`;

const NormalText = styled.span<{ $isFocused: boolean }>`
  color: ${(props) => (props.$isFocused ? "#000" : "#fff")};
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;
`;

interface QuesBadgeProps {
  currentQues: number;
  totalQues: number;
  isFocused: boolean;
}

const QuesBadge = ({ currentQues, totalQues, isFocused }: QuesBadgeProps) => {
  return (
    <BadgeContainer>
      <HighlightText $isFocused={isFocused}>{currentQues}</HighlightText>
      <NormalText $isFocused={isFocused}>/{totalQues}</NormalText>
    </BadgeContainer>
  );
};

export default QuesBadge;
