import React from "react";
import styled from "styled-components";
import {
  getTemperaturePercentage,
  getRhythmColor,
  RhythmName,
} from "@/data/temperatureData";

interface TemperatureCardProps {
  temperature: number;
  rhythmName: RhythmName;
  minTemp?: number;
  maxTemp?: number;
}

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  color: #4b4b4b;
  font-size: 12px;
  font-weight: bold;
`;

const Title = styled.div`
  font-size: 12px;
  display: flex;
  gap: 70px;
`;

const Description = styled.div`
  line-height: 1.5;
`;

const Value = styled.div<{ color: string }>`
  font-size: 48px;
  color: ${(props) => props.color};
  font-weight: bold;
  margin: 16px 0;
`;

const Slider = styled.div<{ percentage: number; gradient: string }>`
  width: 301px;
  height: 37px;
  background: #e6e6e6;
  border-radius: 18px;
  position: relative;
  margin: 16px 0;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: ${(props) => props.percentage}%;
    height: 100%;
    background: ${(props) => props.gradient};
    border-radius: 18px;
    transition: all 0.3s ease;
  }
`;

const Range = styled.div`
  display: flex;
  justify-content: space-between;
  color: #393939;
  font-size: 14px;
  font-weight: 300;
`;

const Label = styled.div`
  text-align: center;
  color: #fff;
  font-size: 12px;
  margin-top: 12px;
  font-weight: bold;
`;

const TemperatureCard: React.FC<TemperatureCardProps> = ({
  temperature,
  rhythmName,
  minTemp = 35,
  maxTemp = 39,
}) => {
  const percentage = getTemperaturePercentage(temperature);
  const rhythmColor = getRhythmColor(rhythmName);

  return (
    <>
      <Card>
        <Title>
          감정 온도계
          <Description>
            온도가 낮을수록 감정에 무감각하고,
            <br />
            높을수록 감정을 버거워해요.
          </Description>
        </Title>
        <Value color={rhythmColor.main}>{temperature}°C</Value>
        <Slider percentage={percentage} gradient={rhythmColor.gradient} />
        <Range>
          <span>{minTemp}°C</span>
          <span>{maxTemp}°C</span>
        </Range>
      </Card>
      <Label>현재 나의 감정 온도</Label>
    </>
  );
};

export default TemperatureCard;
