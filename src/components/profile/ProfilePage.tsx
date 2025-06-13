"use client";

import styled from "styled-components";
import ProfileForm from "./ProfileForm";
import ProfileAgreement from "./ProfileAgreement";
import { useProfileForm } from "@/hooks/useProfileForm";

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

export default function ProfilePage() {
  const {
    name,
    gender,
    date,
    focusedField,
    isFormValid,
    handleChange,
    handleFocus,
    handleBlur,
    handleNextClick,
  } = useProfileForm();

  return (
    <Container dimmed={focusedField !== null}>
      <ContentWrapper>
        <ProfileForm
          name={name}
          gender={gender}
          date={date}
          focusedField={focusedField}
          isFormValid={isFormValid}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleNextClick={handleNextClick}
        />
        <ProfileAgreement />
      </ContentWrapper>
    </Container>
  );
}
