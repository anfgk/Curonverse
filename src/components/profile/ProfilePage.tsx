"use client";

import styled from "styled-components";
import ProfileForm from "./ProfileForm";
import { useProfileForm } from "@/hooks/useProfileForm";

const Container = styled.div<{ $dimmed: boolean }>`
  width: 375px;
  height: 812px;
  background: #393939;
  position: relative;
  transition: all 0.3s ease;

  /* 모바일에서 콘텐츠가 잘리지 않도록 오버플로우만 처리 */
  @media (max-width: 360px) {
    width: 100vw;
    height: 100vh;
  }

  ${(props) =>
    props.$dimmed &&
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
  z-index: 1;
  height: 100%;
`;

export default function ProfilePage() {
  const {
    name,
    gender,
    birthDate,
    focusedField,
    isFormValid,
    handleChange,
    handleFocus,
    handleBlur,
    handleNextClick,
  } = useProfileForm();

  return (
    <Container $dimmed={focusedField !== null}>
      <ContentWrapper>
        <ProfileForm
          name={name}
          gender={gender}
          birthDate={birthDate}
          focusedField={focusedField}
          isFormValid={isFormValid}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleNextClick={handleNextClick}
        />
      </ContentWrapper>
    </Container>
  );
}
