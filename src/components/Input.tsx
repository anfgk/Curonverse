"use client";

import styled from "styled-components";
import { FiX } from "react-icons/fi";

// ========================== 스타일 ==========================
const InputWrapper = styled.div`
  position: relative;
  width: 334px;
  margin: 12px 20px;
`;

const InfoInput = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background: #4b4b4b;
  border: none;
  color: #ffffff;
  font-size: 16px;
  padding: 0 40px 0 12px;
  font-weight: bold;

  &::placeholder {
    color: #b0b0b0;
  }

  &:focus {
    outline: 1px solid #cb59ff;
  }

  &[type="date"] {
    color: transparent;
    position: relative;
    z-index: 2;

    &::-webkit-calendar-picker-indicator {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: auto;
      height: auto;
      background: transparent;
      color: transparent;
      cursor: pointer;
      z-index: 3;
    }
  }
`;

const DateText = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "isPlaceholder",
})<{ isPlaceholder?: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => (props.isPlaceholder ? "#b0b0b0" : "#ffffff")};
  pointer-events: none;
  font-weight: bold;
  z-index: 4;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cb59ff;
  z-index: 1;
`;

const GenderContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 12px 20px;
`;

const GenderButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["isSelected", "isPlaceholder"].includes(prop),
})<{ isSelected: boolean; isPlaceholder: boolean }>`
  flex: 1;
  height: 56px;
  border-radius: 10px;
  color: ${(props) => (props.isPlaceholder ? "#b0b0b0" : "#ffffff")};
  background: ${(props) => (props.isSelected ? "#CB59FF" : "#4b4b4b")};
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.isSelected ? "#CB59FF" : "#5b5b5b")};
  }
`;

// ========================== 컴포넌트 ==========================

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Input = ({
  placeholder = "이름을 입력해주세요.",
  value,
  onChange,
  type = "text",
  onFocus,
  onBlur,
}: InputProps) => {
  const handleClear = () => {
    onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    console.log("Formatted date:", date);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  if (type === "gender") {
    const handleGenderClick = (selectedGender: string) => {
      onChange({
        target: { value: selectedGender },
      } as React.ChangeEvent<HTMLInputElement>);
    };

    return (
      <GenderContainer>
        <GenderButton
          isSelected={value === "MALE"}
          isPlaceholder={!value}
          onClick={() => handleGenderClick("MALE")}
        >
          남성
        </GenderButton>
        <GenderButton
          isSelected={value === "FEMALE"}
          isPlaceholder={!value}
          onClick={() => handleGenderClick("FEMALE")}
        >
          여성
        </GenderButton>
      </GenderContainer>
    );
  }

  return (
    <InputWrapper>
      <InfoInput
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={type === "text" ? placeholder : undefined}
      />

      {type === "date" && (
        <DateText isPlaceholder={!value}>
          {value ? formatDate(value) : "생년월일을 입력해주세요."}
        </DateText>
      )}

      {value && type !== "gender" && (
        <ClearButton onClick={handleClear} type="button">
          <FiX size={14} />
        </ClearButton>
      )}
    </InputWrapper>
  );
};

export default Input;
