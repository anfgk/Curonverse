import React from "react";
import styled from "styled-components";
import {
  getTemperaturePercentage,
  RHYTHM_COLORS,
  temperatureData,
} from "@/data/temperatureData";
import { RhythmName } from "@/data/types";

interface TemperatureCardProps {
  rhythmName: RhythmName;
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

const SliderWrapper = styled.div`
  position: relative;
  width: 301px;
  height: 37px;
`;

const Slider = styled.div<{ percentage: number; gradient: string }>`
  width: 100%;
  height: 100%;
  background: #e6e6e6;
  border-radius: 18px;
  position: relative;
  overflow: scroll;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: ${(props) => props.percentage}%;
    height: 100%;
    background: ${(props) => props.gradient};
    border-radius: 18px 0 0 18px;
    transition: all 0.3s ease;
    z-index: 1;
  }
`;

const Arrow = styled.div<{ percentage: number }>`
  position: absolute;
  top: -10px;
  left: calc(${(props) => props.percentage}% - 11px);
  width: 21px;
  height: 21px;
  display: flex;
  justify-content: center;
  z-index: 2;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 14px solid #4b4b4b;
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

const TemperatureCard: React.FC<TemperatureCardProps> = ({ rhythmName }) => {
  const { temperature, description } = temperatureData[rhythmName];
  const { main, gradient } = RHYTHM_COLORS[rhythmName];
  const percentage = getTemperaturePercentage(temperature);

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
        <Value color={main}>{temperature}°C</Value>
        <SliderWrapper>
          <Slider percentage={percentage} gradient={gradient} />
          <Arrow percentage={percentage} />
        </SliderWrapper>
        <Range>
          <span>35°C</span>
          <span>39°C</span>
        </Range>
      </Card>
      <Label>현재 나의 감정 온도</Label>
    </>
  );
};

export default TemperatureCard;
