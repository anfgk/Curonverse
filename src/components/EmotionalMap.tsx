import React from "react";
import styled from "styled-components";
import { CIRCLE_BORDERS, RHYTHM_CIRCLES, STARS } from "@/data/rhythmData";

const MapContainer = styled.div`
  text-align: center;
  position: relative;
`;

const MapTitle = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

const MapSubtitle = styled.div`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;
`;

const CircleContainer = styled.div`
  position: relative;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface CircleBorderProps {
  size: number;
}

const CircleBorder = styled.div<CircleBorderProps>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface CircleProps {
  top: string;
  left?: string;
  right?: string;
  size: string;
  color: string;
  opacity: number;
  isCurrentRhythm?: boolean;
  rhythmName?: string;
}

const Circle = styled.div<CircleProps>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background: ${(props) => props.color};
  opacity: ${(props) => (props.isCurrentRhythm ? 1 : 0.6)};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  transform: ${(props) => (props.left === "50%" ? "translateX(-50%)" : "none")};
  box-shadow: ${(props) =>
    props.isCurrentRhythm
      ? `0 0 10px 5px ${props.color}60,
         0 0 20px 10px ${props.color}40,
         0 0 30px 15px ${props.color}20,
         0 0 40px 20px ${props.color}10`
      : `0 0 10px 5px rgba(255, 255, 255, 0.15),
         0 0 20px 10px rgba(255, 255, 255, 0.1),
         0 0 30px 15px rgba(255, 255, 255, 0.05)`};
  transition: all 0.3s ease;
  z-index: ${(props) => (props.isCurrentRhythm ? 2 : 1)};
  filter: ${(props) =>
    props.isCurrentRhythm ? "none" : "grayscale(0.7) brightness(0.8)"};

  &::after {
    content: ${(props) =>
      props.isCurrentRhythm ? `"${props.rhythmName}"` : "none"};
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: ${(props) => props.color};
    white-space: nowrap;
    text-shadow: 0 0 10px ${(props) => props.color}40;
  }
`;

interface StarProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: string;
}

const Star = styled.div<StarProps>`
  position: absolute;
  color: white;
  font-size: ${(props) => props.size};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;

interface EmotionalMapProps {
  currentRhythm: string;
}

const EmotionalMap: React.FC<EmotionalMapProps> = ({ currentRhythm }) => {
  return (
    <MapContainer>
      <MapTitle>CURONVERSE EMOTIONAL MAP</MapTitle>
      <MapSubtitle>Surface Level</MapSubtitle>

      <CircleContainer>
        {CIRCLE_BORDERS.map((size) => (
          <CircleBorder key={size} size={size} />
        ))}

        {RHYTHM_CIRCLES.map((circle) => (
          <Circle
            key={circle.rhythmName}
            top={circle.top}
            left={circle.left}
            right={circle.right}
            size="35px"
            color={circle.color}
            opacity={1}
            isCurrentRhythm={currentRhythm === circle.rhythmName}
            rhythmName={circle.rhythmName}
          />
        ))}

        {STARS.map((star, index) => (
          <Star
            key={index}
            top={star.top}
            bottom={star.bottom}
            left={star.left}
            right={star.right}
            size={star.size}
          >
            {star.content || "★"}
          </Star>
        ))}
      </CircleContainer>
    </MapContainer>
  );
};

export default EmotionalMap;
