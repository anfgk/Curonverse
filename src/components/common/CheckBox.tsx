"use client";

import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Circle = styled.div<{ isSelected: boolean; size?: number }>`
  width: ${(props) => `${props.size || 36}px`};
  height: ${(props) => `${props.size || 36}px`};
  border-radius: 50%;
  background-color: ${(props) => (props.isSelected ? "#CB59FF" : "#C8C8C8")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    color: white;
    width: ${(props) => `${props.size ? props.size * 0.55 : 20}px`};
    height: ${(props) => `${props.size ? props.size * 0.55 : 20}px`};
    opacity: ${(props) => (props.isSelected ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;

const Label = styled.span<{
  isFocused: boolean;
  isSelected: boolean;
  hasAnySelection: boolean;
}>`
  color: ${(props) => {
    if (!props.isFocused) return "#C8C8C8";
    if (props.hasAnySelection) {
      return props.isSelected ? "#000" : "#C8C8C8";
    }
    return "#000";
  }};
  font-size: 12px;
  text-align: center;
  width: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease;
  margin-bottom: 18px;
  white-space: pre-line;
  line-height: 1.4;
`;

interface CheckBoxProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  onQuestionClick?: () => void;
  size?: number;
  isFocused?: boolean;
  hasAnySelection?: boolean;
}

const CheckBox = ({
  label,
  isSelected,
  onClick,
  onQuestionClick,
  size,
  isFocused = false,
  hasAnySelection = false,
}: CheckBoxProps) => {
  // 라벨 텍스트 분리
  const formatLabel = (text: string) => {
    switch (text) {
      case "매우 아니다":
        return "매우\n아니다";
      case "매우 그렇다":
        return "매우\n그렇다";
      default:
        return text;
    }
  };

  const handleCircleClick = () => {
    onClick();
    onQuestionClick?.();
  };

  const handleLabelClick = () => {
    onQuestionClick?.();
  };

  return (
    <Container>
      <Circle isSelected={isSelected} onClick={handleCircleClick} size={size}>
        <FiCheck />
      </Circle>
      <Label
        isFocused={isFocused}
        isSelected={isSelected}
        hasAnySelection={hasAnySelection}
        onClick={handleLabelClick}
        style={{ cursor: "pointer" }}
      >
        {formatLabel(label)}
      </Label>
    </Container>
  );
};

export default CheckBox;
