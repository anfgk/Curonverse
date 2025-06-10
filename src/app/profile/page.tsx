"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Input from "@/components/Input";
import Text from "@/components/Text";
import Title from "@/components/Title";
import Info from "@/components/Info";
import NextButton from "@/components/NextButton";
import { profileService } from "@/services/profile";

const Container = styled.div<{ dimmed: boolean }>`
  width: 375px;
  height: 812px;
  background: #393939;
  position: fixed;
  overflow: hidden;
  transition: all 0.3s ease;
  ${(props) =>
    props.dimmed &&
    `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.2);
      pointer-events: none;
    }
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const InputWrapper = styled.div<{
  isFocused: boolean;
  anyFieldFocused: boolean;
}>`
  position: relative;
  z-index: ${(props) => (props.isFocused ? 2 : 1)};
  transition: opacity 0.3s ease;
  opacity: ${(props) => {
    if (!props.anyFieldFocused) return 1;
    return props.isFocused ? 1 : 0.5;
  }};
`;

const HelpText = styled.div`
  font-size: 12px;
  color: #b0b0b0;
  margin-top: 12px;
  margin-left: 20px;
`;

const Information = styled.div`
  font-size: 12px;
  color: #b0b0b0;
  margin: 12px 20px 0;
`;

const HeaderWrapper = styled.div<{ anyFieldFocused: boolean }>`
  opacity: ${(props) => (props.anyFieldFocused ? 0.5 : 1)};
  transition: opacity 0.3s ease;
`;

export default function Profile() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGender = e.target.value;
    setGender(newGender);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setDate(newDate);
  };

  const handleNextClick = () => {
    if (isFormValid) {
      profileService.saveProfile({ name, gender, date });
      router.replace("/step1");
    }
  };

  const isFormValid = name !== "" && gender !== "" && date !== "";

  return (
    <Container dimmed={focusedField !== null}>
      <ContentWrapper>
        <HeaderWrapper anyFieldFocused={focusedField !== null}>
          <Text text="프로필 설정" variant="subtitle" />
          <Title
            mainText="탑승권에 기입 될"
            highlightText="프로필 정보를 입력"
            subText="해주세요."
          />
        </HeaderWrapper>
        <InputWrapper
          isFocused={focusedField === "name"}
          anyFieldFocused={focusedField !== null}
        >
          <Info mainText="이름" />
          <Input
            value={name}
            onChange={handleNameChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            placeholder="이름을 입력해주세요."
          />
        </InputWrapper>
        <InputWrapper
          isFocused={focusedField === "gender"}
          anyFieldFocused={focusedField !== null}
        >
          <Info mainText="성별" />
          <Input
            type="gender"
            value={gender}
            onChange={handleGenderChange}
            onFocus={() => setFocusedField("gender")}
            onBlur={() => setFocusedField(null)}
          />
        </InputWrapper>
        <InputWrapper
          isFocused={focusedField === "date"}
          anyFieldFocused={focusedField !== null}
        >
          <Info mainText="생년월일" />
          <Input
            type="date"
            value={date}
            onChange={handleDateChange}
            onFocus={() => setFocusedField("date")}
            onBlur={() => setFocusedField(null)}
            placeholder="생년월일을 입력해주세요."
          />
          <HelpText>생년월일은 정확한 감정 진단을 위해 사용돼요.</HelpText>
          <Information>
            개인정보 수집 및 이용 동의 개인정보 수집 및 이용동의 목적: 쿠론버스
            웹앱 진단 서비스 이용 및 데이터 수집을 통한 서비스 지속적인 개선
            개인정보 수집 항목: 이름/ 생년월일 동의를 거부할 경우 진단 서비스의
            이용이 어렵습니다.
          </Information>
        </InputWrapper>

        <NextButton onClick={handleNextClick} disabled={!isFormValid} />
      </ContentWrapper>
    </Container>
  );
}
