"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Text from "@/components/Text";
import Title from "@/components/Title";
import NextButton from "@/components/NextButton";
import ProfileInput from "@/components/ProfileInput";
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

const Information = styled.div`
  font-size: 12px;
  color: #b0b0b0;
  margin: 12px 20px 0;
`;

// Profile 페이지 컴포넌트 정의
export default function Profile() {
  // Next.js의 useRouter 훅을 사용해 페이지 이동 및 라우팅 관련 기능 사용
  const router = useRouter();
  // 사용자 이름 상태 관리
  const [name, setName] = useState("");
  // 사용자 성별 상태 관리
  const [gender, setGender] = useState("");
  // 사용자 생년월일 상태 관리
  const [date, setDate] = useState("");
  // 포커스된 필드 상태 관리
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // 사용자 이름 변경 시 실행되는 함수
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 사용자 이름 상태 업데이트
    setName(e.target.value);
  };

  // 사용자 성별 변경 시 실행되는 함수
  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 사용자 성별 상태 업데이트
    setGender(e.target.value);
  };

  // 사용자 생년월일 변경 시 실행되는 함수
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 사용자 생년월일 상태 업데이트
    setDate(e.target.value);
  };

  // 다음 버튼 클릭 시 실행되는 함수
  const handleNextClick = () => {
    // 폼 유효성 검사
    if (isFormValid) {
      // 프로필 정보 저장
      profileService.saveProfile({ name, gender, date });
      // 다음 페이지로 이동
      router.replace("/step1");
    }
  };

  // 폼 유효성 검사
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

        <Information>
          개인정보 수집 및 이용 동의 개인정보 수집 및 이용동의 목적: 쿠론버스
          웹앱 진단 서비스 이용 및 데이터 수집을 통한 서비스 지속적인 개선
          개인정보 수집 항목: 이름/ 생년월일 동의를 거부할 경우 진단 서비스의
          이용이 어렵습니다.
        </Information>
        <NextButton onClick={handleNextClick} disabled={!isFormValid} />
      </ContentWrapper>
    </Container>
  );
}
