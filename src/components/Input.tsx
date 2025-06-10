"use client";

import styled from "styled-components";
import { FiX } from "react-icons/fi";

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
    position: relative;

    &::-webkit-calendar-picker-indicator {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: auto;
      height: auto;
      color: transparent;
      background: transparent;
      cursor: pointer;
    }

    &::-webkit-datetime-edit {
      display: none;
    }
  }
`;

const DateText = styled.span<{ isPlaceholder?: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => (props.isPlaceholder ? "#b0b0b0" : "#ffffff")};
  pointer-events: none;
  font-weight: bold;
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

const GenderButton = styled.button<{
  isSelected: boolean;
  isPlaceholder: boolean;
}>`
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
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
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
          isSelected={value === "남성"}
          isPlaceholder={!value}
          onClick={() => handleGenderClick("남성")}
        >
          남성
        </GenderButton>
        <GenderButton
          isSelected={value === "여성"}
          isPlaceholder={!value}
          onClick={() => handleGenderClick("여성")}
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
