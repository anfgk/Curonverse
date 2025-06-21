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
    color: transparent;

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
      z-index: 2;
    }

    &::-webkit-datetime-edit,
    &::-webkit-datetime-edit-fields-wrapper,
    &::-webkit-datetime-edit-text,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-year-field {
      display: none;
      color: transparent;
      background: transparent;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-clear-button {
      display: none;
      -webkit-appearance: none;
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
  z-index: 1;
  font-size: 16px;
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

// Input 컴포넌트 정의. 여러 props를 구조 분해 할당하며 기본값도 지정
const Input = ({
  placeholder = "이름을 입력해주세요.",
  value,
  onChange,
  type = "text",
  onFocus,
  onBlur,
}: InputProps) => {
  // 입력값을 초기화(비우기)하는 함수 정의
  const handleClear = () => {
    // onChange 이벤트 핸들러를 호출하여 value를 빈 문자열로 설정
    // 타입 단언(as)을 사용하여 React.ChangeEvent<HTMLInputElement> 형태로 전달
    onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
  };

  // 날짜 문자열을 받아서 "YYYY년 MM월 DD일" 형식으로 변환해 주는 함수
  const formatDate = (dateString: string) => {
    // 인자로 받은 dateString이 비어 있거나 null/undefined이면 빈 문자열 반환
    if (!dateString) return "";
    // dateString을 기반으로 JavaScript의 Date 객체 생성
    const date = new Date(dateString);
    // 날짜를 "YYYY년 M월 D일" 형식의 문자열로 변환하여 반환
    return `${date.getFullYear()}년 ${
      // 연도 출력 (예: 2025년)
      date.getMonth() + 1 // 월은 0부터 시작하므로 +1 필요 (예: 0 → 1월)
    }월 ${date.getDate()}일`; // 일 출력 (예: 12일)
  };

  // 만약 type이 "gender"일 경우 실행될 조건문
  if (type === "gender") {
    // 성별 버튼 클릭 시 실행되는 함수 정의
    const handleGenderClick = (selectedGender: string) => {
      // onChange 함수 호출하여 선택된 성별 값을 전달
      // React의 <input> 컴포넌트에서 사용하는 ChangeEvent 형식으로 변환하여 전달
      onChange({
        target: { value: selectedGender }, // 사용자가 선택한 성별 값을 설정
      } as React.ChangeEvent<HTMLInputElement>); // 타입 단언 (ChangeEvent로 처리)
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