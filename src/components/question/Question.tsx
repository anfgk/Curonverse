"use client";

import styled from "styled-components";

const QuestionText = styled.div<{ $isFocused: boolean }>`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.$isFocused ? "#000" : "#fff")};
  padding-top: 12px;
  text-align: center;
  transition: color 0.3s ease;
`;

const QuesTitle = styled.div``;

interface QuestionProps {
  text: string;
  isFocused: boolean;
}

const Question = ({ text, isFocused }: QuestionProps) => {
  return (
    <QuestionText $isFocused={isFocused}>
      <QuesTitle>{text}</QuesTitle>
    </QuestionText>
  );
};

export default Question;
