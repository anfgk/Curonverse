"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Text from "@/components/Text";
import Title from "@/components/Title";
import NextButton from "@/components/NextButton";
import ProfileInput from "@/components/ProfileInput";
import PrivacyInfo from "@/components/PrivacyInfo";
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
    setName(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
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

        <ProfileInput
          label="이름"
          value={name}
          onChange={handleNameChange}
          onFocus={() => setFocusedField("name")}
          onBlur={() => setFocusedField(null)}
          placeholder="이름을 입력해주세요."
          isFocused={focusedField === "name"}
          anyFieldFocused={focusedField !== null}
        />

        <ProfileInput
          label="성별"
          value={gender}
          type="gender"
          onChange={handleGenderChange}
          onFocus={() => setFocusedField("gender")}
          onBlur={() => setFocusedField(null)}
          isFocused={focusedField === "gender"}
          anyFieldFocused={focusedField !== null}
        />

        <ProfileInput
          label="생년월일"
          value={date}
          type="date"
          onChange={handleDateChange}
          onFocus={() => setFocusedField("date")}
          onBlur={() => setFocusedField(null)}
          placeholder="생년월일을 입력해주세요."
          helpText="생년월일은 정확한 감정 진단을 위해 사용돼요."
          isFocused={focusedField === "date"}
          anyFieldFocused={focusedField !== null}
        />

        <PrivacyInfo />
        <NextButton onClick={handleNextClick} disabled={!isFormValid} />
      </ContentWrapper>
    </Container>
  );
}
