import React from "react";
import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
import { CurationIcon } from "@/styles/ResultPageStyles";

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
        현재 {userName}님은, '{emotionCode}' 감정
        <br /> 성향을 가지고 있어요.
      </Header>
      <SubText>{rhythmDescription}</SubText>
      <Card>
        <Circle>🌕</Circle>
        <Temperature>{temperature.toFixed(1)}℃</Temperature>
      </Card>
      <DescriptionBlock>
        <Des>
          <DescriptionText>
            <CurationIcon>
              <FaArrowRightLong />
            </CurationIcon>
            <Label>나의 감정 리듬</Label>
          </DescriptionText>
          <Description>{rhythmDescription}</Description>
        </Des>
        <TemperatureDes>
          <DescriptionText>
            <CurationIcon>
              <FaArrowRightLong />
            </CurationIcon>
            <Label>현재 나의 감정 온도</Label>
          </DescriptionText>
          <Description>{temperatureDescription}</Description>
        </TemperatureDes>
      </DescriptionBlock>
    </Container>
  );
};

export default ResultImageExport;

const Container = styled.div`
  width: 375px;
  padding: 58px 20px;
  background: #98c6d0;
  font-family: sans-serif;
`;

const Header = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const SubText = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
`;

const Card = styled.div`
  width: 234px;
  height: 328px;
  background: linear-gradient(180deg, #49bfd5 0%, #c3d4ff 100%);
  border-radius: 12px;
  margin-left: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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

const Des = styled.div`
  border-bottom: 0.5px solid #d9d9d9;
  border-top: 0.5px solid #d9d9d9;
  padding: 16px 12px;
`;

const TemperatureDes = styled.div`
  padding: 16px 12px;
`;

const DescriptionText = styled.div`
  display: flex;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.4;
  padding: 0 30px;
`;
