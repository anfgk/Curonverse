import React from "react";
import styled from "styled-components";

interface CircleProps {
  top: string;
  left?: string;
  right?: string;
  color: string;
  isSelected?: boolean;
}

interface TemperatureCircleProps extends CircleProps {
  rhythmName: string;
  temperature: string;
  onClick?: () => void;
}

const Circle = styled.div<CircleProps>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isSelected ? "scale(1.1)" : "scale(1)")};
  box-shadow: ${(props) =>
    props.isSelected ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none"};

  &:hover {
    transform: scale(1.05);
  }
`;

const RhythmName = styled.div`
  font-size: 12px;
  color: #1a1a1a;
  margin-bottom: 4px;
  text-align: center;
`;

const Temperature = styled.div`
  font-size: 10px;
  color: #666666;
`;

const TemperatureCircle: React.FC<TemperatureCircleProps> = ({
  top,
  left,
  right,
  color,
  rhythmName,
  temperature,
  isSelected,
  onClick,
}) => {
  return (
    <Circle
      top={top}
      left={left}
      right={right}
      color={color}
      isSelected={isSelected}
      onClick={onClick}
    >
      <RhythmName>{rhythmName}</RhythmName>
      <Temperature>{temperature}°C</Temperature>
    </Circle>
  );
};

export default TemperatureCircle;
