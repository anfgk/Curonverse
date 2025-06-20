import React from "react";
import styled from "styled-components";

interface ResultImageExportProps {
  userName: string;
  emotionCode: string;
  temperature: number;
  rhythmDescription: string;
  temperatureDescription: string;
}

const ResultImageExport = ({
  userName,
  emotionCode,
  temperature,
  rhythmDescription,
  temperatureDescription,
}: ResultImageExportProps) => {
  return (
    <Container>
      <Header>
        현재 {userName}님은, '{emotionCode}' 감정 성향을 가지고 있어요.
      </Header>
      <SubText>{rhythmDescription}</SubText>
      <Card>
        <Circle>🌕</Circle>
        <Temperature>{temperature.toFixed(1)}℃</Temperature>
      </Card>
      <DescriptionBlock>
        <Label>나의 감정 리듬</Label>
        <Description>{rhythmDescription}</Description>

        <Label>현재 나의 감정 온도</Label>
        <Description>{temperatureDescription}</Description>
      </DescriptionBlock>
    </Container>
  );
};

export default ResultImageExport;

const Container = styled.div`
  width: 375px;
  padding: 24px;
  background: #e2f1f7;
  font-family: sans-serif;
`;

const Header = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const SubText = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

const Card = styled.div`
  width: 100%;
  background: #b8e0ef;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 20px;
`;

const Circle = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
`;

const Temperature = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const DescriptionBlock = styled.div`
  margin-top: 16px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-top: 12px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;
