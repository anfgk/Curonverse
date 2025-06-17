import React from "react";
import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";

interface AnalysisProps {
  expression: number;
  recognition: number;
}

const Container = styled.div`
  padding: 20px;
  background-color: #393939;
`;

const Title = styled.div`
  font-size: 18px;
  color: white;
  margin-bottom: 24px;
`;

const AnalysisItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const Icon = styled.div`
  color: #f47b56;
  margin-right: 12px;
  margin-top: 4px;
`;

const Text = styled.div`
  color: white;
  font-size: 14px;
  line-height: 1.5;
`;

const TemperatureAnalysis: React.FC<AnalysisProps> = ({
  expression,
  recognition,
}) => {
  return (
    <Container>
      <Title>감정 온도 상세 분석</Title>
      <AnalysisItem>
        <Icon>
          <FaArrowRightLong />
        </Icon>
        <Text>
          전체 감정탐험자 대비 상위 {expression}%로
          <br />
          감정 표현을 어려워해요.
        </Text>
      </AnalysisItem>
      <AnalysisItem>
        <Icon>
          <FaArrowRightLong />
        </Icon>
        <Text>
          전체 감정탐험자 대비 상위 {recognition}%로
          <br />
          감정 인지를 어려워해요.
        </Text>
      </AnalysisItem>
    </Container>
  );
};

export default TemperatureAnalysis;
